import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Location() {
    return (
        <div>
            <Header />
            <main>
                <div className="location container">
                    <div className="location-text">
                        <h2>Наша локация</h2>
                        <p>WishPizza расположена в самом сердце города, на тихой и уютной улице, всего в нескольких минутах от центральной площади. Удобный доступ и близость к популярным местам делают нас идеальным местом для обеда с друзьями или романтического ужина.</p>
                    </div>
                    <img src="./img/home/location.png" alt="" />
                </div>
            </main>
            <Footer />
        </div>
    );
}