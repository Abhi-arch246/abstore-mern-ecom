import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import { getAllProducts } from '../actions/productAction'
function HomePage() {
    const getAllProductsState = useSelector(state => state.getAllProductsReducer)
    const { loading, products, error } = getAllProductsState
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div>
            <div className="row justify-content-center">
                {
                    loading ?
                        (
                            <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" />

                        ) : error ? (
                            <img src="https://st4.depositphotos.com/2648191/37924/v/600/depositphotos_379249420-stock-illustration-error-page-page-found-something.jpg" alt="" />
                        ) : (

                            products.map(product => {
                                return <Product key={product._id} product={product} />
                            })
                        )
                    /* products.length ?
                        (
                            products.map(product => {
                                return <Product key={product._id} product={product} />
                            })
                ) : (
                <>
                    <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" />
                </>
                ) */
                }
            </div>
        </div>
    )
}

export default HomePage