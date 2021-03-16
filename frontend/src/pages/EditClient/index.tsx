import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../../components/Header/client';
import styles from './styles.module.css';
import api from '../../services/api';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';


const EditClient: React.FC = () => {
    const idCliente = localStorage.getItem('IdCliente');
    const [ nome, setNome ] = useState('');
    const [ senha, setSenha] = useState('');
    const [ cpf, setCpf] = useState('');
    const isLogged = localStorage.getItem('EstaLogadoC');
    const history = useHistory();
    

    useEffect(() => {
        if(isLogged != 'true'){
            swal({
                text: "Você não tem permissão para acessar essa página",
                icon: "error",
                
            });

            history.push('/login');
        }
    },  []);


    useEffect(() =>{
        api.get(`/cliente/${idCliente}`).then(response => {
            console.log(response);
            setNome(response.data[0].nome);
            setSenha(response.data[0].senha);
            setCpf(response.data[0].cpf);
        })
    }, []);

    function redirect(){
        setTimeout(function(){ history.push('/login'); }, 1000);
    }

    async function handleEdit(e: { preventDefault: () => void; }): Promise<void>{
        e.preventDefault();
       

        const data ={
            nome: nome,
            cpf: cpf,
            senha: senha
        }

        try{
            const response =  await api.put(`cliente/${idCliente}`, data);
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
                <h1>Meus dados</h1>
                
                <section className={styles.dataSection}>
                    <div className={styles.left}>
                        <FaUserCircle size={200} color={'#dadada'}/>
                        <h2>{nome}</h2>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.right}>
                    <form  className={styles.registerForm}>
                            <h2>Dados para o cadastro:</h2>
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
                             id="senha"
                             type="password" placeholder="Senha"
                             value={senha}
                             onChange={ e => setSenha(e.target.value)}
                            />

                            <div className={styles.buttons}>
                                <button onClick={handleEdit}>Concluir cadastro</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );

}

export default EditClient;