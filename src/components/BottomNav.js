import { useState, useEffect, useContext } from 'react'
import { useOutletContext, Link, NavLink } from 'react-router-dom'
import { IonIcon } from '@ionic/react';
<<<<<<< HEAD
import { home, homeOutline, notifications, notificationsOutline, search, searchOutline, person, personOutline, compass, compassOutline, briefcaseOutline, briefcase, school, schoolOutline, personCircle, personCircleOutline, settings, settingsOutline, locateOutline, locate } from 'ionicons/icons'
=======
import { home, homeOutline, notifications, notificationsOutline, search, searchOutline, person, personOutline, compass, compassOutline, briefcaseOutline, briefcase, locate, locateOutline, school, schoolOutline, personCircle, personCircleOutline, settings, settingsOutline } from 'ionicons/icons'
>>>>>>> 8bd94d62838b08f814d67b1db4eccebe41fe5057

import '../assets/css/bottomnav.css'

function BottomNav() {
    const {pageCtx, authCtx} = useOutletContext()
    
    const setTab = async (xpath) => {
        pageCtx.navigateTo(xpath)
    }
    
    return (
        <div className={pageCtx.theme == 'light' ? 'bottomNav bottomNavLight' : 'bottomNav bottomNavDark'}>
            <NavLink to='/' className="tabLinks" >
                {({isActive, isPending})=> (<IonIcon icon={isActive ? home : homeOutline} className={pageCtx.theme == 'light' ? 'tabIcon tabIconLink' : 'tabIcon tabIconDark'}></IonIcon>)}
            </NavLink>
            <NavLink to='/locate' className="tabLinks" >
                {({isActive, isPending})=> (<IonIcon icon={isActive ? locate : locateOutline} className={pageCtx.theme == 'light' ? 'tabIcon tabIconLink' : 'tabIcon tabIconDark'}></IonIcon>)}
            </NavLink>
            <NavLink to='/profile' className="tabLinks" >
<<<<<<< HEAD
               {({isActive, isPending})=> (<IonIcon icon={isActive ? personCircle : personCircleOutline} className={pageCtx.theme == 'light' ? "tabIcon tabIconLink" : "tabIcon tabIconDark"}></IonIcon>)}
            </NavLink>
            <NavLink to='/settings' className="tabLinks" >
                {({isActive, isPending})=> (<IonIcon icon={isActive ? settings : settingsOutline} className={pageCtx.theme == 'light' ? 'tabIcon tabIconLink' : 'tabIcon tabIconDark'}></IonIcon>)}
=======
                {({isActive, isPending})=> (<IonIcon icon={isActive ? person :personOutline} className={pageCtx.theme == 'light' ? 'tabIcon tabIconLink' : 'tabIcon tabIconDark'}></IonIcon>)}
            </NavLink>
            <NavLink to='/settings' className="tabLinks" >
               {({isActive, isPending})=> (<IonIcon icon={isActive ? settings : settingsOutline} className={pageCtx.theme == 'light' ? "tabIcon tabIconLink" : "tabIcon tabIconDark"}></IonIcon>)}
>>>>>>> 8bd94d62838b08f814d67b1db4eccebe41fe5057
            </NavLink>
        </div>
    )
}

export default BottomNav