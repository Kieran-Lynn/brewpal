import { connect } from 'react-redux'
import { actions } from '../redux/modules/RecipeReducer'
import RecipeDescription from '../components/RecipeDescription'

const mapStateToProps = (state) => {
    return {
        description: state.RecipeReducer.description
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDescriptionChange: (description) => {
            dispatch(actions.updateDescription(description))
        },
    }
};

const RecipeDescriptionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeDescription);

export default RecipeDescriptionContainer