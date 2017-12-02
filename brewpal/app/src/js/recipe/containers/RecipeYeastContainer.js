import { connect } from 'react-redux';
import { actions } from '../redux/modules/RecipeReducer';
import RecipeYeast from '../components/RecipeYeast';

const mapStateToProps = state => ({
    yeast: state.RecipeReducer.yeast,
});

const mapDispatchToProps = dispatch => ({
    handleYeastChange: (yeast) => {
        dispatch(actions.updateYeast(yeast));
    },
});

const RecipeYeastContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeYeast);

export default RecipeYeastContainer;

