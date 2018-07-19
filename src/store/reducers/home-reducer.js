const initialState = {
    brandsLogo: []
};


const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'brandLogo':
        return state
        default: 
        return state;
    }

}

export default homeReducer;