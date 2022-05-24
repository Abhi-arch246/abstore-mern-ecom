import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge'
import Filter from '../components/Filter';
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
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg"
                            alt="First slide" height="300px"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg"
                            alt="Third slide" height="300px"
                        />
                    </Carousel.Item>
                </Carousel>

                <h2 className='my-5'><Badge bg="secondary">Today's Top Deals</Badge></h2>
                <Filter />
                {
                    loading ?
                        (
                            <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" />

                        ) : error ? (
                            <h2>Something went wrong</h2>
                        ) : (

                            products.map(product => {
                                return <Product key={product._id} product={product} />
                            })



                        )

                }

            </div>

        </div>
    )
}

export default HomePage