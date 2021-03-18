import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
export default class Footer extends React.Component{
    render(){
        return(
            <footer>
            <div className={styles.mainFooter}>
                <div className={styles.info}>
                    <h2>Volte sempre</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/>
                    Facere perferendis laudantium veniam iure, aperiam cumque saepe ipsum <br/>
                    necessitatibus debitis deleniti fugit nemo sint eveniet quasi eligendi <br/>
                    corporis! Necessitatibus, maxime quo!
                    </p>
                </div>
                   <div className={styles.links}>
                    <h2>Links Utéis</h2>
                    <Link to={'/'}>Link 1</Link>
                    <Link to={'/'}>Link 2</Link>
                </div>    
            </div> 
            <div className={styles.subFooter}>
                <p>©Todos os direitos reservados(sqn)</p>
            </div>
        </footer>
        );
    }
}