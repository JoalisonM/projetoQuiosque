import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header/client';
import styles from './styles.module.css';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import swal from 'sweetalert';

interface Order {
    id: string;

    id_cliente: string;

    nome_cliente: string;

    total: number;

    status: string;
}

const MyOrder: React.FC =  () => {
    const[orders, setOrders] = useState<Order[]>([]);

    var status;
    if(orders) {
        status =
        <div className={styles.menuGrid}>
            <div className={styles.pedido}>
                <div className={styles.top}>
                    <h2>ID: abc1235adsd</h2>
                </div>
                <p className={styles.info}>
                    Em andamento
                </p>
                <div className={styles.value}>
                    <p className={styles.price}>
                        R$ 100,00
                        <div></div>
                    </p>
                </div>
            </div>
        </div>
    }
    else {
        status = 
        <div className={styles.nothing}>
            <div className={styles.emoji}>
                <p>:</p>
                <p>(</p>
            </div>
            <p>Você não realizou nenhum pedido!</p>

        </div>
    }

    return(
        <>
        <Header/>
        <div className={styles.allContainer}>
            <section className={styles.topSection}>
                <div>
                    <p className={styles.start}> Você está em: </p>
                    <Link to={'/'}>Fazer um pedido</Link>
                </div>
            
                <h1>Meus Pedidos</h1>
            </section>

            {status}    

        </div>
        <Footer/>
        </>
    );
}

export default MyOrder;