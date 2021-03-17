import appReducer, {initializedSuccessful} from "./appReducer";

const state = {
    initialized: false
}

const createState = (action)  => appReducer(state, action);

it('app should be initialized', () => {
    const newState = createState(initializedSuccessful())
    expect(newState.initialized).toBeTruthy()
})