import * as AppActionCreators from './app'
import * as AuthActionCreators from './auth'
import * as DialogsActionCreators from './dialogs'
import * as NavbarActionCreators from './navbar'
import * as UsersActionCreators from './users'
import * as ProfileActionCreators from './profile'

export default {
    ...AppActionCreators,
    ...AuthActionCreators,
    ...DialogsActionCreators,
    ...NavbarActionCreators,
    ...UsersActionCreators,
    ...ProfileActionCreators
}
