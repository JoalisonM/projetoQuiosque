import React from 'react';
import './styles.css';
import IFood from '../../assets/IFoodLogo.svg';
import { FiStar, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    return(
        <>
                <ul className="menu">
                    <li className="options-menu"><Link to={'/'}>Pagina Inicial</Link></li>
                    <li className="options-menu"><Link to={'/'}>Cadastre-se</Link></li>
                    <li className="options-menu"><Link to={'/'}>Fazer Login</Link></li>
                    <li className="options-menu"><Link to={'/'}>Sobre o sistema</Link></li>
                </ul>


            <div className="image">
                <img src={IFood} alt="Logo IFood"/>
            </div>

            <form>
                <input type="text" placeholder="CPF"/>
                <input type="password" placeholder="Senha"/>
                <button className="ButtonLogin">Login</button>
                <div className="links">
                    <Link to={'/'}><FiStar size={15} color={"#FF0000"}/><p>Sou um funcionário</p></Link>
                    <Link to={'/register'}><FiLogIn size={15} color={"#F00000"}/><p>Não possuo Login</p></Link>
                </div>
            </form>
            
        </>
    );
}

export default Login;