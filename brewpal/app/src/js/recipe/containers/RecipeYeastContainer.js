import { connect } from 'react-redux'
import { actions } from '../redux/modules/RecipeReducer'
import RecipeYeast from '../components/RecipeYeast'

const mapStateToProps = (state) => {
    return {
        yeast: state.RecipeReducer.yeast
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleYeastChange: (yeast) => {
            dispatch(actions.updateYeast(yeast))
        }
    }
};

const RecipeYeastContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeYeast);

export default RecipeYeastContainer