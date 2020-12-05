let data = {
  lastUpdate: 0,
  data: {}
};

export default function index(state = data, action) {

  switch (action.type) {
    case 'SET_ADDRESS_TO_HEROES':
      let res = {...state};
      if (action.address !== null) {
        if (res.data[action.address] !== null) {
          res.data[action.address] = action.heroes;
        } else {
          res.data[action.address] = action.heroes;
        }
        res.lastUpdate = Date.now();
      }
      return res;
    default:
      return state;
  }
}
