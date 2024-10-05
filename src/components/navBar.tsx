import logo from '../../assets/logo.png'




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
                    {/* COLOCAR ABAIXO OS ITENS DA NAVBAR COM TAG li */}

                </ul>
            </div>

            <div className="superior">
                <ul>
                    <li><a href="/"><img src={logo} alt="LOGO" className='logo'/></a></li>
                    {/* COLOCAR ABAIXO OS ITENS DA NAVBAR COM TAG li */}
                    
                </ul>
            </div>    

        </header>
    );
}

export default NavBar;