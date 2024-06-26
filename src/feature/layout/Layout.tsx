import {Outlet} from "react-router-dom";
import s from './layout.module.scss'
import {Header} from "../header/Header.tsx";



export const Layout = () => {

  return (
    <div className={s.container}>
        <Header/>
       <main className={s.main}><Outlet/></main>
    </div>
  )
}

Layout.displayName = 'Layout'
