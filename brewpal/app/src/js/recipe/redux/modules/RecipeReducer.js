import { filterNonNumber } from '../../../shared/utils';

const actionTypes = {
    UPDATE_BATCH_SIZE: 'UPDATE_BATCH_SIZE',
    UPDATE_DESCRIPTION: 'UPDATE_DESCRIPTION',
    UPDATE_RECIPE_NAME: 'UPDATE_RECIPE_NAME',
    UPDATE_STYLE: 'UPDATE_STYLE',
    UPDATE_YEAST: 'UPDATE_YEAST',
};

const updateObject = (oldObject, newValues) => Object.assign({}, oldObject, newValues);

const RecipeReducer = (state = {}, action) => {
    switch (action.type) {
    case actionTypes.UPDATE_BATCH_SIZE:
        return updateObject(state, {
            batchSize: filterNonNumber(action.batchSize),
        });

    case actionTypes.UPDATE_DESCRIPTION:
        return updateObject(state, {
            description: action.description,
        });

    case actionTypes.UPDATE_RECIPE_NAME:
        return updateObject(state, {
            recipeName: action.name,
        });

    case actionTypes.UPDATE_STYLE:
        return updateObject(state, {
            style: action.style,
        });

    case actionTypes.UPDATE_YEAST:
        return updateObject(state, {
            yeast: action.yeast,
        });

    default:
        return state;
    }
};
export default RecipeReducer;

export const actions = {
    updateRecipeName: name => ({
        type: actionTypes.UPDATE_RECIPE_NAME,
        name,
    }),
    updateStyle: style => ({
        type: actionTypes.UPDATE_STYLE,
        style,
    }),
    updateBatchSize: batchSize => ({
        type: actionTypes.UPDATE_BATCH_SIZE,
        batchSize,
    }),
    updateDescription: description => ({
        type: actionTypes.UPDATE_DESCRIPTION,
        description,
    }),
    updateYeast: yeast => ({
        type: actionTypes.UPDATE_YEAST,
        yeast,
    }),
};
