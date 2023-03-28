import CardWidget from "../cardwidget/cardwidget"
import Logo from "./logo.png"
const NavBar = () => {
    return (
        <nav>
            <img src = {Logo} alt = ""/>
            <h1> ECOMMERCE </h1>
            <div>
                <button> FILA </button>
                <button> KEVINSTON</button>
                <button> 47 STREET </button>
                <button> GUMMI </button>
            </div>
            <CardWidget/>
        </nav>
    )
}



export default NavBar