import React, {useEffect} from 'react';
import swal from 'sweetalert';
import Savory from  '../../assets/Savory.png';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header/client';
import Footer from '../../components/Footer';
import { Link, useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import api from '../../services/api';

const HomePageClient: React.FC = () => {
    
    const history = useHistory();
    const isLogged = localStorage.getItem('EstaLogadoC');
    const RequestId = localStorage.getItem('IdPedido');

    useEffect(() => {
        api.get(`/pedido/i/${RequestId}`).then(response => {
            if((response.data.rows).length == 0){
                api.delete(`/pedido/${RequestId}`);
            }
        })        
    }, []);

    
    return(
        <>
            <Header/>
            <section className={styles.carouselSection}>
                <Carousel/>
            </section>
            <section className={styles.savorySection}>
                <div className={styles.savoryContent}>
                    <h1>O que nós servimos?</h1>
                    <p>Nós, que fazemos parte da  equipe do IFood, temos um rígido protocolo de alimentação
                       a ser seguido.
                       Todos os produtos servidos são feitos na nossa própria cozinha, salgados, pães, sanduíches,
                       PF's.. tudo!
                       <p>Além disso, nossos alimentos são totalmente saudavéis, não servimos fritura, nem qualquer 
                       produto que prejudique sua saúde.</p>
                    </p>
                    <div className={styles.buttonMenu}>
                        <p>Para saber mais:</p>
                        <div className={styles.button}>
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