import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header/employee';
import styles from './styles.module.css';
import { FaHeart } from 'react-icons/fa';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import swal from 'sweetalert';

const ManageOrder: React.FC =  () => {
    var pedido;
    return (
        <>
        <Header/>
        <div className={styles.allContainer}>
            <section className={styles.topSection}>
                <div>
                    <p className={styles.start}> Você está em: </p>
                    <Link to={'/'}>Gerenciar Pedido</Link>
                </div>
            
                <h1>Realizar seu pedido</h1>
            </section>
        </div>
        <Footer/>
        </>
    );
}

export default ManageOrder;