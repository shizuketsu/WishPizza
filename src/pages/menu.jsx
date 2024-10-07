import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/product";

export default function Menu() {
    return (
        <div>
            <Header />
            <main className="container">
                <div className="pizza-header">
                    <h2>Наши продукты</h2>
                    <ul className="home-pizza-list">
                        <Product name="вкусная" price="20.99" src="1" />
                        <Product name="вкусная" price="20.99" src="1" />
                        <Product name="вкусная" price="20.99" src="1" />
                        <Product name="вкусная" price="20.99" src="1" />
                        <Product name="вкусная" price="20.99" src="1" />
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
}