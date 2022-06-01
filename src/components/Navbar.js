import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({user}) {
  return (
    <div className="navbar">
      <span className="logo"><Link className='link' to='/'>Movie App</Link></span>
      {
      user ? (
       <ul className="list">
        <li className="listItem">
          <img
            src="https://cdn3.iconfinder.com/data/icons/commercial-3/512/3065_man_c-512.png"
            alt="profile_pic"
            className="profile_pic"
          ></img>
        </li>
        <li className="listItem">Manisha</li>
        
        <li className="listItem">Logout</li>
      </ul>
      ): (<Link className="link" to='/login'>Login</Link>)
}
    </div>
  );
}
