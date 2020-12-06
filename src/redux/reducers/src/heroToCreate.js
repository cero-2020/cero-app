let data = {
  hero1: null,
  hero2: null,
};

export default function index(state = data, action) {
  switch (action.type) {
    case 'SET_TO_CREATE_HERO_1':
      return {
        ...state,
        hero1: action.payload,
        hero2: null,
      };
    case 'SET_TO_CREATE_HERO_2':
      return {
        ...state,
        hero2: action.payload,
      };
    default:
      return state;
  }
}
