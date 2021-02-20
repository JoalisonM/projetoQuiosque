import React, { useState } from 'react';
import { FiCornerUpLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import IFoodLogo from '../../assets/IFoodLogo.svg';
import api from '../../services/api';
import './styles.css';

const Register: React.FC = () => {
    const [ cpf, setCpf ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ senha , setSenha ] = useState('');
    function redirect(){
        setTimeout(function(){ history.push('/'); }, 3000);
    }
    const history = useHistory();
    
    
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
            console.log(err.response.data);
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
                <section className="register-container">
                    <div className="form-side">
                        <form onSubmit={handleRegister} className="register-form">
                            <h1>Dados para o cadastro:</h1>
                            <div className="border"></div>
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

                            <div className="buttons">
                                <Link to={'/'}><FiCornerUpLeft size={18} color={"#F00"}/> <p>Já tenho Cadastro</p></Link>
                                <button>Concluir cadastro</button>
                            </div>
                        </form>
                    </div>
                    <div className="info-side">
                            <img src={IFoodLogo} alt="IFood"/>
                        <div className="text">
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