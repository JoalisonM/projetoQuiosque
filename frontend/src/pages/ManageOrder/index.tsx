import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header/employee';
import styles from './styles.module.css';
import { FaCheckCircle } from 'react-icons/fa';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import swal from 'sweetalert';

interface ItemOrder {
    id: string;

    id_cliente: string;

    nome_cliente: string;

    total: number;

    status: string;
}

const ManageOrder: React.FC =  () => {
    const[orders, setOrders] = useState<ItemOrder[]>([]);
    const[totalPages, setTotalPages] = useState(0);
    const[limit, setLimit] = useState(9);
    const[pages, setPages] = useState([]);

    const idFunc = localStorage.getItem("IdFuncionario");

    const history = useHistory();
    
    const Produts = useEffect(() => {
        api.get('/pedidos').then(response => {
        setOrders(response.data.rows)
        setTotalPages(response.headers['x-total-count']);
        
        })}, 
        [idFunc]);

    var pedido;
    if(orders) {
        pedido =
        <div className={styles.menuGrid}>
            <div className={styles.order}>
                <div className={styles.top}>
                    <h2>Joalison Matheus</h2>
                    <div>
                        <button><FaCheckCircle size={30}/></button>
                    </div>
                </div>
                <div className={styles.products}>
                    <p className={styles.ordersClient}>Pastel de flango</p>
                    <p className={styles.qtd}>1</p>
                </div>
                <div className={styles.value}>
                    <p className={styles.price}>
                        R$ 4,00
                        <div></div>
                    </p>
                </div>
            </div>
        </div>
    }
    else {
        pedido = 
        <div className={styles.nothing}>
            <div className={styles.emoji}>
                <p>:</p>
                <p>(</p>
            </div>
            <p>Não há pedidos no momento!</p>

        </div>
    }

    return (
        <>
        <Header/>
        <div className={styles.allContainer}>
            <section className={styles.topSection}>
                <div>
                    <p className={styles.start}> Você está em: </p>
                    <Link to={'/e/manageorder'}>Gerenciar Pedido</Link>
                </div>
            
                <h1>Gerenciar pedidos</h1>
            </section>

            {pedido}

        </div>
        <Footer/>
        </>
    );
}

export default ManageOrder;