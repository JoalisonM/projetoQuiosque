import React from 'react';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FiShoppingBag } from 'react-icons/fi';
import { GoChevronDown } from 'react-icons/go';
import IFoodLogoBW from '../../assets/IFoodLogo_B&W.png';
import { Link, useHistory } from 'react-router-dom';

import  styles from './styles.module.css';

const Header: React.FC =  () => {
    const clientName = localStorage.getItem('NomeCliente');
    const history = useHistory();

    function handleLogout (){
        
        localStorage.clear();

        history.push('/login');
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
                                <Link to={'/'}>Nosso Cardápio</Link>
                            </li>
                            <li className={styles.options}>
                                <Link to={'/'}>Sobre o IFood</Link>
                            </li>
                            <li className={styles.options}>
                                <Link to={'/'}>Meu Pedido</Link>
                            </li>
                            <li className={styles.options}>
                                <Link to={'/morder'}>Fazer um Pedido</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.bagButtonDiv}>
                        <div className={styles.bagButton}>
                            <Link to={'/'}><FiShoppingBag color={"#FFF"} size={25}/>Minha Sacola</Link>
                        </div>
                    </div>
                </header>
            </section>
        );
    
}

export default Header;