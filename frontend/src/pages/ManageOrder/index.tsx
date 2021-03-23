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

    titulo_produto: string;

    quantidade: number;
}

interface Order {
    id: string;

    id_cliente: string;

    nome_cliente: string;

    total: number;

    status: string;
}


const ManageOrder: React.FC =  () => {

    const[ orders, setOrders ] = useState<Order[]>([]);
    const[ itemOrders, setItemOrders ] = useState<ItemOrder[]>([]);
    const[ limit, setLimit ] = useState(9);
    const[ pages, setPages ] = useState([]);

    const idFunc = localStorage.getItem("IdFuncionario");

    const history = useHistory();
    
        async function atualizarPedidos(){
           const response =  await api.get('/pedido/progress'); 
            setOrders(response.data);
        }

        atualizarPedidos();
        
        
    async function handleCheckOrder(id){
        
            api.put(`/pedido/st/${id}`, { status: 'Finalizado'});


            toast.success('Pedido Finalizado', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
    }    
    var pedido;

    if(orders) {
        pedido =
        <div className={styles.menuGrid}>

            {orders.map(order => (
            
            <div key={order.id} className={styles.order}>
                <div className={styles.top}>
                    <h2>{order.nome_cliente}</h2>
                    <div>
                        <button onClick={() => handleCheckOrder(order.id)}><FaCheckCircle size={30}/></button>
                    </div>
                </div>
                            
                <div className={styles.value}>
                    <p className={styles.price}>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.total)}
                        <div></div>
                    </p>
                    <p className={styles.status}>{order.status}</p>
                </div>
            </div>
            
            ))}
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