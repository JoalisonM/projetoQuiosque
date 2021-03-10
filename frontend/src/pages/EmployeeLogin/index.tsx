import React, {useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import IFood from '../../assets/IFoodLogo.svg';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';

import styles from './styles.module.css';
const EmployeeLogin: React.FC = () => {

    localStorage.clear();
    
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handeELogin(e: { preventDefault: () => void; }) {
        e.preventDefault();

        try{
            const response = await api.post('sessions/funcionario', {cpf, senha})
            
            const nome = response.data.nome;
            const primeiroNome = nome.split(' ')[0];

            localStorage.setItem('IdFuncionario', response.data.id);
            localStorage.setItem('NomeFuncionario', primeiroNome.toLowerCase());
            localStorage.setItem('EstaLogadoF', 'true');

            history.push('/e/homepage');
        }catch (err){

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
            <div className={styles.content}>
            
            <div className={styles.container}>
            
                <div className={styles.image}>
                    <img src={IFood} alt="Logo IFood"/>
                </div>

                <form onSubmit={handeELogin}>
                    <h1>Login do Funcionário</h1>
                    <input 
                    type="text" 
                    placeholder="CPF (Somente números)"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    />
                    

                    <input 
                    type="password" 
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    />
                    

                    <button className={styles.buttonLogin}>Login</button>
                    <div className={styles.actions}>
                        <Link to={'/login'}><FaUserAlt size={16} color={"#FF0000"}/><p>Sou um Cliente</p></Link>
                    </div>
                </form>
                
            </div>
        </div>
            
        </>
    );
}


export default EmployeeLogin;