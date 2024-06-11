import  { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbarList = ['Home', 'Pizza', 'Steps'];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-toggle']} onClick={toggleMenu}>
                &#9776;
            </div>
            <ul
                className={`${styles['navbar-menu']} ${
                    isMenuOpen ? styles.active : ''
                }`}
            >
                {navbarList.map((item) => (
                    <li key={item} className={styles['navbar-item']}>
                        <Link
                            to={`/${item.toLowerCase()}`}
                            className={styles['navbar-link']}
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

// import React, { useState } from 'react';
// import styles from './Navbar.module.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className={styles.navbar}>
//             <div className={styles['navbar-toggle']} onClick={toggleMenu}>
//                 &#9776;
//             </div>
//             <ul
//                 className={`${styles['navbar-menu']} ${
//                     isMenuOpen ? styles.active : ''
//                 }`}
//             >
//                 <li className={styles['navbar-item']}>
//                     <Link to="/" className={styles['navbar-link']}>
//                         Home
//                     </Link>
//                 </li>
//                 <li className={styles['navbar-item']}>
//                     <Link to="/pizza" className={styles['navbar-link']}>
//                         Pizza
//                     </Link>
//                 </li>
//                 <li className={styles['navbar-item']}>
//                     <Link to="/steps" className={styles['navbar-link']}>
//                         Steps
//                     </Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;
