import { connect } from 'react-redux'
import { actions } from '../redux/modules/RecipeReducer'
import RecipeGrains from '../components/RecipeGrains'

const mapStateToProps = (state) => {
    return {
        disableDelete: Object.keys(state.grains).length < 2,
        grains: state.grains
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGrainChange: (grain, index) => {
            dispatch(actions.updateGrain(grain, index))
        },
        handleDeleteGrain: (grain) => {
            dispatch(actions.deleteGrain(grain))
        }
    }
};

const RecipeGrainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeGrains);

export default RecipeGrainContainer