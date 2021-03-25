import dialogsReducer, {addMessage} from "../../redux/reducers/dialogs-reducer";

const state = {
     dialogs : [
         {id: 1, isActive: true, messages: []}
     ],
};

const updateState = (action) => dialogsReducer(state, action);

it('message should be added', () => {
    const newState = updateState(addMessage({name: 'Iron'}, 'hello'))
    expect(newState.dialogs.length).toBe(1);
})