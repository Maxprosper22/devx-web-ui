import { useLoaderData, Link, useOutletContext, Outlet } from 'react-router-dom'
import { IonIcon } from '@ionic/react'
import { arrowBackOutline, searchOutline, search, imagesOutline, readerOutline, albumsOutline, informationCircleOutline, notificationsOutline } from 'ionicons/icons'

// import Faculties from '../components/Faculties'
import '../assets/css/adbanner.css'

export default function AdBanner() {
    const institutes = useLoaderData()
    const {pageCtx, authCtx} = useOutletContext()
    
    const ring = require('../assets/media/pix/ring_banner.png')
    return (
        <div className="ad-banner">
            <div className="ad-banner-cover">
                <div className="s-bar-cover">
                    <IonIcon className="s-bar-icon" icon={searchOutline} size="medium"></IonIcon>
                    <input name="s-bar" className="s-bar" placeholder="Search" />
                </div>
                <IonIcon className="notif-icon" icon={notificationsOutline} size="medium"></IonIcon>
            </div>
            <div className="bn-div">
                <div className="bn-div-content">
                    <span className="bn-div-txt-1">Limited Time Offer</span>
                    <h2 className="bn-div-txt-2">$30 OFF</h2>
                    <div className="bn-div-link">Get Offer Now</div>
                </div>
                <div className="bn-div-img-cover">
                    <img src={ring} className="bn-div-img"/>
                </div>
            </div>
            {/*<Outlet context={{pageCtx, authCtx}} />*/}
        </div>
    )
}