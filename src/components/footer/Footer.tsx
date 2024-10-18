import logo from '../../assets/logo.png'
import styles from '../themes/footer.module.scss'
import { FaGithubSquare } from "react-icons/fa";

function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} alt="LOGO"/>
            </div>
            <ul className={styles.icons}>
                <li>
                    <a href='https://github.com/ari123rm'><FaGithubSquare/>Ryan</a>
                </li>
                <li>
                    <a href='https://github.com/RyanRodrics'><FaGithubSquare/>Ariel</a>
                </li>
                <li>
                    <a href='https://github.com/Andrededede'><FaGithubSquare/>André</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer