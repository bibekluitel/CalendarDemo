import {isEventPresentInSlot} from 'Container/utils/Util.js';

export const addEvent =(payload) => (dispatch, getState) => {
	const state = getState();
	payload.id = state.events.length? Math.max.apply(Math, state.events.map(function(o) { return o.id; }))+1: 0;
	dispatch({
		type: "ADD_EVENT",
		payload
	});
};

export const updateEvent = (payload) => (dispatch, getState) => {
	dispatch({
		type: "UPDATE_EVENT",
		payload
	});
}

export const deleteEvent = (payload) => (dispatch, getState) => {
	dispatch({
		type: "DELETE_EVENT",
		payload
	});
}

export const showErrorNotifier = (payload) => ({
	type: 'SHOW_ERROR_NOTIFIER',
	payload
})
export const hideErrorNotifier = () => ({
	type: 'HIDE_ERROR_NOTIFIER'
});

export const errorNotifier = (payload) => (dispatch, getState) => {
	dispatch(showErrorNotifier(payload));
	setTimeout( ()=> {
		dispatch(hideErrorNotifier())
	}, 3000);
};
