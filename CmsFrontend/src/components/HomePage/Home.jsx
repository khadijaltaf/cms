import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import ErrorBoundary from '../../ErrorBoundary.jsx'
import Posts from './Posts.jsx'

const Home = () => {
  return (
    <div>
      <ErrorBoundary>
        <section className="section1">
          <div className="subsec">
            <div>
              <p className="heading">BLOGS</p>
            </div>
            <div>
              <p className="subheading"></p>
            </div>
            <div>
              <Link to='/signup'>
                <button className="butt" >
                  Join for Free
                </button>
              </Link>
            </div>

            <div>
              <p>start reading you blogs from here... </p>
            </div>

          </div>
          <Posts />
        </section>
      </ErrorBoundary>
    </div>
  )
}

export default Home