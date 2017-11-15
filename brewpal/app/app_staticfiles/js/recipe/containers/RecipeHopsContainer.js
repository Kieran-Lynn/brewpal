import { connect } from 'react-redux'
import { actions } from '../redux/modules/RecipeReducer'
import RecipeHops from '../components/RecipeHops'

const mapStateToProps = (state) => {
    return {
        disableDelete: Object.keys(state.HopsReducer.hops).length < 2,
        hops: state.HopsReducer.hops
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleHopChange: (hop, index) => {
            dispatch(actions.updateHop(hop, index))
        },
        handleDeleteHop: (hop) => {
            dispatch(actions.deleteHop(hop))
        },
        handleAddHop: () => {
            dispatch(actions.addHop())
        }
    }
};

const RecipeHopsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeHops);

export default RecipeHopsContainer