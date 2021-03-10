import  React, {useState, useEffect} from 'react';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import Header from '../../components/Header/employee';
import IFood from '../../assets/IFoodLogo.svg';
import api from '../../services/api';

const EditProduct: React.FC = () => {
    const [ titulo, setTitulo ] = useState('');
    const [ descricao, setDescricao ] = useState('');
    const [ valor , setValor ] = useState('');
    const [ disponibilidade, setDisponibilidade ] = useState('');
    const history = useHistory();
    const isLogged = localStorage.getItem('EstaLogadoF');
    const IdProduto = localStorage.getItem('IdProduto');
    const TituloProduto = localStorage.getItem('TituloProduto');
    const DescricaoProduto = localStorage.getItem('DescricaoProduto');
    const ValorProduto = localStorage.getItem('ValorProduto');
    const DisponibilidadeProduto = localStorage.getItem('DisponibilidadeProduto');

    
    useEffect(() => {
        setTitulo(TituloProduto);
        setDescricao(DescricaoProduto);
        setValor(ValorProduto);
        setDisponibilidade(DisponibilidadeProduto);
    }, []);



    useEffect(() => {
        if(isLogged != 'true'){
            swal({
                text: "Você não tem permissão para acessar essa página",
                icon: "error",
                
            });

            history.push('/e/login');
        }
    },  []);
    
    function redirect(){
        setTimeout(function(){ history.push('/e/menu'); }, 1000);
    }
    
    function AbortEdit(){
        history.goBack();
    }
    
    async function handleEdit(e: { preventDefault: () => void; }): Promise<void>{
        e.preventDefault();
       

        const data ={
            titulo: titulo.toLocaleLowerCase(),
            descricao: descricao.toLocaleLowerCase(),
            valor,
            disponibilidade: disponibilidade
        }

        try{
            const response =  await api.put(`produto/${IdProduto}`, data);
            toast.success(`${response.data.sucess}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

            redirect();
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
    
    return(
        <>
            <Header/>
            <section className={styles.allSection}>
                <div className={styles.registerProductContainer}>
                    <div className={styles.leftSideRegisterProduct}>
                        <img src={IFood} alt="IFood"/>
                        <h1>Editar Produto</h1>
                        <p>Altere as informações desejadas. Depois é<br/>
                        só clicar em Salvar.
                        </p>
                    </div>
                
                    <div className={styles.rightSideRegisterProduct}>
                        <form onSubmit={handleEdit}>
                            <input
                            type="text" 
                            placeholder="Título"
                            value= {titulo}
                            onChange={e => setTitulo(e.target.value)}
                            />
                            
                            <textarea  
                            placeholder="Descrição do produto"
                            value={descricao}
                             onChange={e => setDescricao(e.target.value)} 
                            />

                            <div className={styles.valueRadioDiv}>
                                
                                <input 
                                className={styles.value} 
                                type="text" 
                                placeholder="Valor Unitário"
                                value={valor}
                                onChange={e => setValor(e.target.value)}
                                /> 
                           
                                <div className={styles.radioOptions}>

                                    <p>Disponibilidade:</p>    
                                    
                                    <div className={styles.disponibilityOptions}>
                                        <div className={styles.disponibilityOption}>
                                            
                                            <input 
                                            id={styles.have} 
                                            type="radio" 
                                            value="Tem" 
                                            name="campo-radio"
                                            onClick={() => setDisponibilidade('Tem')}
                                            />    
                                            
                                            <label id={styles.lHave}htmlFor="have">TEM</label>    
                                        </div>

                                        <div className={styles.disponibilityOption}>
                                            
                                            <input 
                                            id={styles.dnhave}
                                            type="radio" 
                                            value="Não tem" 
                                            name="campo-radio"
                                            onClick={() => setDisponibilidade('Não tem')}
                                            />

                                            <label id={styles.lDnhave} htmlFor="dnhave">NÃO TEM</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        <div className={styles.finishButtonDiv}>
                        

                                <button>Salvar Alterações</button>
                        </div>
                        </form>
                        <div className={styles.finishButtonDiv}>
                            <button id={styles.thiss}onClick={() => AbortEdit()}>Cancelar Alterações</button>
                        </div>
                    </div>    
                </div>
            </section>

        </>
    );
}

export default EditProduct;