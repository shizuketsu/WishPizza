import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-body">
                    <ul className="footer-columns">
                        <li className="footer-column">
                            <h3>Пиццерия</h3>
                            <Link to="/">О нас</Link><br />
                            <Link to="/menu">Меню</Link><br />
                        </li>
                        <li className="footer-column">
                            <h3>Проект</h3>
                            <a href="https://github.com/shizuketsu/WishPizza">Репозиторий</a><br />
                            <a href="https://github.com/shizuketsu">Автор</a><br />
                        </li>
                    </ul>
                    <div className="copyright">
                        <h3>WishPizza © 2024</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}