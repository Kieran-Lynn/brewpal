import {
    createStore,
    combineReducers
} from 'redux';
import RecipeReducer from './modules/RecipeReducer'
import HopsReducer from './modules/HopsReducer'
import GrainsReducer from './modules/GrainsReducer'

const initialState = {
    RecipeReducer: {
        recipeName: "",
        style: "",
        batchSize: "0.0",
        description: "",
        yeast: {
            yeastType: "",
            fermentationTemp: ""
        }
    },
    GrainsReducer: {
        grains: [{
            grainType: "",
            amount: "0.0"
        }],
    },
    HopsReducer: {
        hops: [{
            hopType: "",
            alphaAcid: "",
            amount: "0.0",
            time: "",
            hopUse: "boil"
        }],
    }
};

const reducer = combineReducers({
    RecipeReducer,
    HopsReducer,
    GrainsReducer
})

const configureStore = () => createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;