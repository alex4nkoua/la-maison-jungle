import "../styles/Cart.css";

function Cart() {
    const panier = ["un monstera", "un lierre", "un bouquet de fleur"];

    const prixPlante1 = 8;
    const prixPlante2 = 10;
    const prixPlante3 = 15;

    return (
        <>
            <ul className="lmj-cart">
                <li>{panier[0]} : {prixPlante1}€</li>
                <li>{panier[1]} : {prixPlante2}€</li>
                <li>{panier[1]} : {prixPlante3}€</li>
            </ul>
            <span>Le total : {prixPlante1 + prixPlante2 + prixPlante3}€</span>
        </>
    )
}


export default Cart;