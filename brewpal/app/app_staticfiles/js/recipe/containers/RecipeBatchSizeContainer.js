import { connect } from 'react-redux'
import { actions } from '../redux/modules/RecipeReducer'
import RecipeBatchSize from '../components/RecipeBatchSize'

const mapStateToProps = (state) => {
    return {
        batchSize: state.batchSize
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleBatchSizeChange: (batchSize) => {
            dispatch(actions.updateBatchSize(batchSize))
        },
    }
};

const RecipeBatchSizeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeBatchSize);

export default RecipeBatchSizeContainer