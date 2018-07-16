export default function GameState (state = {} , action ) {
	switch(action.type) {
		case  'SHOW_ERROR_NOTIFIER':
			return {
				isError: true,
				message: action.payload.message
			}
		case  'HIDE_ERROR_NOTIFIER':
			return {
				isError: false,
				message: ''
			}
		default :
			return state;
	}
}
