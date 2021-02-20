import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header/client';
import './styles.css';
const MakeOrder: React.FC = () => {
    return(
        <>
            <Header/>
            <div className="menu-title">
                <h1>Escolha seus produtos</h1> 
                <div></div>   
            </div>
            <div className="menu-grid">
                <div className="product">A</div>
                <div className="product">B</div>
                <div className="product">C</div>
                <div className="product">D</div>
                <div className="product">E</div>
                <div className="product">F</div>
                <div className="product">G</div>
                <div className="product">H</div>
                <div className="product">I</div>
                <div className="product">J</div>
                <div className="product">K</div>
                <div className="product">L</div>
            </div>    
            <Footer/>
        </>
    );
}


export default MakeOrder;