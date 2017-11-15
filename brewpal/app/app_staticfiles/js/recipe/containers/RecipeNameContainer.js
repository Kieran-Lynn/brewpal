import { connect } from 'react-redux'
import { actions } from '../redux/modules/RecipeReducer'
import RecipeName from '../components/RecipeName'

const mapStateToProps = (state) => {
    return {
        recipeName: state.RecipeReducer.recipeName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleRecipeNameChange: (name) => {
            dispatch(actions.updateRecipeName(name))
        },
    }
};

const RecipeNameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeName);

export default RecipeNameContainer