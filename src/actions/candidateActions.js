
import axios from 'axios';

export function getCandidates() {
		const request =  axios.get('../data.json');

		return (dispatch) => {
			request.then(({response}) => {
				dispatch(loadCandidates(response.data.details));
			})
		}
	}

export function loadCandidates(candidatesList) {
	return {
		type: 'GET_CANDIDATES',
		payload: candidatesList
	}
}

export function startTimer (isTimerStart) {
	return {
		type: 'START_TIMER',
		payload: isTimerStart
	}
}
export function selectL1 (row) {
	row.scheduleL1 = (row.scheduleL1) ? false : true;
	return {
		type: 'SELECT_L1',
		payload: row
	}
}
export function selectGk (row) {
	row.scheduleGk = (row.scheduleGk) ? false : true;
	return {
		type: 'SELECT_GK',
		payload: row
	}
}
export function addName(name) {
	return {
		type: 'ADD_NAME',
		payload: name
	}
}

export function setScore(score) {
	return {
		type: 'ADD_SCORE',
		payload: score
	}
}

export function L1Schedule(result) {
	return {
		type: 'L1_SCEDULE',
		payload: result
	}
}

export function GkSchedule(result) {
	return {
		type: 'GK_SCEDULE',
		payload: result
	}
}