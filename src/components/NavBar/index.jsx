import React from "react";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Marca</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#">1</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">2</a>
                    </li><li>
                        <a className="nav__link" href="#">3</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;