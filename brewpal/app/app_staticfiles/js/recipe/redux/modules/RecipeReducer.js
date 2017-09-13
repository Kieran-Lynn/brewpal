import {filterNonNumber} from "../../../shared/utils";

const action_types =
    {
        UPDATE_BATCH_SIZE: 'UPDATE_BATCH_SIZE',
        UPDATE_DESCRIPTION: 'UPDATE_DESCRIPTION',
        UPDATE_RECIPE_NAME: 'UPDATE_RECIPE_NAME',
        UPDATE_STYLE: 'UPDATE_STYLE',
        UPDATE_YEAST: 'UPDATE_YEAST',
        UPDATE_GRAINS: 'UPDATE_GRAINS',
        ADD_GRAIN: 'ADD_GRAIN',
        DELETE_GRAIN: 'DELETE_GRAIN',
        UPDATE_HOPS: 'UPDATE_HOPS',
        ADD_HOP: 'ADD_HOP',
        DELETE_HOP: 'DELETE_HOP'
    };

const updateObject = (oldObject, newValues) => {
    return Object.assign({}, oldObject, newValues);
};

const RecipeReducer = (state, action) => {
    switch (action.type) {
        case action_types.UPDATE_BATCH_SIZE:
            return updateObject(state, {batchSize: filterNonNumber(action.batchSize)});

        case action_types.UPDATE_DESCRIPTION:
            return updateObject(state, {description: action.description});

        case action_types.UPDATE_RECIPE_NAME:
            return updateObject(state, {recipeName: action.name});

        case action_types.UPDATE_STYLE:
            return updateObject(state, {style: action.style});

        case action_types.UPDATE_YEAST:
            return updateObject(state, {yeast: action.yeast});

        case action_types.UPDATE_GRAINS:
            let updatedGrains = state.grains.map((grain, i) => {
                if (i === action.index) {
                    return action.grain
                }
                return grain;
            });

            return updateObject(state, {grains: updatedGrains});

        case action_types.ADD_GRAIN:
            let emptyGrain = {grainId: "", grainType: "", amount: "0.0"};
            let copiedGrains = state.grains.map((grain) => {
                return grain
            });
            updatedGrains = copiedGrains.concat(emptyGrain);

            return updateObject(state, {grains: updatedGrains});

        case action_types.DELETE_GRAIN:
            updatedGrains = state.grains.filter(g => g !== action.grain)

            return updateObject(state, {grains: updatedGrains});

        /***************hops*****/


        case action_types.UPDATE_HOPS:
            let updatedHops = state.hops.map((hop, i) => {
                if (i === action.index) {
                    return action.hop
                }
                return hop;
            });

            return updateObject(state, {hops: updatedHops});

        case action_types.ADD_HOP:
            let emptyHop = {hopType: "", alphaAcid: "", amount: "0.0", time: "", hopUse: "boil"};
            let copiedHops = state.hops.map((hop) => {
                return hop
            });
            updatedHops = copiedHops.concat(emptyHop);

            return updateObject(state, {hops: updatedHops});

        case action_types.DELETE_HOP:
            updatedHops = state.hops.filter(g => g !== action.hop)

            return updateObject(state, {hops: updatedHops});

        default:
            return state
    }
};
export default RecipeReducer

export const actions = {
    updateRecipeName: (name) => {
        return {
            type: action_types.UPDATE_RECIPE_NAME,
            name
        }
    },
    updateStyle: (style) => {
        return {
            type: action_types.UPDATE_STYLE,
            style
        }
    },
    updateBatchSize: (batchSize) => {
        return {
            type: action_types.UPDATE_BATCH_SIZE,
            batchSize
        }
    },
    updateDescription: (description) => {
        return {
            type: action_types.UPDATE_DESCRIPTION,
            description
        }
    },
    updateYeast: (yeast) => {
        return {
            type: action_types.UPDATE_YEAST,
            yeast
        }
    },
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
    },
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
};