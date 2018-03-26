import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import { connect } from 'react-redux';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import { Toolbar,Editors, Formatters } from 'react-data-grid-addons';
import axios from 'axios';

import Timer from '../component/timer';
import * as actionCreators from '../actions/candidateActions';
import './App.css';

const { DropDownEditor } = Editors;
const { DropDownFormatter } = Formatters;


const { Row } = ReactDataGrid;


class RowRenderer extends React.Component {
  static propTypes = {
    idx: PropTypes.number.isRequired
  };

  setScrollLeft = (scrollBy) => {
    // if you want freeze columns to work, you need to make sure you implement this as apass through
    this.row.setScrollLeft(scrollBy);
  };

  getRowStyle = () => {
    return {
      color: this.getRowBackground()
    };
  };

  getRowBackground = () => {
    return this.props.row.testScore > 3 ?  'green' : 'red';
  };

  render() {
    // here we are just changing the style
    // but we could replace this with anything we liked, cards, images, etc
    // usually though it will just be a matter of wrapping a div, and then calling back through to the grid
    return (<div className={this.getRowBackground()}><Row ref={ node => this.row = node } {...this.props}/></div>);
  }
}


class App extends Component {
 constructor(props,context){
    super(props, context);

    const resultArray = ['L1Reject', 'L2Reject', 'L3Reject', 'Selected']; 
    this._columns = [
        {
          key: 'id',
          name: 'ID',
          locked:true,
          width: 80
        },
        {
          key: 'name',
          name: 'Name',
          sortable:true,
          editable: true
        },
        {
          key: 'testScore',
          name: 'Test Score',
          sortable:true,
          editable: true
        },
        {
          key: 'scheduleL1',
          name: 'Schedule L1',
          formatter: Timer        
        },
        {
          key: 'scheduleGK',
          name: 'Schedule GK',
          formatter: Timer
        },
        {
          key: 'finalResult',
          name: 'Final Result',
         editor: <DropDownEditor options={resultArray}/>,
          events: {
            onClick: function() {
             
            }
         },
         // formatter: DropDownFormatter
         
        }
       
      ]
        let originalRows = this.props.candidateList;
        console.log(originalRows);
        let rows = originalRows.slice(0);
        this.state = { sortColumn :null,sortDirection:null,rows,originalRows };

}

deleteRows(id) {
  let rows = this.state.rows.slice();
  this.state.selectedIds.map( function (value) {
  rows.forEach(function(result, index) {
  if(result[id] === value) {
  rows.splice(index, 1);
  }
  });
  });
  this.setState({ rows });
  }

componentDidMount() {
  axios.get('../data.json')
    .then((response) => {
      this.props.loadCandidates(response.data.details);
      let originalRows = this.props.candidateList;
        console.log(originalRows);
        let rows = originalRows.slice(0);
        this.setState( { sortColumn :null,sortDirection:null,rows,originalRows });
    });
  }

  handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };
    const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);
  
    this.setState({ rows });
  }
  rowGetter = (i) => {
    return this.state.rows[i];
  };

  handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    let rows = this.state.rows.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }

    this.setState({ rows });
  };

  _delete() {
    let rows = this.state.rows.slice();
    this.state.selectedIds.map( function (value) {
    rows.forEach(function(result, index) {
    if(result['id'] === value) {
    rows.splice(index, 1);
    }
    });
    });
    this.setState({ rows });
    }

  handleAddRow = ({ newRowIndex }) => {
    const newRow = {
      id: newRowIndex+1,
      name: '',
      testScore: '',
      scheduleL1: ''
    };

    let rows = this.state.rows.slice();
    rows = update(rows, {$push: [newRow]});
    this.setState({ rows });
  };

  createRows = (numberOfRows) => {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        id: i,
        name: 1 + i,
        testScore: i+2,
        scheduleL1: i+2,
        scheduleGK: 'start',
        finalResult: '',
        delete:''
      });
    }
    return rows;
  };




  render() {
    return (<ReactDataGrid
        enableCellSelect={true}
        onGridSort={this.handleGridSort.bind(this)}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}   //{this.state.rows.length} 
        minHeight={500}
        toolbar={<Toolbar onAddRow={this.handleAddRow.bind(this) }  onDeleteRow={this._delete.bind(this)}/>}
        rowRenderer={RowRenderer}
        onGridRowsUpdated={this.handleGridRowsUpdated}
        enableRowSelect={true}
         />
    );
    }
}

const mapStateToProps = (state) => {
  return state.candidateReducer
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCandidates : (candidateList) => {
        dispatch(
        actionCreators.loadCandidates(candidateList)
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
