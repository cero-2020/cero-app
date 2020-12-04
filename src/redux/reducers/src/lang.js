let data = 'en-GB';

export default function user(state = data, action) {
  switch (action.type) {
    case 'SET_LANG':
      return action.payload;
    default:
      return state;
  }
}
