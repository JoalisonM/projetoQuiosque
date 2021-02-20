import React from 'react';

import { Link } from 'react-router-dom';
import { FaUserPlus , FaUserAlt  } from 'react-icons/fa';

import IFood from '../../assets/IFoodLogo.svg';

const EmployeeLogin: React.FC = () => {
    return(
        <>
                <div className="content">
            
            <div className="container">
            
                <div className="image">
                    <img src={IFood} alt="Logo IFood"/>
                </div>

                <form >
                    <h1>Login do Funcionário</h1>
                    <input 
                    type="text" 
                    placeholder="CPF (Somente números)"
                    />

                    <input 
                    type="password" 
                    placeholder="Senha"
                    />

                    <button className="ButtonLogin">Login</button>
                    <div className="actions">
                        <Link to={'/'}><FaUserAlt size={18} color={"#FF0000"}/><p>Sou um Cliente</p></Link>
                        <Link to={'/register'}><FaUserPlus size={18} color={"#F00000"}/><p>Não possuo Login</p></Link>
                    </div>
                </form>
                
            </div>
        </div>
            
        </>
    );
}


export default EmployeeLogin;