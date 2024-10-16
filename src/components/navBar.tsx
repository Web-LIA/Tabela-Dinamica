import logo from './../assets/logo.png'
import NavPage from './navPage';
import loginImg from '../assets/login.png' ;
interface navProps{
    style:string;
    user?:string;
}

function NavBar({ style, user }:navProps){
//style , user -> App.tsx
    return(
        <header className={style}>
            <div className="lateral">
                <ul>
                    <NavPage rota="/" pagina="home"/> 
                    <NavPage rota="/tabela" pagina="tabela"/> 
                </ul>
            </div>

            <div className="superior">
                <ul>
                    <li><a href="/"><img src={logo} alt="LOGO" className='logo'/></a></li>
                    <li><img src={user?user:loginImg} alt="LOGIN" className='login'/></li>
                </ul>
            </div>    

        </header>
    );
}

export default NavBar;