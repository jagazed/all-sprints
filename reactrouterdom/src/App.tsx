import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/adidas";
import {Puma} from "./components/pages/puma";
import {Abibas} from "./components/pages/abibas";
import {Link, Navigate, NavLink, Outlet, Route, Routes, useNavigate} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles"
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/pricesuppliers',
    ERROR: '/error404',
    PROTECT: '/protectedpage'
} as const
function App() {
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1} >Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2} >Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3} >Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4} >Prices for suppliers</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECT} >ProtectedPage</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <Link className={styles.LinkLikeButton} to="/adidas" >главная страница</Link>
                        <button className={styles.ButtonLikeLink}  onClick={navigateHandler} >назад</button>
                    </div>
                    <Outlet />
                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Navigate to={PATH.PAGE1} />} />*/}

                    {/*    <Route path={PATH.PAGE1} element={<Adidas />} />*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma />} />*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas />} />*/}
                    {/*    <Route path={PATH.PAGE4} element={<Prices />} />*/}
                    {/*    <Route path="/:model/:id" element={<Model />} />*/}

                    {/*    <Route path={'/*'} element={<Error404 />} />*/}
                    {/*    /!*<Route path={PATH.ERROR} element={<Error404 />} />*!/*/}
                    {/*    /!*<Route path="/*" element={<Navigate to={PATH.ERROR} />} />*!/*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;


