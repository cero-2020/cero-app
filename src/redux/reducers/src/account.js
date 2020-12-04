let data = {
  wallet: null,
  balance: null,
};

export default function user(state = data, action) {
  switch (action.type) {
    case 'SET_ACCOUNT_WALLET':
      return {
        ...state,
        wallet: action.payload,
      };
    case 'SET_ACCOUNT_BALANCE':
      return {
        ...state,
        balance: action.payload,
      };
    default:
      return state;
  }
}
