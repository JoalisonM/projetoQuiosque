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

interface ItemPedido {
    id: string;

    id_cliente: string;

    id_produto: string;

    qtd: number;

    total: number;
}

interface Product{
    id: string;

    titulo: string;

    descricao: string;

    valor: number;

    disponibilidade: string;
}

const BagClient: React.FC =  () => {
    const[item, setItens] = useState<ItemPedido[]>([]);
    const[products, setProducts] = useState<Product[]>([]);

    const history = useHistory();

    var pedido;
    if(products) {
        pedido =
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.grid}>
                    <div className={styles.gridItens}>
                        <div className={styles.title}>Lanche</div>
                        <div className={styles.title}>Quantidade</div>
                        <div className={styles.title}>Preço</div>
                        <div className={styles.title}>Total</div>
                    </div>
                    <div className={styles.pedido}>
                        <div className={styles.product}>
                            <div className={styles.top}>
                                Cuscuz com charque
                            </div>
                        </div>
                        <div className={styles.quantidade}>
                            <button><FaMinus size={15}/></button>
                            <div className={styles.qtd}>1</div>
                            <button><FaPlus size={15}/></button>
                        </div>
                        <div className={styles.valor}>
                            R$ 8,00
                        </div>
                        <div className={styles.totalDados}>
                            R$ 110,00
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.area}>
                    <div className={styles.resumo}> Resumo do Pedido </div>
                    <div className={styles.finalpedido}>
                        <div className={styles.total}> Subtotal: </div>
                        <div className={styles.total}> R$ 11,00 </div>
                    </div>
                    <button> Finalizar pedido </button>
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
            <p>Não há produtos cadastrados no sistema!</p>

        </div>
    }
    return (
        <>
        <Header/>
        <div className={styles.allContainer}>
            <section className={styles.topSection}>
                <div>
                    <p className={styles.start}> Você está em: </p>
                    <Link to={'/'}>Minha Sacola</Link>
                </div>
            
                <h1>Minha Saloca</h1>
            </section>

            {pedido}

        </div>

        <Footer/>
        </>
    );
}

export default BagClient;