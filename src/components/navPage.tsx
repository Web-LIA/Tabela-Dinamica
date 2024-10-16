import { useState } from "react";
import { useLocation } from 'react-router-dom'

interface PageProps {
    pagina:string;
    rota:string;
}

function NavPage({pagina, rota}:PageProps) {
    let location = useLocation()
    return (
        <li className={rota == location.pathname ? "atual" : ""}><a href={rota}>{pagina}</a></li>
    )
}

export default NavPage