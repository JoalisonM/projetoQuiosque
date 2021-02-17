import React, {useState} from 'react';
import './styles.css';
import IFood from '../../assets/IFoodLogo.svg';
import { FaUserTie, FaUserPlus } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import Header2 from '../../components/Header2/notOcult';
import api from '../../services/api';

const Login: React.FC = () => {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handeLogin(e: { preventDefault: () => void; }) {
        e.preventDefault();

        try{
            const response = await api.post('sessions/cliente', {cpf, senha})
            
            localStorage.setItem('SenhaCliente', senha);
            localStorage.setItem('NomeCliente', response.data.nome);

            history.push('/homepage');
        }catch (err){

            toast.error("Erro no Login: Dados inválidos. Tente novamente", {
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
         <ToastContainer/>
                <Header2 />
            <div className="image">
                <img src={IFood} alt="Logo IFood"/>
            </div>

            <form onSubmit={handeLogin}>
                <input 
                type="text" 
                placeholder="CPF"
                value={cpf}
                onChange={e => setCpf(e.target.value)}/>

                <input 
                type="password" 
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}/>

                <button className="ButtonLogin">Login</button>
                <div className="actions">
                    <Link to={'/employee/login'}><FaUserTie size={18} color={"#FF0000"}/><p>Sou um funcionário</p></Link>
                    <Link to={'/register'}><FaUserPlus size={18} color={"#F00000"}/><p>Não possuo Login</p></Link>
                </div>
            </form>
            
        </>
    );
}

export default Login;