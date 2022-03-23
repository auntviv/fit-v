import React from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    const history = useHistory()
    return (
        <ul className="navbar">
              <li className="navbar__item active">
              <Link className="nav-link" to= "/workoutExercises/new">Home</Link>
              </li>
            <li className="navbar__item active">
            <Link className="nav-link" to= "/yoga">Yoga </Link>
            </li>
            <li className="navbar__item active">
            <Link className="nav-link" to= "/cardio">Cardio </Link>
            </li>
            <li className="navbar__item active">
            <Link className="nav-link" to= "/weighttraining">Weight-Training </Link>
            </li>
            <li className="navbar__item active"/>
         
        <Link
          className="navbar__link"
          to="/login"
          onClick={() => {
            localStorage.removeItem("vibrary_user");
            props.setAuthorizedUser(0);
          }}
        /> 
        
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
