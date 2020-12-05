let data = {
  lastUpdate: 0,
};

export default function index(state = data, action) {
  switch (action.type) {
    case 'SET_LAST_SYNC_UPDATE':
      return {
        lastUpdate: Date.now(),
      };
    default:
      return state;
  }
}
