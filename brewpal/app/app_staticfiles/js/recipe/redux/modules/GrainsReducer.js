const action_types = {
    UPDATE_GRAINS: 'UPDATE_GRAINS',
    ADD_GRAIN: 'ADD_GRAIN',
    DELETE_GRAIN: 'DELETE_GRAIN',
}

const updateObject = (oldObject, newValues) => {
    return Object.assign({}, oldObject, newValues);
};

const GrainsReducer = (state = {}, action) => {
    switch (action.type) {
        case action_types.UPDATE_GRAINS:
            let updatedGrains = state.grains.map((grain, i) => {
                if (i === action.index) {
                    return action.grain
                }
                return grain;
            });

            return updateObject(state, {
                grains: updatedGrains
            });

        case action_types.ADD_GRAIN:
            let emptyGrain = {
                grainType: "",
                amount: "0.0"
            };
            let copiedGrains = state.grains.map((grain) => {
                return grain
            });
            updatedGrains = copiedGrains.concat(emptyGrain);

            return updateObject(state, {
                grains: updatedGrains
            });

        case action_types.DELETE_GRAIN:
            updatedGrains = state.grains.filter(g => g !== action.grain)

            return updateObject(state, {
                grains: updatedGrains
            });

        default:
            return state
    }
}
export default GrainsReducer

export const actions = {
    updateGrain: (grain, index) => {
        return {
            type: action_types.UPDATE_GRAINS,
            grain,
            index
        }
    },
    addGrain: () => {
        return {
            type: action_types.ADD_GRAIN
        }
    },
    deleteGrain: (grain) => {
        return {
            type: action_types.DELETE_GRAIN,
            grain
        }
    }
}