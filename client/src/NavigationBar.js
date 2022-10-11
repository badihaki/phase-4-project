import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react"

function NavigationBar(){
    // will need to fetch to /me
    // will need state to determine if user is logged in
    return(
        <div>
            <h4>Navigation</h4>
            <Link to={"/"}> Home </Link>
            <Link to={"/signup"}> Sign Up </Link>
        </div>
    )
}

export default NavigationBar;