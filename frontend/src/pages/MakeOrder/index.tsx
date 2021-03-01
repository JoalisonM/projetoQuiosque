import React, {useEffect} from 'react';
import swal from 'sweetalert';
import Footer from '../../components/Footer';
import Header from '../../components/Header/client';
import styles from './styles.module.css';
import { Link, useHistory } from'react-router-dom';
const MakeOrder: React.FC = () => {

    const history = useHistory();
    const isLogged = localStorage.getItem('EstaLogadoC');

    useEffect(() => {
        if(isLogged != 'true'){
            swal({
                text: "Você não tem permissão para acessar essa página",
                icon: "error",
                
            });

            history.push('/login');
        }
    },  []);
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