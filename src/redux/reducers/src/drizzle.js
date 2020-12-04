let data = null;

export default function user(state = data, action) {
  switch (action.type) {
    case 'SET_DRIZZLE':
      return action.payload;
    default:
      return state;
  }
}
