import React from 'react';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { GoChevronDown } from 'react-icons/go'
import { IoLogOut } from 'react-icons/io5';
import IFoodLogoBW from '../../assets/IFoodLogo_B&W.png';
import { Link, useHistory } from 'react-router-dom';

import styles from './styles.module.css';
import { FiPlus } from 'react-icons/fi';

const Header: React.FC = () => {
    const nomeCliente = localStorage.getItem('NomeFuncionario');
    const history = useHistory();

    function  handleLogout() {
        localStorage.clear();

        history.push('/e/login');
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
                    <div className={styles.center}>
                        <p >Página do funcionário</p>
                    </div>
                    <div className={styles.rightSide}>
                        <ul>
                        <li className={styles.hasSubMenu}>
                                <Link  className={styles.user }to={'/'}>
                                    <FontAwesomeIcon className={styles.userIcon} icon={faUserCircle} size={"lg"}/>
                                    <p className={styles.userName}>{nomeCliente}</p>
                                    <GoChevronDown size={12} className={styles.chevronDown}/>
                                </Link>

                                
                                <ul className={styles.subMenu}>
                                    <li>
                                        <Link to={'/e/edit'}>Minhas Configurações</Link>
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
                        <Link to={'/e/homepage'}><img src={IFoodLogoBW} alt="IFood"/></Link>
                    </div>

                    <div className={styles.headerMenu}>
                        <ul className={styles.menuOptions}>
                            <li className={styles.optionsEmployee}>
                                <Link to={'/e/menu'}>Cardápio</Link>
                            </li>
                            <li className={styles.optionsEmployee}>
                                <Link to={'/e/manageorder'}>Gerenciar Pedidos</Link>
                            </li>
                            <li className={styles.optionsEmployee}>
                                <Link to={'/e/list'}>Gerenciar Usuários</Link>
                            </li>
                            <li className={styles.optionsEmployee}>
                                <Link to={'/e/register'}>Cadastrar um Funcionário</Link>
                            </li>
                            <li className={styles.optionsEmployee}>
                                <Link to={'/product'}>Cadastrar um produto</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.logoffButtonDiv}>
                            <Link  to={'/'} className={styles.requestButton}><FiPlus  size={25} color={"#FFF"}/> Realizar Pedido</Link>
                    </div>
                </header>
            </section>
        );
    
}

export default Header;