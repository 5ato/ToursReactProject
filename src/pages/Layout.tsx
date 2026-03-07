import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sitemap from "../components/Sitemap/Sitemap";
import Footer from "../components/Footer/Footer";

export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Sitemap/>
            <Footer/>
        </>
    )
}