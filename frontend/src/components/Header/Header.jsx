import { Link } from "react-router-dom";
import "./Header.css"

function Header(){
    return( 
    <div className="Header">
        <Link to="/">Logo</Link>
        <Link to="/">Listar</Link>
        <Link to="/adicionar">Adicionar</Link>
    </div>
    )
}

export default Header;