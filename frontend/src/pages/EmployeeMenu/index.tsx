import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header/employee';
import styles from './styles.module.css';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
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
const EmployeeMenu: React.FC =  () => {

    const[products, setProducts] = useState<Product[]>([]);
    const[totalPages, setTotalPages] = useState(0);
    const[limit, setLimit] = useState(9);
    const[pages, setPages] = useState([]);

    const idFunc = localStorage.getItem("IdFuncionario");
    const isLogged = localStorage.getItem('EstaLogadoF');

    const history = useHistory();
    
    useEffect(() => {
        if(isLogged != 'true'){
            swal({
                text: "Você não tem permissão para acessar essa página",
                icon: "error",
                
            });

            history.push('/e/login');
        }
    },  []);
    
    const Produts = useEffect(() => {
        api.get('/produto').then(response => {
        setProducts(response.data.rows);
        })}, 
        [idFunc]);
    
    
    async function handleDeleteProducts(id){
        try{
            const response = await api.delete(`produto/${id}`, {
                headers: {
                    Authorization: idFunc,
                }
            });

            setProducts(products.filter(product => product.id !== id));
            toast.success(`${response.data.sucess}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
        catch(err){
            alert('Erro ao deletar produto, tente novamente');

        }
        
    }

    
    async function HandleEdit(id){
        const response = await api.get(`produto/${id}`);
        localStorage.setItem('IdProduto', id);
        localStorage.setItem('TituloProduto', response.data[0].titulo);
        localStorage.setItem('DescricaoProduto', response.data[0].descricao);
        localStorage.setItem('ValorProduto', response.data[0].valor);
        localStorage.setItem('DisponibilidadeProduto', response.data[0].disponibilidade);
        
        
        history.push('edit/product');
    }
    
    var menu;
    if(products){
        menu = 
        <div className={styles.menuGrid}>   
            {products.map(product => (
                    
            <div key={product.id}className={styles.product}>
                <div className={styles.top}>
                    <h2>{product.titulo}</h2>
                    <div>
                        <button><FiEdit size={19} onClick={() => HandleEdit(product.id)}/></button>
                    
                        <button><FiTrash2 size={19} onClick={() => handleDeleteProducts(product.id)}/></button>
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
                    
                        
                            {product.disponibilidade == 'Tem' && 
                            <p className={`${styles.disponibility} ${styles.have}`} >
                                {product.disponibilidade} 
                            
                            </p>
                            }

                            {product.disponibilidade == 'Não tem' &&
                                <p className={`${styles.disponibility} ${styles.dHave}`} >
                                {product.disponibilidade} 
                            
                            </p>
                            }

                        
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
                    <Link to={'/'}>Homepage</Link>
                    <p>	&gt;</p>
                    <Link to={'/'}>Cardápio</Link>
                </div>
            
                <h1>Produtos cadastrados no sistema</h1>
            </section>
            
            
                {menu}        
           

        </div>
        <Footer/>
        </>
    );
}

export default EmployeeMenu;