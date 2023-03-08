import React from "react";

function Header ({ setSideBarCollapsed }) {

    return (
        <nav className="header-container">
            <div className="button-container header-button">
                <button onClick={ setSideBarCollapsed }>&#9776;</button>
            </div>
            <div className="title">
                <h1>Lotion</h1>
                <p>Like Notion, but worse</p>
            </div>
        </nav>
    );
};

export default Header;
