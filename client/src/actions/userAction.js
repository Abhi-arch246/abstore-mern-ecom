import axios from 'axios'

export const registerUser = (user) => dispatch => {

    dispatch({ type: 'USER_REGISTER_REQUEST' })

    axios.post('/api/users/register', user)
        .then(res => {
            dispatch({ type: 'USER_REGISTER_SUCCESS' })
            console.log(res);
        })
        .catch(err => {
            dispatch({ type: 'USER_REGISTER_ERROR', payload: err })
            console.log(err);

        })
}

export const loginUser = (user) => dispatch => {

    dispatch({ type: 'USER_LOGIN_REQUEST' })

    axios.post('/api/users/login', user)
        .then(res => {
            dispatch({ type: 'USER_LOGIN_SUCCESS' })

            localStorage.setItem('currentUser', JSON.stringify(res.data))
            window.location.href = '/'

        })
        .catch(err => {
            dispatch({ type: 'USER_LOGIN_ERROR', payload: err })
            console.log(err);

        })
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')

    dispatch({ type: 'USER_LOGOUT' })

    window.location.href = "/login"
}

export const updateUser = (userid, updatedUser) => dispatch => {

    dispatch({ type: 'USER_UPDATE_REQUEST' })

    axios.post('/api/users/update', { userid, updatedUser })
        .then(res => {
            dispatch({ type: 'USER_UPDATE_SUCCESS' })
            console.log(res);
        })
        .catch(err => {
            dispatch({ type: 'USER_UPDATE_ERROR', payload: err })
            console.log(err);

        })
}