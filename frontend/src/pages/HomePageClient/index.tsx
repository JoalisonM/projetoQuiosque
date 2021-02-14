import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FiShoppingBag } from 'react-icons/fi';
import React from 'react';
import IFoodLogoBW from '../../assets/IFoodLogo_B&W.png';
import Savory from  '../../assets/Savory.png';
import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';         
const HomePageClient: React.FC = () => {
    return(
        <>
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
                            <li><Link to={'/'}><FontAwesomeIcon icon={faUserCircle} size={"lg"}/><p>Pedro Gustavo</p></Link></li>
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

            <section className="carousel-section">
                <Carousel/>
            </section>
            <section className="savory-section">
                <div className="savory-content">
                    <h1>O que nós servimos?</h1>
                    <p>Nós, que fazemos parte da  equipe do IFood, temos um rígido protocolo de alimentação
                       a ser seguido.
                       Todos os produtos servidos são feitos na nossa própria cozinha, salgados, pães, sanduíches,
                       PF's.. tudo!
                       <p>Além disso, nossos alimentos são totalmente saudavéis, não servimos fritura, nem qualquer 
                       produto que prejudique sua saúde.</p>
                    </p>
                    <div className="button-menu">
                        <p>Para saber mais:</p>
                        <div className="button">
                            <Link to={'/'}>Veja nosso cardápio</Link>
                        </div>
                    </div>
                </div>
                <img src={Savory} alt="Salgados"/>
            </section>
            <footer>
                <div className="main-footer">
                    <div className="info">
                        <h2>Volte sempre</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/>
                        Facere perferendis laudantium veniam iure, aperiam cumque saepe ipsum <br/>
                        necessitatibus debitis deleniti fugit nemo sint eveniet quasi eligendi <br/>
                        corporis! Necessitatibus, maxime quo!
                        </p>
                    </div>
                    <div className="links">
                        <h2>Links Utéis</h2>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        <a href="#">Link 4</a>
                        <a href="#">Link 5</a>
                    </div>    
                </div> 
                <div className="sub-footer">
                    <p>©Todos os direitos reservados(sqn)</p>
                </div>
            </footer>
        </> 
    );
}

export default HomePageClient;