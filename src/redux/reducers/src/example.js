let data = {
    defaultData: 'default',
};

export default function index(state = data, action) {
    switch (action.type) {
        case 'CHANGE_DEFAULT_DATA':
            return {
                ...state,
                defaultData: action.payload,
            };
        default:
            return state;
    }
}