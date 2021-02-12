import React from 'react';
import { FiCornerUpLeft } from 'react-icons/fi';
import IFoodLogo from '../../assets/IFoodLogo.png';
import './styles.css';
const Register: React.FC = () => {
    return(
        <>
                <ul className="menu-fixed">
                    <li className="options-menu"><a href="#">Pagina Inicial</a></li>
                    <li className="options-menu"><a href="#">Cadastre-se</a></li>
                    <li className="options-menu"><a href="#">Fazer Login</a></li>
                    <li className="options-menu"><a href="#">Sobre o sistema</a></li>
                </ul>

                <section className="register-container">
                    <div className="form-side">
                        <form action="submit" className="register-form">
                            <h1>Dados para o cadastro:</h1>
                            <div className="border"></div>
                            <input type="text" placeholder="Nome"/>
                            <input type="text" placeholder="CPF"/>
                            <input type="password" placeholder="Senha"/>
                            <div className="buttons">
                                <a href="#"><FiCornerUpLeft/> <p>Já tenho registro</p></a>
                                <button>Concluir cadastro</button>
                            </div>
                        </form>
                    </div>
                    <div className="info-side">
                            <img src={IFoodLogo} alt="IFood"/>
                        <div className="text">
                            <p>Cadastre-se gratuitamente no sistema e  evite o
                            desconforto de ter que esperar em filas fisicas.
                            Receba a notificaçao no seu aparelho assim que seu pedido
                            estiver pronto.</p>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default Register;