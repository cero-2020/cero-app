let data = {};

export default function index(state = data, action) {

  switch (action.type) {
    case 'SET_ADDRESS_TO_HEROES':
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
