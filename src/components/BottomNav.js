import { useState, useEffect, useContext } from 'react'
import { useOutletContext, Link, NavLink } from 'react-router-dom'
import { IonIcon } from '@ionic/react';
import { home, homeOutline, notifications, notificationsOutline, search, searchOutline, person, personOutline, compass, compassOutline, briefcaseOutline, briefcase, school, schoolOutline, personCircle, personCircleOutline } from 'ionicons/icons'

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
            <NavLink to='/academics' className="tabLinks" >
                {({isActive, isPending})=> (<IonIcon icon={isActive ? school : schoolOutline} className={pageCtx.theme == 'light' ? 'tabIcon tabIconLink' : 'tabIcon tabIconDark'}></IonIcon>)}
            </NavLink>
            <NavLink to='/explore' className="tabLinks" >
                {({isActive, isPending})=> (<IonIcon icon={isActive ? compass : compassOutline} className={pageCtx.theme == 'light' ? 'tabIcon tabIconLink' : 'tabIcon tabIconDark'}></IonIcon>)}
            </NavLink>
            <NavLink to={`/user/${authCtx.user.username}`} className="tabLinks" >
               {({isActive, isPending})=> (<IonIcon icon={isActive ? personCircle : personCircleOutline} className={pageCtx.theme == 'light' ? "tabIcon tabIconLink" : "tabIcon tabIconDark"}></IonIcon>)}
            </NavLink>
        </div>
    )
}

export default BottomNav