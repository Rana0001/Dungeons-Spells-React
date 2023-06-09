import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from "../components/Footer";

export const Layout: React.FC = () => {
    return (
        <div className="font-body">
        <Header/>
        <Outlet />
        <Footer/>
        </div>
    );
    }
    