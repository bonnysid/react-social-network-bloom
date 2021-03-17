import authReducer, {setAuthUserInfo, setLoggedUser} from "./authReducer";

const state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loggedUser: null
}

const updateState = (action) => authReducer(state, action);

it('user data should be correct', () => {
    const newState = updateState(setAuthUserInfo(1, 'random@mail.com', 'random', true))
    expect(newState.userId).toBe(1);
    expect(newState.email).toBe('random@mail.com');
    expect(newState.login).toBe('random');
    expect(newState.isAuth).toBeTruthy();
})

it('logged user should be correct', () => {
    const newState = updateState(setLoggedUser({name: 'some'}))
    expect(newState.loggedUser).toBeDefined()
})