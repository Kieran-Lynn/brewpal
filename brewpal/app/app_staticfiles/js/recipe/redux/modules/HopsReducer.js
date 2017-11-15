const action_types = {
    UPDATE_HOPS: 'UPDATE_HOPS',
    ADD_HOP: 'ADD_HOP',
    DELETE_HOP: 'DELETE_HOP'
}

const updateObject = (oldObject, newValues) => {
    return Object.assign({}, oldObject, newValues);
};

const HopsReducer = (state = {}, action) => {
    switch (action.type) {
        case action_types.UPDATE_HOPS:
            let updatedHops = state.hops.map((hop, i) => {
                if (i === action.index) {
                    return action.hop
                }
                return hop;
            });

            return updateObject(state, {
                hops: updatedHops
            });

        case action_types.ADD_HOP:
            let emptyHop = {
                hopType: "",
                alphaAcid: "",
                amount: "0.0",
                time: "",
                hopUse: "boil"
            };
            let copiedHops = state.hops.map((hop) => {
                return hop
            });
            updatedHops = copiedHops.concat(emptyHop);

            return updateObject(state, {
                hops: updatedHops
            });

        case action_types.DELETE_HOP:
            updatedHops = state.hops.filter(g => g !== action.hop)

            return updateObject(state, {
                hops: updatedHops
            });

        default:
            return state
    }
}

export default HopsReducer

export const actions = {
    updateHop: (hop, index) => {
        return {
            type: action_types.UPDATE_HOPS,
            hop,
            index
        }
    },
    addHop: () => {
        return {
            type: action_types.ADD_HOP
        }
    },
    deleteHop: (hop) => {
        return {
            type: action_types.DELETE_HOP,
            hop
        }
    }
}