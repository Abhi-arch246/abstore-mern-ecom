import axios from 'axios'
export const getAllProducts = () => (dispatch) => {

    dispatch({ type: "GET_PRODUCTS_REQUEST" })

    axios.get("/api/products/getallproducts")
        .then(res => {
            dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: "GET_PRODUCTS_ERROR", paylod: err })
        })
}

export const getProductById = (id) => (dispatch) => {

    dispatch({ type: "GET_PRODUCTBYID_REQUEST" })

    axios.post("/api/products/getallproductbyid", { id })
        .then(res => {
            dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data })
        })
        .catch(err => {
            dispatch({ type: "GET_PRODUCTBYID_ERROR", paylod: err })
        })
}