import React, { useState } from 'react';
import { FiCornerUpLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import IFoodLogo from '../../assets/IFoodLogo.svg';
import api from '../../services/api';
import styles from './styles.module.css';

const Register: React.FC = () => {
    const [ cpf, setCpf ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ senha , setSenha ] = useState('');
    
    const history = useHistory();
    
    function redirect(){
        setTimeout(function(){ history.push('/login'); }, 3000);
    }
    
    
    
    async function handleRegister(e: { preventDefault: () => void; }): Promise<void>{
        e.preventDefault();
        

        const data ={
            nome,
            cpf,
            senha,
        }

        try{
            const response =  await api.post('cliente', data);
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
                <section className={styles.registerContainer}>
                    <div className={styles.formSide}>
                        <form onSubmit={handleRegister} className={styles.registerForm}>
                            <h1>Dados para o cadastro:</h1>
                            <div className={styles.border}></div>
                            <input
                             type="text"
                             placeholder="Nome" 
                             value={nome}
                             onChange={e => setNome(e.target.value)}
                            />

                            <input
                             type="text" placeholder="CPF"
                             value={cpf}
                             onChange={e => setCpf(e.target.value)}
                            />

                            <input
                             type="password" placeholder="Senha"
                             value={senha}
                             onChange={ e => setSenha(e.target.value)}
                            />

                            <div className={styles.buttons}>
                                <Link to={'/login'}><FiCornerUpLeft size={18} color={"#F00"}/> <p>Já tenho Cadastro</p></Link>
                                <button>Concluir cadastro</button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.infoSide}>
                            <img src={IFoodLogo} alt="IFood"/>
                        <div className={styles.text}>
                            <p>Cadastre-se gratuitamente no sistema e  evite o
                            desconforto de ter que esperar em filas fisicas.
                            Receba a notificaçao no seu aparelho assim que seu pedido
                            estiver pronto.</p>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default Register;