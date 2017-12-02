import { connect } from 'react-redux';
import { actions } from '../redux/modules/GrainsReducer';
import RecipeGrains from '../components/RecipeGrains';

const mapStateToProps = state => ({
    disableDelete: Object.keys(state.GrainsReducer.grains).length < 2,
    grains: state.GrainsReducer.grains,
});

const mapDispatchToProps = dispatch => ({
    handleGrainChange: (grain, index) => {
        dispatch(actions.updateGrain(grain, index));
    },
    handleDeleteGrain: (grain) => {
        dispatch(actions.deleteGrain(grain));
    },
    handleAddGrain: () => {
        dispatch(actions.addGrain());
    },
});

const RecipeGrainsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeGrains);

export default RecipeGrainsContainer;
