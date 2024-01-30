import { useState, useContext, useEffect } from 'react'
import { useOutletContext, Link, NavLink } from 'react-router-dom'

import { IonIcon } from '@ionic/react';
import { chatbubble, chatbubbleOutline, menu, menuOutline, closeOutline, notifications, notificationsOutline, sunnyOutline, moonOutline } from 'ionicons/icons'
// import { PageContext } from '../ctx/PageContext'
// import { AuthContext } from '../ctx/AuthContext'

import Menu from './Menu'
import '../assets/css/statusbar.css'

function StatusBar({ title, auths }) {
    const {pageCtx, authCtx} = useOutletContext()
    const [menu, setMenu] = useState(false)
    
    const toggleMenu =async () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }
    
    const handleView = async (xpage) => {
       if (pageCtx.page === '/menu') {
           window.history.back()
       } else {
            pageCtx.navigateTo(xpage)
       }
    }
    
    return (
        <div className='statusBar' >
            <div className={pageCtx.theme=='light' ? "topBar topBarLight" : "topBar topBarDark"} >
                <div className={pageCtx.theme=='light' ? "topBarLeft topBarLeftLight" : "topBarLeft topBarLeftDark"}>{title}</div>
                {/* {auths ? '' : <TopBar handleView={handleView} />} */}
                <div className="topBarRight">
                    {/* authCtx.user.username === 'Guest' ? '' : <Link to={`/user/${authCtx.user.username}/chats`} className="topBarItem chatLink">
                        <IonIcon icon={chatbubbleOutline} style={pageCtx.iconStyle}></IonIcon>
                    </Link>*/}
                    <div className="topBarItem">
                        <IonIcon icon={pageCtx.theme=='light' ? moonOutline : sunnyOutline} className={pageCtx.theme=='light' ? "topBarIcon topBarIconLink" : "topBarIcon topBarIconDark"} onClick={()=>pageCtx.toggleTheme()}></IonIcon>
                    </div>
                    <NavLink to='/notifications' className="topBarItem" >
                        {({isActive, isPending})=> (<IonIcon icon={isActive ? notifications : notificationsOutline} className={pageCtx.theme=='light' ? "topBarIcon topBarIconLink" : "topBarIcon topBarIconDark"}></IonIcon>)}
                    </NavLink>
                    <div className="topBarItem menuLink" onClick={()=>toggleMenu()}>
                        <IonIcon icon={menuOutline} className={pageCtx.theme=='light' ? "topBarIcon topBarIconLink" : "topBarIcon topBarIconDark"}></IonIcon>
                    </div>
                </div>
            </div>
            {menu ? <Menu toggleMenu={toggleMenu} /> : ''}
        </div>
    )
}

export default StatusBar