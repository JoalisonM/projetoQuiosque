import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header/client';
import styles from './styles.module.css';
const MakeOrder: React.FC = () => {
    return(
        <>
            <Header/>
            <div className={styles.menuTitle}>
                <h1>Escolha seus produtos</h1> 
                <div></div>   
            </div>
            <div className={styles.menuGrid}>
                <div className={styles.product}>A</div>
                <div className={styles.product}>B</div>
                <div className={styles.product}>C</div>
                <div className={styles.product}>D</div>
                <div className={styles.product}>E</div>
                <div className={styles.product}>F</div>
                <div className={styles.product}>G</div>
                <div className={styles.product}>H</div>
                <div className={styles.product}>I</div>
                <div className={styles.product}>J</div>
                <div className={styles.product}>K</div>
                <div className={styles.product}>L</div>
            </div>    
            <Footer/>
        </>
    );
}


export default MakeOrder;