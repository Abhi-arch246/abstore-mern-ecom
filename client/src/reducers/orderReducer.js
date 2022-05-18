export const placeOrderReducer = (state = {}, action) => {

    switch (action.type) {
        case 'PLACE_ORDER_REQUEST': return {
            ...state,
            loading: true
        }

        case 'PLACE_ORDER_SUCESS': return {
            ...state,
            loading: false,
            success: true
        }

        case 'PLACE_ORDER_ERROR': return {
            ...state,
            loading: false,
            error: true
        }

        default: return state
    }
}

export const getOrdersByUserIdReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_ORDERSBYUSERID_REQUEST': return {
            ...state,
            loading: true
        }

        case 'GET_ORDERSBYUSERID_SUCCESS': return {
            ...state,
            loading: false,
            order: action.payload
        }

        case 'GET_ORDERSBYUSERID_ERROR': return {
            ...state,
            loading: false,
            error: true
        }

        default: return { state }
    }
}