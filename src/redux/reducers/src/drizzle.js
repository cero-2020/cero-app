let data = null;

export default function index(state = data, action) {
  switch (action.type) {
    case 'SET_DRIZZLE':
      return action.payload;
    default:
      return state;
  }
}
