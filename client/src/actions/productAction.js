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

export const filterProducts = (search, sort, category) => dispatch => {
    var filteredproducts;

    dispatch({ type: "GET_PRODUCTS_REQUEST" })

    axios.get("/api/products/getallproducts").then(res => {
        filteredproducts = res.data

        if (search) {
            filteredproducts = res.data.filter(product => { return product.name.toLowerCase().includes(search) })
        }

        if (sort !== 'popular') {
            if (sort == 'htl') {
                filteredproducts = res.data.sort((a, b) => {
                    return -a.price + b.price
                })
            } else {
                filteredproducts = res.data.sort((a, b) => {
                    return a.price - b.price
                })
            }
        }

        if (category !== 'all') {
            filteredproducts = res.data.filter(product => { return product.category.toLowerCase().includes(category) })
        }

        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filteredproducts })

    }).catch(err => {
        dispatch({ type: "GET_PRODUCTS_ERROR" })
    })

}