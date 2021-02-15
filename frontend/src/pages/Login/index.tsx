import React from 'react';
import './styles.css';
import IFood from '../../assets/IFoodLogo.svg';
import { FiStar, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header2 from '../../components/Header2';

const Login: React.FC = () => {
    return(
        <>
                <Header2/>
            <div className="image">
                <img src={IFood} alt="Logo IFood"/>
            </div>

            <form>
                <input type="text" placeholder="CPF"/>
                <input type="password" placeholder="Senha"/>
                <button className="ButtonLogin">Login</button>
                <div className="actions">
                    <Link to={'/'}><FiStar size={18} color={"#FF0000"}/><p>Sou um funcionário</p></Link>
                    <Link to={'/register'}><FiLogIn size={18} color={"#F00000"}/><p>Não possuo Login</p></Link>
                </div>
            </form>
            
        </>
    );
}

export default Login;