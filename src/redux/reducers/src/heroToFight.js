let data = {
  hero1: null,
  hero2: null,
};

export default function user(state = data, action) {
  switch (action.type) {
    case 'SET_TO_FIGHT_HERO_1':
      return {
        ...state,
        hero1: action.payload,
      };
    case 'SET_TO_FIGHT_HERO_2':
      return {
        ...state,
        hero2: action.payload,
      };
    default:
      return state;
  }
}
