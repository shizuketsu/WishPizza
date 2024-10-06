import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <main className="container">
                <div className="home-content">
                    <div className="home-prev">
                        <div className="home-prev-text">
                            <p className="prev-header">Лучшая <b>пицца</b> в вашем городе</p>
                            <p className="prev-text">Откройте для себя мир настоящей пиццы! Мы предлагаем разнообразные рецепты — от традиционной маргариты до уникальных авторских блюд.</p>
                            <button className="prev-check-menu">Просмотреть меню</button>
                        </div>
                        <div className="home-prev-pizza-img">
                            <img src="./img/home/pizza.png" alt="" />
                        </div>
                    </div>
                </div>
            </main>
            <div className="about">
                <div className="container">
                    <div className="about-content">
                        <img src="./img/home/kitchen.png" alt="" />
                        <div className="about-text">
                            <h3>О нас</h3>
                            <p>Мы используем только натуральные продукты: мука высшего сорта, свежие овощи и ароматные травы, привезенные прямиком из Италии. Каждая пицца — это история, в которой мы вкладываем страсть к кулинарному искусству. Благодаря высокому качеству наших блюд и теплому обслуживанию, за годы работы нам удалось завоевать сердца множества клиентов. Теперь "WishPizza" — это не просто пиццерия, а настоящая семья, где каждый гость чувствует себя как дома.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="work container">
                <div className="work-text">
                    <h3>Работа</h3>
                    <p>Работа в WishPizza — это часть дружной семьи, где ценится каждое ваше усилие. Мы ищем энергичных и увлеченных людей, готовых делиться своей любовью к пицце и обеспечивать высокий уровень обслуживания. Предлагаем гибкий график, достойную оплату и возможность развиваться в ресторанной индустрии. Если вы стремитесь к качеству и хотите стать частью нашей истории — мы ждем вас в нашей команде!</p>
                </div>
                <img src="./img/home/pizzamaker.png" alt="" />
            </div>
            <Footer />
        </div>
    );
}