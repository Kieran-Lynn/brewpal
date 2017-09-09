import {filterNonNumber} from "../../../shared/utils";

const action_types =
    {
        UPDATE_BATCH_SIZE: 'UPDATE_BATCH_SIZE',
        UPDATE_DESCRIPTION: 'UPDATE_DESCRIPTION',
        UPDATE_RECIPE_NAME: 'UPDATE_RECIPE_NAME',
        UPDATE_STYLE: 'UPDATE_STYLE'
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

        default:
            return state
    }
}; export default RecipeReducer

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
    }
};