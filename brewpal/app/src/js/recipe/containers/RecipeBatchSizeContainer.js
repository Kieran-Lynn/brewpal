import { connect } from 'react-redux';
import { actions } from '../redux/modules/RecipeReducer';
import RecipeBatchSize from '../components/RecipeBatchSize';

const mapStateToProps = state => ({
    batchSize: state.RecipeReducer.batchSize,
});

const mapDispatchToProps = dispatch => ({
    handleBatchSizeChange: (batchSize) => {
        dispatch(actions.updateBatchSize(batchSize));
    },
});

const RecipeBatchSizeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeBatchSize);

export default RecipeBatchSizeContainer;
