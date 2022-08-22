


export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload;
        default:
            return state;
    }
}

