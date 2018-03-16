import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import AutoComplete from 'react-autocomplete'
//import { Editors, Formatters } from 'react-data-grid-addons';
//const { DropDownEditor } = Editors;
//const { DropDownFormatter } = Formatters;
//const faker = require('faker');



//const resultArray = ['select1', 'select2', 'select3', 'select4'];
export default class EmployeeData extends Component {
constructor(props,context){
    super(props, context);
    const counties = [
        { id: 0, title: 'junior'},
        { id: 1, title: 'senior'},
        { id: 2, title: 'Lead'},
        { id: 3, title: 'Manager'}
      ];

      
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
          editable: true
        },
        {
          key: 'scheduleGK',
          name: 'Schedule GK',
          editable: true
        },
        // {
        //   key: 'finalResult',
        //   name: 'Final Result',
        // //  editor: <DropDownEditor options={resultArray}/>,
        //   // events: {
        //   //   onDoubleClick: function() {
        //   //     console.log('The user double clicked on title column');
        //   //   }
        //  // }
        //   //formatter: DropDownFormatter
         
        // }
      ]
        let originalRows = this.createRows(10);
        let rows = originalRows.slice(0);
        this.state = { sortColumn :null,sortDirection:null,rows,originalRows };
}
createRows = (numberOfRows) => {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        id: i,
        name: 1 + i,
        testScore: i+2,
        scheduleL1: i+3,
        scheduleGK: i+4,
       // finalResult: i+6
      });
    }
    return rows;
  };

  handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };
    const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);
    //this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
    this.setState({ rows });
  }
  rowGetter = (i) => {
    return this.state.rows[i];
  };
  render() {
    return (<ReactDataGrid
        enableCellSelect={true}
        onGridSort={this.handleGridSort}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={3}   //{this.state.rows.length} 
        minHeight={500}
        //onGridRowsUpdated={this.handleGridRowsUpdated}
         />
    );
  }
}
