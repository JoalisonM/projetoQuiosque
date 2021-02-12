import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FiShoppingBag } from 'react-icons/fi';
import React from 'react';
import IFoodLogo from '../../assets/IFoodLogo.png';
import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import './styles.css';
const HomePageClient: React.FC = () => {
    return(
        <>
            <section className="menu-section">
                <div className="left-side">
                    <Link to=   {'/'}><FontAwesomeIcon icon={faUserCircle} size="2x"/><p>Pedro Gustavo</p></Link>
                </div>
                <div className="right-side">
                    <ul className="options">
                        <li className="options-menu"><Link to={'/'}>Pagina Inicial</Link></li>
                        <li className="options-menu"><Link to={'/'}>Sobre o sistema</Link></li>
                        <li className="options-menu"><Link to={'/'}>Fazer um pedido</Link></li>
                    </ul>
                </div>
            </section>
            <section className="sub-header">
                <img src={IFoodLogo} alt="Ifood"/>
                <div className="bag-div">
                    <h1>Bem vindo, Pedro</h1>
                    <div className="bag">
                        <Link  to={'/'} className="button"href="#"><FiShoppingBag size={30}/><p>Ir para a sacola</p></Link>
                    </div>
                </div>
            </section>
            <Carousel/>
            <div className="img-menu"></div>
            <footer>

            </footer>


 
        </>
    );
}

export default HomePageClient;