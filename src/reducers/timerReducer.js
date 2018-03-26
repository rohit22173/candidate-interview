
let defaultState = {
	startTimer: false;
}

const timerReducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'START_TIMER':
			state = {
				...state,
				timer: action.payload
			};
		 break;
		 default : 
		 state
	}
	return state;
};

export default timerReducer;