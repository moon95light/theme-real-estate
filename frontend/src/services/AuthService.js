import axios from 'axios';
import swal from "sweetalert";
import {
    loginConfirmedAction,
    logout,
} from '../store/actions/AuthActions';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
let errorMessage = "";
export function signUp(name, email, password) {
    //axios call
    const postData = {
        name,
        email,
        password,
        returnSecureToken: true,
    };
    return axios.post('/register', postData,);
}

export function login(email, password) {
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };

    return axios.post('/login', postData,);
}

export function formatError(errorResponse) {
    // console.log(typeof errorResponse);
    if(errorResponse === '12'){
        errorMessage = 'EMAIL_EXISTS';
    }
    if(errorResponse === '11'){
        errorMessage = 'USER_EXISTS';
    }
    switch (errorMessage) {
        case 'USER_EXISTS':
            swal("Oops", "Username is required", "error");
            break;
        case 'EMAIL_EXISTS':
            swal("Oops", "Email already exists", "error");
            // return 'Email already exists';
            break;
        case 'EMAIL_NOT_FOUND':
            //return 'Email not found';
            swal("Oops", "Email not found", "error", { button: "Try Again!", });
            break;
        case 'INVALID_PASSWORD':
            //return 'Invalid Password';
            swal("Oops", "Invalid Password", "error", { button: "Try Again!", });
            break;
        case 'USER_DISABLED':
            return 'User Disabled';

        default:
            return '';
    }
}

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + tokenDetails.expiresIn * 1000,
    );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, history) {
    setTimeout(() => {
        dispatch(logout(history));
    }, timer);
}

export function checkAutoLogin(dispatch, history) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(logout(history));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(logout(history));
        return;
    }
    dispatch(loginConfirmedAction(tokenDetails));

    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, history);
}
