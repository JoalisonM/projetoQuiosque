import React, {useEffect} from 'react';
import swal from 'sweetalert';
import Header from '../../components/Header/employee';
import Footer from '../../components/Footer';
import {Link, useHistory} from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import Warning from '../../assets/aviso.svg';
import styles from './styles.module.css';
const HomePageEmployee: React.FC = () => {
    
    const history = useHistory();
    const isLogged = localStorage.getItem('EstaLogadoF');

    useEffect(() => {
        if(isLogged != 'true'){
            swal({
                text: "Você não tem permissão para acessar essa página",
                icon: "error",
                
            });

            history.push('/e/login');
        }
    },  []);

    return(

        <>

        
            <Header/>
            <img src={Warning} alt="AVISO" className={styles.warning}/>
            <section className={styles.ordersSection}>

                <div className={styles.orderSummary}>
                    <div className={styles.orderInfo}>
                        <h2 className={styles.orderNumber}>Pedido 01</h2>
                        <p>138.170.704-11</p>
                    </div>
                    <div className={styles.orderStatus}>
                        em andamento
                    </div>
                    <div>
                        <Link to={'/'}><FaCheck/></Link>
                    </div>
                </div>
                <div className={styles.orderSummary}>
                    <div className={styles.orderInfo}>
                        <h2 className={styles.orderNumber}>Pedido 02</h2>
                        <p>138.170.704-11</p>
                    </div>
                    <div className={styles.orderStatus}>
                        em andamento
                    </div>
                    <div>
                        <Link to={'/'}><FaCheck/></Link>
                    </div>
                </div>
                <div className={styles.orderSummary}>
                    <div className={styles.orderInfo}>
                        <h2 className={styles.orderNumber}>Pedido 03</h2>
                        <p>138.170.704-11</p>
                    </div>
                    <div className={styles.orderStatus}>
                        em andamento
                    </div>
                    <div>
                        <Link to={'/'}><FaCheck/></Link>
                    </div>
                </div>
                

            </section>

            <Footer/>   
        </>
    );
}

export default HomePageEmployee;