export default function startReducer (state = [] , action ) {
	switch(action.type) {
		case 'ADD_EVENT':
			return [
				...state,
				action.payload
			];
		case 'UPDATE_EVENT':
			return state.map((singleEvent)=> {
				if(singleEvent.id === action.payload.id) {
					return action.payload;
				}
				return singleEvent;
			});
		case 'DELETE_EVENT':
			return state.filter((singleEvent) => {
				if(singleEvent.id === action.payload.id){
					return false;
				}
				return true;
			});
		default :
			return state;
	}
}
