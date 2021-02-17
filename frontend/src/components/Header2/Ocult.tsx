import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Header2 extends React.Component{
    render(){
        return(
            <ul className="menu">
                    <li className="options-menu"><Link to={'/'}>Pagina Inicial</Link></li>
                    <li className="options-menu ocult"><Link to={'/'}>Cadastre-se</Link></li>
                    <li className="options-menu"><Link to={'/'}>Fazer Login</Link></li>
                    <li className="options-menu"><Link to={'/'}>Sobre o sistema</Link></li>
                </ul>
        );
    }
}