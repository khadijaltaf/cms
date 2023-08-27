import React from 'react'
import { Link, Outlet } from 'react-router-dom';

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



const Posts = () => {
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="card ">
                            <img src={pic1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Nature</h4>
                                <p className="card-text">This blog is about Nature. feel it and enjoy</p>
                                <Link to='/post1' className="btn btn-primary">Go to Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Playing</h4>
                                <p className="card-text">Live healthy by Playing games</p>
                                <Link to='/post2' className="btn btn-primary">Go to Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Food</h4>
                                <p className="card-text">Eat healthy live healthy</p>
                                <Link to='/post3' className="btn btn-primary">Go to Blog</Link>
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
                                <Link to='/post4' className="btn btn-primary">Go to Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Book Review 2</h4>
                                <p className="card-text">Reviews on Hunting Adeline</p>
                                <Link to='/post5' className="btn btn-primary">Go to Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Precaution of Life</h4>
                                <p className="card-text">Learn lessons from others</p>
                                <Link to='/post6' className="btn btn-primary">Go to Blog</Link>
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
                                <h4 className="card-title">The Card Reader</h4>
                                <p className="card-text">Story of a haunted house Cared reader</p>
                                <Link to='/post1' className="btn btn-primary">Go to Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p11} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Stalking Area</h4>
                                <p className="card-text">Read about Ways to prevent stalking</p>
                                <Link to='/post2' className="btn btn-primary">Go to Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p12} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">The corridor</h4>
                                <p className="card-text">It smells fishy </p>
                                <Link to='/post3' className="btn btn-primary">Go to Blog</Link>                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />

                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={p13} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">The Dark Night</h4>
                                <p className="card-text">Warning: Read on your own risk</p>
                                <Link to='/post4' className="btn btn-primary">Go to Blog</Link>                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p14} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Last Sunset</h4>
                                <p className="card-text"> See if she survive</p>
                                <Link to='/post5' className="btn btn-primary">Go to Blog</Link>                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={p15} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Calligraphy</h4>
                                <p className="card-text">Nice techniques of calligraphy</p>
                                <Link to='/post6' className="btn btn-primary">Go to Blog</Link>                            </div>
                        </div>
                    </div>


                </div>

                <br /><br />

            </div>
        </div>
    )
}

export default Posts