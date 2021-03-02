import React, {useState} from 'react';
import styles from './styles.module.css';
import IFood from '../../assets/IFoodLogo.svg';
import { FaUserTie, FaUserPlus } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import api from '../../services/api';


const Login: React.FC = () => {
    localStorage.clear();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handeLogin(e: { preventDefault: () => void; }) {
        e.preventDefault();

        try{
            const response = await api.post('sessions/cliente', {cpf, senha})
            const nome = response.data.nome;
            const primeiroNome = nome.split(' ')[0];
            localStorage.setItem('IdCliente', response.data.id);
            localStorage.setItem('NomeCliente', primeiroNome.toLowerCase());
            localStorage.setItem('EstaLogadoC', 'true');

            history.push('/homepage');
        }catch (err){

            toast.error( `${err.response.data}` , {
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
        <div className={styles.content}>
            
            <div className={styles.container}>
            
                <div className={styles.image}>
                    <img src={IFood} alt="Logo IFood"/>
                </div>

                <form onSubmit={handeLogin}>
                    <h1>Faça seu login e aproveite nossos serviços</h1>
                    <input 
                    type="text" 
                    placeholder="CPF (Somente números)"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}/>

                    <input 
                    type="password" 
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}/>

                    <button className={styles.buttonLogin}>Login</button>
                    <div className={styles.actions}>
                        <Link to={'/e/login'}><FaUserTie size={18} color={"#FF0000"}/><p>Sou um funcionário</p></Link>
                        <Link to={'/register'}><FaUserPlus size={18} color={"#F00000"}/><p>Não possuo Login</p></Link>
                    </div>
                </form>
                
            </div>
        </div>
    );  
}



export default Login;