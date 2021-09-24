import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className="my-5">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand p-2" to="/" style={{fontSize:"35px"}}>Users</Link>
                <form className="form-inline ml-auto my-2 my-lg-0 mr-3">
                    <Link to="/addUser"><button className="btn btn-primary btn-lg px-5 py-2" type="submit" style={{fontSize:"25px"}}>Add User</button></Link>
                </form>
            </nav >
        </div >
    )
}
