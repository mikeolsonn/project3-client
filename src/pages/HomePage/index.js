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
      
        
        
            <button className={styles.Login}>
                <Link to="/login" className={styles.Link}>Login</Link>
            </button>
            <button className={styles.Signup}>
                <Link to="/signup" className={styles.Link}>Get Started</Link>
            </button>
       
        </div>
       </> 
    )};
}

export default HomePage;