import  React, {useState, useEffect} from 'react';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import Header from '../../components/Header/employee';
import IFood from '../../assets/IFoodLogo.svg';
import api from '../../services/api';

const RegisterProduct: React.FC = () => {
    const [ titulo, setTitulo ] = useState('');
    const [ descricao, setDescricao ] = useState('');
    const [ valor , setValor ] = useState('');
    const history = useHistory();
    const isLogged = localStorage.getItem('EstaLogadoC');

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
        setTimeout(function(){ history.push('/e/homepage'); }, 3000);
    }
    
    
    
    async function handleRegister(e: { preventDefault: () => void; }): Promise<void>{
        e.preventDefault();
        

        const data ={
            titulo,
            descricao,
            valor,
        }

        try{
            const response =  await api.post('produto', data);
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
                        <h1>Cadastrar Produto</h1>
                        <p>Complete os campos com as informações do item <br/>
                        a ser adicionado ao cardápio.
                        </p>
                    </div>
                
                    <div className={styles.rightSideRegisterProduct}>
                        <form onSubmit={handleRegister}>
                            <input
                            type="text" 
                            placeholder="Nome"
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)}
                            />
                            
                            <textarea  
                            placeholder="Descrição do produto"
                            value={descricao}
                             onChange={e => setDescricao(e.target.value)} 
                            />

                            <div className={styles.valueTextoDiv}>
                                
                                <input 
                                className={styles.value} 
                                type="text" 
                                placeholder="Valor Unitário"
                                value={valor}
                                onChange={e => setValor(e.target.value)}
                                /> 
                            </div>
                        
                        <div className={styles.finishButtonDiv}>
                                <button>Finalizar Cadastro</button>
                        </div>
                        </form>
                    </div>    
                </div>
            </section>

        </>
    );
}

export default RegisterProduct;