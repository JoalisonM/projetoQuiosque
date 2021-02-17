import React from 'react';
import Savory from  '../../assets/Savory.png';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './styles.css';
//import '@fortawesome/fontawesome-free/css/all.min.css';         
const HomePageClient: React.FC = () => {
    return(
        <>
            <Header/>
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
           <Footer/>
        </> 
    );
}

export default HomePageClient;