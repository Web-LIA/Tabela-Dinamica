import styles from './themes/navbar.module.scss'
import logo from './../assets/logo.png'
import NavPage from './navPage';
import loginImg from '../assets/login.png' ;
interface navProps{
    user?:string;
}

function NavBar({ user }:navProps){
    return(
        <header className={styles.navBar}>
            <div className={styles.lateral}>
                <ul>
                    <NavPage rota="/" pagina="home"/> 
                    <NavPage rota="/tabela" pagina="tabela"/> 
                </ul>
            </div>

            <div className={styles.superior}>
                <ul>
                    <li><a href="/"><img src={logo} alt="LOGO" className={styles.logo}/></a></li>
                    <li><img src={user?user:loginImg} alt="LOGIN" className={styles.login}/></li>
                </ul>
            </div>    

        </header>
    );
}

export default NavBar;