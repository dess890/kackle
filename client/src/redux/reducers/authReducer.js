const defaultState = {
    local: {
        id: "",
        username: "",
    },
    twitterAuth: {
        id: "",
        auth: "",
        key3: "",
        key4: "",
    },
    facebookAuth: {
        id: "",
        auth: "",
        key3: "",
        key4: "",
    }
}

const AUTH_SET_LOCAL = "AUTH_SET_LOCAL"
const AUTH_SET_TWITTER = "AUTH_SET_TWITTER"
const AUTH_SET_FACEBOOK = "AUTH_SET_FACEBOOK"
const AUTH_SET_ALL = "AUTH_SET_ALL"

export function setLocalAuth(userObject) {
    return {
        type: AUTH_SET_LOCAL,
        id: userObject.id,
        username: userObject.username
    }
}

export function setTwitterAuth(userObject) {
    return {
        type: AUTH_SET_TWITTER,
        id: userObject.twitterId,
        auth: userObject.twitterAuth,
        key3: userObject.key3,
        key4: userObject.key4
    }
}
export function setFacebookAuth(userObject) {
    return {
        type: AUTH_SET_FACEBOOK,
        id: userObject.facebookId,
        auth: userObject.facebookAuth,
        key3: userObject.key3,
        key4: userObject.key4
    }
}
export function setAuthAll(userObject) {
    return {
        type: AUTH_SET_ALL,
        localId: userObject.id,
        localUsername: userObject.username,
        facebookId: userObject.facebookId,
        facebookAuth: userObject.facebookAuth,
        facebookKey3: userObject.facebookKey3,
        facebookKey4: userObject.facebookKey4,
        twitterId: userObject.twitterId,
        twitterAuth: userObject.twitterAuth,
        twitterKey3: userObject.twitterKey3,
        twitterKey4: userObject.twitterKey4
    }
}

export default function authReducer(state = defaultState, action) {
    switch (action.type) {
        case AUTH_SET_FACEBOOK:
            return {
                ...state,
                facebookAuth: {
                    id: action.id,
                    auth: action.auth,
                    key3: action.key3,
                    key4: action.key4
                }
            }
        case AUTH_SET_TWITTER:
            return {
                ...state,
                twitterAuth: {
                    id: action.id,
                    auth: action.auth,
                    key3: action.key3,
                    key4: action.key4
                }
            }
        case AUTH_SET_LOCAL:
            return {
                ...state,
                local: {
                    id: action.id,
                    username: action.username
                }
            }
        case AUTH_SET_ALL:
            return {
                ...state,
                local: {
                    id: action.localId,
                    username: action.localUsername
                },
                facebookAuth: {
                    id: action.facebookId,
                    auth: action.facebookAuth,
                    key3: action.facebookKey3,
                    key4: action.facebookKey4
                },
                twitterAuth: {
                    id: action.twitterId,
                    auth: action.twitterAuth,
                    key3: action.twitterKey3,
                    key4: action.twitterKey4
                }
            }
        default:
            return state
    }
}