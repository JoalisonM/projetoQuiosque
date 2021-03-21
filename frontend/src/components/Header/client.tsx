import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FiShoppingBag } from 'react-icons/fi';
import { GoChevronDown } from 'react-icons/go';
import IFoodLogoBW from '../../assets/IFoodLogo_B&W.png';
import { Link, useHistory } from 'react-router-dom';

import   api   from '../../services/api'; 
import  styles from './styles.module.css';

const Header: React.FC =  () => {
    const clientId = localStorage.getItem('IdCliente');
    const clientName = localStorage.getItem('NomeCliente');
    const history = useHistory();

    async function handleCreateRequest(){
        console.log("entrou");
        const response = await api.post('/pedido', {id_cliente: clientId});
        localStorage.setItem('IdPedido', response.data.id_pedido);
    }

    function handleLogout (){
        
        localStorage.clear();

        history.push('/');
    }


        return(
            <section className={styles.headers}>
                
                <header className={styles.header1}>
                    <div className={styles.leftSide}>
                        <ul>
                            <li><Link to={'/'}>Fale Conosco</Link></li>
                            <li><Link to={'/'}>Trabalhe Conosco</Link></li>
                        </ul>
                    </div>
                    <div className={styles.rightSide}>
                        <ul>


                            <li className={styles.hasSubMenu}>
                                <Link  className={styles.user }to={'/'}>
                                    <FontAwesomeIcon className={styles.userIcon} icon={faUserCircle} size={"lg"}/>
                                    <p className={styles.userName}>{clientName}</p>
                                    <GoChevronDown size={12} className={styles.chevronDown}/>
                                </Link>

                                
                                <ul className={styles.subMenu}>
                                    <li>
                                        <Link to={'/edit'}>Minhas Configurações</Link>
                                    </li>

                                    <li>
                                        <button  onClick={handleLogout} className={styles.logoutButton}>Fazer Logout</button>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </header>

                <header className={styles.header2}>
                    <div className={styles.logo}>
                        <Link to={'/homepage'}><img src={IFoodLogoBW} alt="IFood"/></Link>
                    </div>

                    <div className={styles.headerMenu}>
                        <ul className={styles.menuOptions}>
                            <li className={styles.options}>
                                <Link to={'/homepage'}>Sobre o IFood</Link>
                            </li>
                            <li className={styles.options}>
                                <Link to={'/morder'} onClick={handleCreateRequest}>Fazer um Pedido</Link>
                            </li>
                            <li className={styles.options}>
                                <Link to={'/myorder'}>Meu pedido</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.bagButtonDiv}>
                        <div className={styles.bagButton}>
                            <Link to={'/bag'}><FiShoppingBag color={"#FFF"} size={25}/>Minha Sacola</Link>
                        </div>
                    </div>
                </header>
            </section>
        );
    
}

export default Header;