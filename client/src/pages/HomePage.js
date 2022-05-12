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
                            className="d-block w-100"
                            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg"
                            alt="First slide" height="700"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{
                            backgroundSize: "cover", backgroundRepeat: "no-repeat",
                            backgroundPosition: "50% 50%"
                        }}
                            className="d-block w-100"
                            src="https://motorolanz.vtexassets.com/assets/vtex.file-manager-graphql/images/1a214250-b0d7-42b4-8627-a24ac3168ab6___3eb8f8b0b585cec24f7e89c10f5bd5db.jpg"
                            alt="Second slide" height="700"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg"
                            alt="Third slide" height="700"
                        />
                    </Carousel.Item>
                </Carousel>
                {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="..." alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> */}
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