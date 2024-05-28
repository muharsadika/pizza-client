import React from 'react';
import styles from './Pizza.module.css';

const pizzaData = [
    {
        name: 'Focaccia',
        ingredients: 'Bread with italian olive oil and rosemary',
        price: 6,
        photoName: 'pizzas/focaccia.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Margherita',
        ingredients: 'Tomato and mozarella',
        price: 10,
        photoName: 'pizzas/margherita.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Spinaci',
        ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
        price: 12,
        photoName: 'pizzas/spinaci.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: 'pizzas/funghi.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: 'pizzas/salamino.jpg',
        soldOut: true,
    },
    {
        name: 'Pizza Prosciutto',
        ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
        price: 18,
        photoName: 'pizzas/prosciutto.jpg',
        soldOut: false,
    },
];

export default function Pizza() {
    return (
        <div className={styles.Pizza}>
            <div className={styles.container}>
                <Header />
                <Menu />
                <Footer />
            </div>
        </div>
    );
}

function Header() {
    const style: React.CSSProperties = {
        // color: 'red',
        // fontSize: '48px',
        // textTransform: 'uppercase',
    };

    return (
        <header className={styles.header}>
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;

    return (
        <main className={styles.menu}>
            <h2>Our Menu</h2>

            <p>
                Authentic Italian Cuisine. 6 Creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
            </p>

            {pizzas.length > 0 ? (
                <ul className={styles.pizzas}>
                    {pizzas.map((pizza) => (
                        <Pizzas key={pizza.name} pizzaObj={pizza} />
                    ))}
                </ul>
            ) : (
                <p>We're still working on our menu. Please come back later!</p>
            )}
        </main>
    );
}

function Pizzas(props: {
    key: string;
    pizzaObj: {
        name: string;
        ingredients: string;
        price: number;
        photoName: string;
        soldOut: boolean;
    };
}) {
    // console.log(props);
    const pizzaObj = props.pizzaObj;

    // if (props.pizzaObj.soldOut) return null;

    return (
        <li
            className={`${styles.pizza} ${
                pizzaObj.soldOut ? styles.soldOut : ''
            }`}
        >
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>
                    {pizzaObj.soldOut ? 'SOLD OUT' : '$' + pizzaObj.price}
                </span>
                <button disabled={pizzaObj.soldOut}>Add to Cart</button>
            </div>
        </li>
    );
}

function Footer() {
    // const date = new Date().toLocaleTimeString();
    const hour = new Date().getHours();
    const openHour = 0;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    // const message = isOpen
    //   ? 'We are currently open!'
    //   : 'We are currently closed!';

    // if (isOpen) alert('We are currently open!');
    // else alert('We are currently closed!');

    return (
        <>
            <footer className={styles.footer}>
                {isOpen ? (
                    <Order openHour={openHour} closeHour={closeHour} />
                ) : (
                    <p>
                        We're happy to welcome you between {openHour}:00 and{' '}
                        {closeHour}:00
                    </p>
                )}
            </footer>
        </>
    );
}

function Order(props: { closeHour: number; openHour: number }) {
    const openHour = props.openHour;
    const closeHour = props.closeHour;

    return (
        <div className={styles.order}>
            <p>
                We are open from {openHour}:00 until {closeHour}:00. Come visit
                us or order online
            </p>
            <button className={styles.btn}>Order Now</button>
        </div>
    );
}
