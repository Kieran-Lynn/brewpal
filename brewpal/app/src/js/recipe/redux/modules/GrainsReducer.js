const actionTypes = {
    UPDATE_GRAINS: 'UPDATE_GRAINS',
    ADD_GRAIN: 'ADD_GRAIN',
    DELETE_GRAIN: 'DELETE_GRAIN',
};

const updateObject = (oldObject, newValues) => Object.assign({}, oldObject, newValues);

const GrainsReducer = (state = {}, action) => {
    let updatedGrains;
    const emptyGrain = {
        grainType: '',
        amount: '0.0',
    };
    switch (action.type) {
    case actionTypes.UPDATE_GRAINS:
        updatedGrains = state.grains.map((grain, i) => {
            if (i === action.index) {
                return action.grain;
            }
            return grain;
        });

        return updateObject(state, {
            grains: updatedGrains,
        });

    case actionTypes.ADD_GRAIN:
        updatedGrains = state.grains.map(grain => grain).concat(emptyGrain);

        return updateObject(state, {
            grains: updatedGrains,
        });

    case actionTypes.DELETE_GRAIN:
        updatedGrains = state.grains.filter(g => g !== action.grain);

        return updateObject(state, {
            grains: updatedGrains,
        });

    default:
        return state;
    }
};
export default GrainsReducer;

export const actions = {
    updateGrain: (grain, index) => ({
        type: actionTypes.UPDATE_GRAINS,
        grain,
        index,
    }),
    addGrain: () => ({
        type: actionTypes.ADD_GRAIN,
    }),
    deleteGrain: grain => ({
        type: actionTypes.DELETE_GRAIN,
        grain,
    }),
};
