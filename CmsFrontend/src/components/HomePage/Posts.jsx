import React from 'react'
import pic1 from '../../assets/01.jpg'
import p2 from '../../assets/02.avif'
import p3 from '../../assets/03.avif'
import p4 from '../../assets/04.avif'
import p15 from '../../assets/16.avif'
import p5 from '../../assets/05.jpg'
import p6 from '../../assets/08.png'
import p10 from '../../assets/10.jpg'
import p11 from '../../assets/05.jpg'
import p12 from '../../assets/12.jpeg'
import p13 from '../../assets/13.jpg'
import p14 from '../../assets/14.jpg'
import post1 from './post1.jsx'



const Posts = () => {
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={pic1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Nature</h4>
                                <p className="card-text">This blog is about Nature. feel it and enjoy</p>
                                <a href={post1} className="btn btn-primary">Go to Blog</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Playing</h4>
                                <p className="card-text">Live healthy by Playing games</p>
                                <a href="#" className="btn btn-primary">Go to Blog</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Food</h4>
                                <p className="card-text">Eat healthy live healthy</p>
                                <a href="#" className="btn btn-primary">Go to Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={p4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Book Review 1</h4>
                                <p className="card-text">Reviews of Haunting Adeline</p>
                                <a href="#" className="btn btn-primary">Go to Blog</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Book Review 2</h4>
                                <p className="card-text">Reviews on Hunting Adeline</p>
                                <a href="#" className="btn btn-primary">Go to Blog</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Precaution of Life</h4>
                                <p className="card-text">Learn lessons from others</p>
                                <a href="#" className="btn btn-primary">Go to Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />

                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={p10} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p11} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p12} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />

                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={p13} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p14} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p15} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>


                </div>

                <br /><br />

            </div>
        </div>
    )
}

export default Posts