import React from 'react';
import Header2 from '../../components/Header2/Ocult';
import { Link } from 'react-router-dom';
import { FaUserPlus , FaUserAlt  } from 'react-icons/fa';

import IFood from '../../assets/IFoodLogo.svg';

const EmployeeLogin: React.FC = () => {
    return(
        <>
                <Header2/>
            <div className="image">
                <img src={IFood} alt="Logo IFood"/>
            </div>

            <form>
                <h1>Login do Funcionário</h1>
                <input type="text" placeholder="Código Identificador(CI)"/>
                <input type="password" placeholder="Senha"/>
                <button className="ButtonLogin">Login</button>
                <div className="actions">
                    <Link to={'/'}><FaUserAlt size={16} color={"#FF0000"}/><p>Sou um Cliente</p></Link>
                    <Link to={'/register'}><FaUserPlus size={18} color={"#F00000"}/><p>Não possuo Login</p></Link>
                </div>
            </form>
            
        </>
    );
}


export default EmployeeLogin;