import Cart from "./Cart";

function Banner() {
    const title = "la maison jungle";


    return (
        <>
            <h1>{title.toUpperCase()}</h1>
            <Cart />
        </>

    );
}

export default Banner;