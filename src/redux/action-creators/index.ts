import * as AppActionCreators from './app-ac'
import * as AuthActionCreators from './auth-ac'
import * as DialogsActionCreators from './dialogs-ac'
import * as NavbarActionCreators from './navbar-ac'
import * as UsersActionCreators from './users-ac'
import * as ProfileActionCreators from './profile-ac'

export default {
    ...AppActionCreators,
    ...AuthActionCreators,
    ...DialogsActionCreators,
    ...NavbarActionCreators,
    ...UsersActionCreators,
    ...ProfileActionCreators
}
