export default function Product(props) {
    return (
        <li className="home-pizza-item orange">
            <img src={"./img/products/" + props.src + ".png"} alt="" />
            <p>{props.name}</p>
            <p>$ {props.price}</p>
        </li>
    );
}