import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import Footer from '../../components/Footer';
import Header from '../../components/Header/employee';
import styles from './styles.module.css';
import api from '../../services/api';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

interface Cliente{
    id: string;

    cpf: string;

    nome: String;

    message:string;
}

interface Funcionario{
    id: string;

    cpf: string;

    nome: String;

}

const UserList: React.FC = () => {
    const [ clients, setClients ] = useState<Cliente[]>([]);
    const [ employees, setEmployees ] = useState<Funcionario[]>([]);
    const [ errorClient, setErrorClient ] = useState('');
    const [ errorEmployee, setErrorEmployee ] = useState('');
    const isLogged = localStorage.getItem('EstaLogadoF');
    const idFunc = localStorage.getItem('IdFuncionario');
    const history = useHistory();


    useEffect(() => {
        if(isLogged != 'true'){
            swal({
                text: "Você não tem permissão para acessar essa página",
                icon: "error",
                
            });

            history.push('/e/login');
        }
    },  [employees]);

    
    useEffect(() => {
        api.get('/cliente').then(response =>{
        
        if((Object.keys(response.data).length) == 1){
            setErrorClient(response.data.mensagem);
        }else{
            setClients(response.data.rows);
        }
        
    })
    }, [clients]);


    useEffect(() => {
        api.get('/funcionario').then(response =>{
        if((Object.keys(response.data).length) == 1){
            setErrorEmployee(response.data.mensagem);
        }else{
            setEmployees(response.data.rows);
        }
        })
        }, []);


        async function handleDeleteEmployee(id){
            try{
                const response = await api.delete(`funcionario/${id}`);
    
                setEmployees(employees.filter(employee => employee.id !== id));
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
                alert('Erro ao deletar funcionário, tente novamente');
    
            }
            
        }

        async function handleDeleteClient(id){
            try{
                const response = await api.delete(`cliente/${id}`);
    
                setClients(clients.filter(client => client.id !== id));
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
                alert('Erro ao deletar funcionário, tente novamente');
    
            }
            
        }

    return(
        <>
        <Header/>
        <div className={styles.container}>
            <h1>Listagem de usuários do sistema</h1>

            <section className={styles.listsSection}>
                <div className={styles.left}>
                    <h2>Lista de Clientes</h2>
                    {clients.length == 0 &&
                            <div className={styles.error}>    
                                <p>{errorClient}</p>
                            </div>
                        }

                        {clients.length == 1 &&
                            <div className={` ${styles.list}  ${styles.oneClient}` }>
                            {clients.map( client => (
                                
                                    <div className={styles.unique}>
                                        <div>
                                            <h3>{client.nome}</h3>
                                            <button><FiTrash2 size={18} onClick={() => handleDeleteClient(client.id)}/></button>
                                        </div>
                                        <p>CPF: {client.cpf}</p>
                                    </div>
                                
                            ))}
                            </div>
                        
                        }


                    {clients.length > 1 &&
                        
                        <div className={`${styles.list} ${styles.client}`}>
                        {clients.map( client => (
                                <div className={styles.userInfo}>
                                    <div>
                                        <h3>{client.nome}</h3>
                                        {client.id != idFunc && 
                                            <button><FiTrash2 size={18} onClick={() => handleDeleteClient(client.id)}/></button>
                                        }
                                    </div>
                                    <p>CPF: {client.cpf}</p>

                                </div>
                            
                        ))}
                        </div>
                    
                    
                    }
                    
                        
                        
                    
                </div>
                
        
                <div className={styles.right}>
                    <h2>Lista de Funcionários</h2>
                    {employees.length == 0 &&
                            <div className={styles.error}>    
                                <p>{errorEmployee}</p>
                            </div>
                        }

                        {employees.length == 1 &&
                            <div className={`${styles.list} ${styles.one}` }>
                            {employees.map( employee => (
                                
                                    <div className={styles.unique}>
                                        <div>
                                            <h3>{employee.nome}</h3>
                                        </div>
                                        <p>CPF: {employee.cpf}</p>
                                        <p>Você</p>
                                    </div>
                                
                            ))}
                            </div>
                        
                        }


                    {employees.length > 1 &&
                        
                        <div className={styles.list}>
                        {employees.map( employee => (
                                <div className={styles.userInfo}>
                                    <div>
                                        <h3>{employee.nome}</h3>
                                        {employee.id != idFunc && 
                                            <button><FiTrash2 size={18} onClick={() => handleDeleteEmployee(employee.id)}/></button>
                                        }
                                    </div>
                                    <p>CPF: {employee.cpf}</p>
                                    {employee.id == idFunc &&
                                    <p>Você</p>
                                    }
                                </div>
                            
                        ))}
                        </div>
                    
                    
                    }
                </div>

            </section>
        </div>
        <Footer/>
        </>
    );
}

export default UserList;