import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom"

export const Navbar = () => {

    const links = [
        { path: "/", title: "Home" },
        { path: "/categories", title: "Categories" },
        { path: "/about", title: "About" },
        { path: "/blogs", title: "Blogs" },
        { path: "/contact", title: "Contact" },

    ];

    const DefaultStyle = {
        color: "black"
    }

    const ActiveStyle = {
        color: "tomato"
    }


    return (
        <>
            <nav>
                <div className="logo">
                    <img src="https://static.vecteezy.com/system/resources/previews/034/869/307/non_2x/rng-letter-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" alt="" className='w-30' />
                </div>


                <div className="Navlinks border-2 p-6" >
                    {
                        links.map((data) => (

                            <NavLink className="ml-10" style={({ isActive }) => {
                                return isActive ? ActiveStyle : DefaultStyle;
                            }}
                                key={data.path} to={data.path} end>

                                {data.title}

                            </NavLink>
                        ))
                    }
                </div>

                <div className="links">
                   <button> <Link to="/login">Login</Link></button>
                </div>
            </nav>


        </>
    )
}


