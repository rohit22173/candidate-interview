
let defaultState = {
	candidateList : [
		{
        id: 1,
        name: 2,
        testScore: 3,
        scheduleL1: 3,
        scheduleGK: 3,
       // finalResult: i+6
      }
	]
}

const candidateReducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'GET_CANDIDATES':
			state = {
				...state,
				candidateList: action.payload
			};
		 break;
		 default : 
		 state
	}
	return state;
};

export default candidateReducer;