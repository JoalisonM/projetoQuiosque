import React from 'react';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { IoLogOut } from 'react-icons/io5';
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
                            <li className="options employee">
                                <Link to={'/'}>Cardápio</Link>
                            </li>
                            <li className="options employee">
                                <Link to={'/'}>Gerenciar Pedidos</Link>
                            </li>
                            <li className="options employee">
                                <Link to={'/'}>Cadastrar um Funcionário</Link>
                            </li>
                            <li className="options employee">
                                <Link to={'/'}>Cadastrar um produto</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="logoff-button-div">
                        <div className="logoff-button">
                            <Link to={'/'}><IoLogOut size={30} color={"#FFF"}/> Fazer Logout</Link>
                        </div>
                    </div>
                </header>
            </section>
        );
    }
}