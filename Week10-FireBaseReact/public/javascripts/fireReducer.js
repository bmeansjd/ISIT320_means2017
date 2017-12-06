const initialState = {
    loggedIn: true,
    signInLabel: 'Sign Out',
    component: 'app',
    configured: false
};

const fireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_COMPONENT':
            return {
                ...state,
                configured: true,
                component: action.component,
                userName: action.userNameconst initialState = {
    loggedIn: true,
    signInLabel: 'Sign Out',
    component: 'app',
    configured: false
};

const fireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_COMPONENT':
            return {
                ...state,
                configured: true,
                component: action.component,
                userName: action.userName
            };
        case 'GET_LOGIN_STATUS':
            return {...state };const initialState = {
    loggedIn: true,
    signInLabel: 'Sign Out',
    component: 'app',
    configured: false
};

const fireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_COMPONENT':
            return {
                ...state,
                configured: true,
                loggedIn: action.loggedIn,
                signInLabel: action.loggedIn ? 'Sign Out' : 'Sign In'
            };
        default:
            return state;
    }
};
                component: action.component,
                userName: action.userName
            };
        case 'GET_LOGIN_STATUS':
            return {...state };
        case 'LOGIN_STATUS':
            return {
                ...state,
                loggedIn: action.loggedIn,
                loggedIn: action.loggedIn,
                signInLabel: action.loggedIn ? 'Sign Out' : 'Sign In'
                loggedIn: action.loggedIn,
                loggedIn: action.loggedIn,
                signInLabel: action.loggedIn ? 'Sign Out' : 'Sign In'
            };
        default:
            return state;
    }
};
                signInLabel: action.loggedIn ? 'Sign Out' : 'Sign In'
            };
        default:
            return state;
                loggedIn: action.loggedIn,
                signInLabel: action.loggedIn ? 'Sign Out' : 'Sign In'
            };
        default:
            return state;
    }
};
    }
};
            };
        default:
            return state;
    }
};
                signInLabel: action.loggedIn ? 'Sign Out' : 'Sign In'
            };
        default:
            return state;
    }
};

export default fireReducer;
        case 'LOGIN_STATUS':
            return {
                ...state,
                loggedIn: action.loggedIn,
                signInLabel: action.loggedIn ? 'Sign Out' : 'Sign In'
            };
        default:
            return state;
    }
};

export default fireReducer;
            };
        case 'GET_LOGIN_STATUS':
            return {...state };
        case 'LOGIN_STATUS':
            return {
                ...state,
                loggedIn: action.loggedIn,
                signInLabel: action.loggedIn ? 'Sign Out' : 'Sign In'
            };
        default:
            return state;
    }
};

export default fireReducer;