import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header/client';
import styles from './styles.module.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import swal from 'sweetalert';

interface ItemOrder {
    id: string;

    titulo_produto: string;

    quantidade: number;

    valor: number;

}

const BagClient: React.FC = () => {
    const [itemOrders, setItemOrders] = useState<ItemOrder[]>([]);
    const [total, setTotal] = useState(0);
    const requestId = localStorage.getItem('IdPedido');
    const history = useHistory();


    async function handleIncreaseAmount(id: string, quantidade: number) {
        api.put(`/ipedido/${id}`, { quantidade: quantidade + 1 });
    }

    async function handleDecreaseAmount(id: string, quantidade: number) {
        api.put(`/ipedido/${id}`, { quantidade: quantidade - 1 });
    }

    const ItemOrders = useEffect(() => {
        api.get(`/pedido/i/${requestId}`).then(response => {
            setItemOrders(response.data.rows);

        });
    }, [itemOrders]);

    useEffect(() => { 
        async  function definirTotal(){
            const response = await api.put(`/pedido/p/${requestId}`)
            setTotal(response.data[0].total);
        }definirTotal();
    }, [itemOrders]);

    var itemPedido;
    if (itemOrders) {
        itemPedido =
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.grid}>
                        <div className={styles.gridItens}>
                            <div className={styles.title}>Lanche</div>
                            <div className={styles.title}>Quantidade</div>
                            <div className={styles.title}>Preço</div>
                            <div className={styles.title}>Total</div>
                        </div>
                        {itemOrders.map(item => (
                            <div className={styles.pedido} key={item.id}>
                                <div className={styles.product}>
                                    <div className={styles.top}>
                                        {item.titulo_produto}
                                    </div>
                                </div>
                                <div className={styles.quantidade}>
                                    <button onClick={() => handleDecreaseAmount(item.id, item.quantidade)}><FaMinus size={15} /></button>
                                    <div className={styles.qtd}>{item.quantidade}</div>
                                    <button onClick={() => handleIncreaseAmount(item.id, item.quantidade)}><FaPlus size={15} /></button>
                                </div>
                                <div className={styles.valor}>
                                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.valor / item.quantidade)}
                                </div>
                                <div className={styles.totalDados}>
                                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.valor)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.area}>
                        <div className={styles.resumo}> Resumo do Pedido </div>
                        <div className={styles.finalpedido}>
                            {itemOrders.map(item => (
                                <div className={styles.total} key={item.id}>
                                    <p>{`(${item.quantidade})  ${item.titulo_produto}`}</p>
                                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.valor)}</p>
                                </div>
                            ))}

                            <div className={styles.total}>
                                <p>Subtotal: </p>
                                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</p>
                            </div>

                        </div>
                        <Link to={'/morder'}><button className={styles.backMenu}>Escolher mais produtos</button></Link>
                        <button> Finalizar pedido </button>
                    </div>
                </div>
            </div>
    }
    else {
        itemPedido =
            <div className={styles.nothing}>
                <div className={styles.emoji}>
                    <p>:</p>
                    <p>(</p>
                </div>
                <p>Não há produtos cadastrados no sistema!</p>

            </div>
    }
    return (
        <>
            <Header />
            <div className={styles.allContainer}>
                <section className={styles.topSection}>
                    <div>
                        <p className={styles.start}> Você está em: </p>
                        <Link to={'/'}>Minha Sacola</Link>
                    </div>

                    <h1>Minha Sacola</h1>
                </section>

                {itemPedido}

            </div>

            <Footer />
        </>
    );
}

export default BagClient;