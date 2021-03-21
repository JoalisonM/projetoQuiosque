import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header/client';
import styles from './styles.module.css';
import { FaHeart } from 'react-icons/fa';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import swal from 'sweetalert';


interface Product{

    id: string;

    titulo: string;

    descricao: string;

    valor: number;

    disponibilidade: string;
}

const MakeOrder: React.FC =  () => {

    const[products, setProducts] = useState<Product[]>([]);
    const[totalPages, setTotalPages] = useState(0);
    const[limit, setLimit] = useState(9);
    const[pages, setPages] = useState([]);

    const idClient = localStorage.getItem("IdCliente");
    const isLogged = localStorage.getItem('EstaLogadoF');
    const RequestId = localStorage.getItem('IdPedido');

    const history = useHistory();
    

    async function handleCreateItemRequest(id: string) {
        try{
            console.log({id, idClient, RequestId});
            const response = await api.post('/ipedido', {
            
                id_produto: id,
                id_cliente: idClient,
                id_pedido: RequestId,
            });

            toast.success(`${response.data.sucess}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

        }catch(err){
            toast.error(`${err.response.data}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const Produts = useEffect(() => {
        api.get('/produto').then(response => {
        setProducts(response.data.rows)
        
        })}, 
        [idClient]);

    var menu;
    if(products){
        menu = 
        <div className={styles.menuGrid}>   
            {products.map(product => (
                    
            <div key={product.id}className={styles.product}>
                <div className={styles.top}>
                    <h2>{product.titulo}</h2>
                    <div>
                        <button onClick={() => handleCreateItemRequest(product.id)}><FaHeart size={25}/></button>
                    </div>
                </div>
                <p className={styles.info}>
                    {product.descricao}
                </p>
                <div className={styles.priceDisponibility}>
                    
                    <p className={styles.price}>
                    {Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(product.valor)}
                        <div></div>
                    </p>
                        
                </div>
            </div>
       ))}
       </div>


    }else{
        menu = 
        <div className={styles.nothing}>
            <div className={styles.emoji}>
                <p>:</p>
                <p>(</p>
            </div>
            <p>Não há produtos cadastrados no sistema!</p>

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
            
                <h1>Nossos Lanches</h1>
            </section>
            
            
                {menu}        
           

        </div>
        <Footer/>
        </>
    );
}

export default MakeOrder;