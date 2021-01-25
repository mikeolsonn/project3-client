import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BackgroundSlider from 'react-background-slider';
import styles from './Homepage.module.css'




class HomePage extends Component
{
    render() {
    return (
       
    <>
    <div className={styles.Container}>
      <h1 className={styles.Title}>Crossing Guide</h1>
      
        <div className={styles.Links}>
        
            <button>
                <Link to="/login">Login</Link>
            </button>
            <button>
                <Link to="/signup">Get Started</Link>
            </button>
        </div>
        </div>
       </> 
    )};
}

export default HomePage;