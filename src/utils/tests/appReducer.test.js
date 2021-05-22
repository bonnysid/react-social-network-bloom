import appReducer, {initializedSuccessful} from "../../store/reducers/app-reducer";

const state = {
    initialized: false
}

const createState = (action)  => appReducer(state, action);

it('app should be initialized', () => {
    const newState = createState(initializedSuccessful())
    expect(newState.initialized).toBeTruthy()
})
