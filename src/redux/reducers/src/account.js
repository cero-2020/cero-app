let data = {
  wallet: null,
  walletFormatted: null,
  balance: null,
};

export default function index(state = data, action) {
  switch (action.type) {
    case 'SET_ACCOUNT_WALLET':
      return {
        ...state,
        wallet: action.payload,
        walletFormatted: action.payload.toUpperCase(),
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
