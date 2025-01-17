import React from 'react'

export default function Header() {
    return (
        <nav>
            <div className="logo">Comparbro</div>
            <ul>
                <a href="/"><li>Home</li></a>
                <a href="/product"><li>Our product</li></a>
                <a href="https://www.w3schools.com"><li>About us</li></a>
                <a href="https://www.w3schools.com"><li>Contact</li></a>
            </ul>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
            </div>
        </nav>
    )
}
