import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useResize } from './helpers/useresize'

function NavbarHidden1 () {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }



    return (
        <ul onClick={handleToggle} className={toggle ? "navbar-hidden toggled" : "navbar-hidden"}>
						<NavLink
							className="customlink font-weight-bold nav-link mx-3"
							whileHover={{ color: 'black' }}
							to={`/create`}
						>
							Create lol
						</NavLink>
						<NavLink
							className="customlink font-weight-bold nav-link mx-3"
							exact
							to={`/explore`}
						>
							Explore
						</NavLink>
						<NavLink
							href="account.html"
							className="customlink font-weight-bold nav-link mx-3"
							exact
							to={`/Account`}
						>
							Account
						</NavLink>
					
        </ul>
    )
}

export default NavbarHidden1