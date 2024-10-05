import logo from '../../assets/logo.png'
interface navProps{
    style:string;
    user?:string;
}


function NavBar({ style, user }:navProps){
    return(
        <header className={style}>
            <div className="lateral">
                <ul>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                </ul>
            </div>
            <div className="superior">
                <ul>
                    <li><img src={logo} alt="LOGO"/></li>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                </ul>
            </div>    
        </header>
    );
}

export default NavBar;