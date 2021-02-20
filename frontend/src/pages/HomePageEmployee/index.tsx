import React from 'react';
import Header from '../../components/Header/employee';
import {Link} from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import './styles.css';

const HomePageEmployee: React.FC = () => {
    return(
        <>
            <Header/>
            <h1 className="title">Página do funcionário</h1>
            <section className="orders-section">

                <div className="order-summary">
                    <div className="order-info">
                        <h2 className="order-number">Pedido 01</h2>
                        <p>138.170.704-11</p>
                    </div>
                    <div className="order-status">
                        em andamento
                    </div>
                    <div className="finish-order-button">
                        <Link to={'/'}><FaCheck/></Link>
                    </div>
                </div>

                <div className="order-summary">
                    <div className="order-info">
                        <h2 className="order-number">Pedido 02</h2>
                        <p>138.170.704-11</p>
                    </div>
                    <div className="order-status">
                        em andamento
                    </div>
                    <div className="finish-order-button">
                        <Link to={'/'}><FaCheck/></Link>
                    </div>   
                </div>

                <div className="order-summary">
                    <div className="order-info">
                        <h2 className="order-number">Pedido 03</h2>
                        <p>138.170.704-11</p>
                    </div>
                    <div className="order-status">
                        em andamento
                    </div>
                    <div className="finish-order-button">
                        <Link to={'/'}><FaCheck/></Link>
                    </div>
                </div>

            </section>
        </>
    );
}

export default HomePageEmployee;