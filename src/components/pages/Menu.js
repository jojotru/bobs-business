import React from "react";
import '../../App.css';
import Footer from '../Footer';
import Drinks from '../Drinks';

export default function Menu() {
    return (
        <>
        <h1 className='menu'>MENU</h1>
            <Drinks />
           <Footer />
        </>
    )
}