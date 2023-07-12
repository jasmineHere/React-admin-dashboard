import "./navbar.scss"

const Navbar = () => { 
    return(
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg"/>
                <span>jasadmin</span>
            </div>
            <div className="icons">
                <img src=""/>
                <img src=""/>
                <img src=""/>
                <div className="notification"></div>
            </div>
        </div>
    )
}

export default Navbar