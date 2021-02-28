import React, { useState } from 'react';

import Header from '../../components/Header/employee';
import Footer from  '../../components/Footer';

import IFoodLogo from '../../assets/IFoodLogo.svg';

import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import api from '../../services/api';

const RegisterEmployee: React.FC = () => {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    function redirect (){
        setTimeout(() => { history.push('/e/homepage')})
    }

    async function handleERegister(e:{ preventDefault: () => void; }): Promise<void> {
        e.preventDefault();

        const data = {
            nome,
            cpf,
            senha,
        }

        try{
            const response = await api.post('funcionario', data);
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
        <div className={styles.container}>
            <section className={styles.leftSide}>
                <form onSubmit={handleERegister}>  
                    <h1>Dados:</h1>
                    <input 
                    type="text" 
                    placeholder="Nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    />
                    <input 
                    type="text" 
                    placeholder="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    />
                    <input 
                    type="password" 
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    />

                    <button>Concluir cadastro</button>
                </form>
            </section>
            <section className={styles.rightSide}>
                <img src={IFoodLogo} alt="IFood"/>
                <p>Preencha os dados corretamente para a conclusão do cadastro</p>
            </section>
        </div>
        <Footer/>
        </>
    );
}


export default RegisterEmployee;