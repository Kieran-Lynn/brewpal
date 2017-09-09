import {createStore} from 'redux';
import RecipeReducer from './modules/RecipeReducer'

const initialState = {
    recipeName: "",
    style: "",
    batchSize: 0.0,
    description: "",
    grains: [{grainType: "", amount: "0.0"}],
    hops: [{hopType: "", alphaAcid: "", amount: "0.0", time: "", hopUse: "boil"}],
    yeast: {yeastType: "", fermentationTemp: ""}
};

const configureStore = () => createStore(
    RecipeReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore;