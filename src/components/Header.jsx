import { Link } from "react-router-dom";

function HeaderLink(props) {
    return (
        <li>
            <Link to={props.href}>{props.name}</Link>
        </li>
    );
}

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-body">
                    <div className="logo">
                        <Link to="/">
                            <img src="./img/logo/main.png" alt="" />
                        </Link>
                    </div>
                    <nav className="header-menu" id="menu">
                        <ul className="header-list">
                            <HeaderLink href="/" name="Главная" />
                            <HeaderLink href="/" name="Меню" />
                            <HeaderLink href="/" name="Локация" />
                        </ul>
                    </nav>
                    <div className="hamburger"></div>
                </div>
            </div>
        </header>
    );
}