let data = {
  info: {}
};

export default function index(state = data, action) {
  switch (action.type) {
    case 'SET_HERO_CREATED':
      return {
        info: action.payload
      };
    default:
      return state;
  }
}
