import React from 'react';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FiShoppingBag } from 'react-icons/fi';
import IFoodLogoBW from '../../assets/IFoodLogo_B&W.png';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Header extends React.Component{
    nomeCliente = localStorage.getItem('NomeCliente');

    render(){
        return(
            <section className="headers">
                
                <header className="header-1">
                    <div className="left-side">
                        <ul>
                            <li><Link to={'/'}>Fale Conosco</Link></li>
                            <li><Link to={'/'}>Trabalhe Conosco</Link></li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <ul>
                            <li><Link to={'/'}><FontAwesomeIcon icon={faUserCircle} size={"lg"}/><p>{this.nomeCliente}</p></Link></li>
                        </ul>
                    </div>
                </header>

                <header className="header-2">
                    <div className="logo">
                        <img src={IFoodLogoBW} alt="IFood"/>
                    </div>

                    <div className="header-menu">
                        <ul className="menu-options">
                            <li className="options">
                                <Link to={'/'}>Nosso Cardápio</Link>
                            </li>
                            <li className="options">
                                <Link to={'/'}>Sobre o IFood</Link>
                            </li>
                            <li className="options">
                                <Link to={'/'}>Meu Pedido</Link>
                            </li>
                            <li className="options">
                                <Link to={'/'}>Fazer um Pedido</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="bag-button-div">
                        <div className="bag-button">
                            <Link to={'/'}><FiShoppingBag color={"#FFF"} size={25}/>Minha Sacola</Link>
                        </div>
                    </div>
                </header>
            </section>
        );
    }
}