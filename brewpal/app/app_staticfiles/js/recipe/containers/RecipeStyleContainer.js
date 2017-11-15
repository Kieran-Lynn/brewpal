import { connect } from 'react-redux'
import { actions } from '../redux/modules/RecipeReducer'
import RecipeStyle from '../components/RecipeStyle'

const mapStateToProps = (state) => {
    return {
        style: state.RecipeReducer.style
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleStyleChange: (style) => {
            dispatch(actions.updateStyle(style))
        },
    }
};

const RecipeStyleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeStyle);

export default RecipeStyleContainer