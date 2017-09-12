import {connect} from 'react-redux'
import {actions} from '../redux/modules/RecipeReducer'
import Recipe from '../components/Recipe'

const mapStateToProps = (state) => {
    return {
        batchSize: state.batchSize,
        description: state.description,
        recipeName: state.recipeName,
        style: state.style
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleBatchSizeChange: (batchSize) => {
            dispatch(actions.updateBatchSize(batchSize))
        },

        handleDescriptionChange: (description) => {
            dispatch(actions.updateDescription(description))
        },

        handleRecipeNameChange: (name) => {
            dispatch(actions.updateRecipeName(name))
        },

        handleStyleChange: (style) => {
            dispatch(actions.updateStyle(style))
        },

        handleAddGrain: () => {
            dispatch(actions.addGrain())
        }
    }
};

const RecipeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipe);

export default RecipeContainer