import { useState, useEffect, useContext } from 'react'
import { useOutletContext, Link } from 'react-router-dom'

// import User from '../pages/User'
// import Settings from '../pages/Settings'

import BackFill from './BackFill'

import { IonIcon } from '@ionic/react'
import { settingsOutline, logOutOutline, logInOutline, closeOutline } from 'ionicons/icons'

import '../assets/css/menu.css'

export default function Menu({ toggleMenu }) {
    const {pageCtx, authCtx} = useOutletContext()
    const [view, setView] = useState(pageCtx.page)
    
    const handleView = (xpage) => {
        // window.history.pushState({'page': xpage}, 'xpage', xpage)
        pageCtx.navigateTo(xpage)
    }
    const logout = () => {
        authCtx.onLogOut()
        pageCtx.toggleMenu()
    }
    
    return (
        <div className="menu">
            <BackFill action={toggleMenu} />
            <div className={pageCtx.theme=='light' ? "link-cover link-cover-light" : "link-cover link-cover-dark"}>
                <div className="nav-tog" onClick={()=>toggleMenu()}>
                    <IonIcon icon={closeOutline} className={pageCtx.theme=='light' ? "close-icon close-icon-light" : "close-icon close-icon-dark"} />
                </div>
                <div className="link-item">
                    <Link to="/account">Account</Link>
                </div>
                <div className="link-item">
                    <IonIcon icon={settingsOutline} style={pageCtx.iconStyle} ></IonIcon>
                    <Link to="/settings">Settings</Link>
                </div>
                {authCtx.user.loggedIn ? <Link className="auth-state-btn
                logout-btn" onClick={()=> authCtx.onLogOut()} >Log out</Link> : <div className="auth-btn-cover">
                    <div onClick={()=>authCtx.toggleLogin()} className="auth-state-btn login-btn" >Log in</div>
                    <Link to="/signup" className="auth-state-btn signup-btn" >Sign up</Link>
                </div>}
            </div>
            {/*<div className="auth-state-cover" >*/}
            {/*</div>*/}
        </div>
    )
}
