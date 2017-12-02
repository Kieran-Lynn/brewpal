const actionTypes = {
    UPDATE_HOPS: 'UPDATE_HOPS',
    ADD_HOP: 'ADD_HOP',
    DELETE_HOP: 'DELETE_HOP',
};

const updateObject = (oldObject, newValues) => Object.assign({}, oldObject, newValues);

const HopsReducer = (state = {}, action) => {
    let updatedHops;
    const emptyHop = {
        hopType: '',
        alphaAcid: '',
        amount: '0.0',
        time: '',
        hopUse: 'boil',
    };
    switch (action.type) {
    case actionTypes.UPDATE_HOPS:
        updatedHops = state.hops.map((hop, i) => {
            if (i === action.index) {
                return action.hop;
            }
            return hop;
        });

        return updateObject(state, {
            hops: updatedHops,
        });

    case actionTypes.ADD_HOP:
        updatedHops = state.hops.map(hop => hop).concat(emptyHop);

        return updateObject(state, {
            hops: updatedHops,
        });

    case actionTypes.DELETE_HOP:
        updatedHops = state.hops.filter(g => g !== action.hop);

        return updateObject(state, {
            hops: updatedHops,
        });

    default:
        return state;
    }
};

export default HopsReducer;

export const actions = {
    updateHop: (hop, index) => ({
        type: actionTypes.UPDATE_HOPS,
        hop,
        index,
    }),
    addHop: () => ({
        type: actionTypes.ADD_HOP,
    }),
    deleteHop: hop => ({
        type: actionTypes.DELETE_HOP,
        hop,
    }),
};
