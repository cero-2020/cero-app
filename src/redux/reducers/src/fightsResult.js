let data = [];

export default function index(state = data, action) {
  switch (action.type) {
    case 'SET_FIGHTS_RESULT':
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
