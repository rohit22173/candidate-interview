
let defaultState = {
	candidateList : [
		{
        id: 1,
        name: 2,
        testScore: 3,
        scheduleL1: 3,
        isL1TimeStart: false,
        l1Time: 0,
        scheduleGK: 3,
        isGkTimerStart: false,
        gkTime: 0,
        isCandidateSelected: false
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
		 case 'START_TIMER':
			state = {
				...state,
				candidateList: action.payload
			};
		 break;
		 case 'SELECT_L1':
			state = {
				...state,
				candidateList: action.payload
			};
		 break;
		 case 'SELECT_GK':
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