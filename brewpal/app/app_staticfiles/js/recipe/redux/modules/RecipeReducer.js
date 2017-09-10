import {filterNonNumber} from "../../../shared/utils";

const action_types =
    {
        UPDATE_BATCH_SIZE: 'UPDATE_BATCH_SIZE',
        UPDATE_DESCRIPTION: 'UPDATE_DESCRIPTION',
        UPDATE_RECIPE_NAME: 'UPDATE_RECIPE_NAME',
        UPDATE_STYLE: 'UPDATE_STYLE',
        UPDATE_YEAST: 'UPDATE_YEAST',
        UPDATE_GRAINS: 'UPDATE_GRAINS'
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
            const newYeast = {yeastType: action.yeast.yeastType, fermentationTemp: action.yeast.fermentationTemp};
            return updateObject(state, {yeast: newYeast});

        case action_types.UPDATE_GRAINS:
            const updatedGrains = state.grains;
            updatedGrains[action.index] = action.grain;

            return updateObject(state, {grains: updatedGrains})

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
    }
};