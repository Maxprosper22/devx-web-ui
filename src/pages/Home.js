// import '../assets/css/common.css'
import '../assets/css/home.css'
import { useState, useEffect, useContext, useRef, Suspense } from 'react'
import { useLoaderData, useOutletContext, defer,Await, Outlet, Link } from 'react-router-dom'

import { IonIcon } from '@ionic/react';
import { heart, heartOutline, repeat, repeatOutline, chatbox, chatboxOutline, ellipsisVertical, ellipsisVerticalOutline, pencilOutline, albumsOutline, createOutline } from 'ionicons/icons'

// import PostItem from '../components/PostItem'
import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'
// import Palette from '../components/Palette'
// import Poption from '../components/Poption'
// import FallBack from '../components/FallBack'
// import CreatePost from '../components/CreatePost'
import GigItem from '../components/GigItem'
// import Faculties from '../components/Faculties'

import AdBanner from '../components/AdBanner'
// import dummyposts from '../dummy/dummyposts'

const grab_posts = async (pageParam) =>{
    // const postsGrabber = await fetch(`http://127.0.0.1:8080/posts/${pageParam}`)
    // const posts = await postsGrabber.json()
    // return posts
    // const posts = dummyposts
    return null
}

export const postsLoader = async () => {
    return await grab_posts()
}

export default function Home({ viewOption, visibility, setVisibility, toggleOption }) {
    const {pageCtx, authCtx} = useOutletContext()
    
    const ring = require('../assets/media/pix/ring_banner.png')
    return (
        <div className="base">
            {/*<StatusBar title="NoobEx" />*/}
            <div className="base-cover">
                <AdBanner />
                <div className={pageCtx.theme=='light' ? "pop-serve pop-serve-light" : "pop-serve pop-serve-dark"}>
                    {/*<div className={pageCtx.theme=='light' ? "ft-div ft-div-light" : "ft-div ft-div-dark"}>
                        <h2 className="ft-txt">Categories</h2>
                        <Link to="jobs" className="ft-more">See more</Link>
                    </div>*/}
                    <div className="pop-cover">
                        <Link className={pageCtx.theme=='light' ? "pop-item pop-item-light" : "pop-item pop-item-dark"}>
                            <div className="pop-img-cover">
                                <img className="pop-img" src={ring} />
                            </div>
                            <span className={pageCtx.theme=='light' ? "pop-txt pop-txt-light" : "pop-txt pop-txt-dark"}>Technology</span>
                        </Link>
                        <Link className={pageCtx.theme=='light' ? "pop-item pop-item-light" : "pop-item pop-item-dark"}>
                            <div className="pop-img-cover">
                                <img className="pop-img" src={ring} />
                            </div>
                            <span className={pageCtx.theme=='light' ? "pop-txt pop-txt-light" : "pop-txt pop-txt-dark"}>Engineering & Technicians</span>
                        </Link>
                        <Link className={pageCtx.theme=='light' ? "pop-item pop-item-light" : "pop-item pop-item-dark"}>
                            <div className="pop-img-cover">
                                <img className="pop-img" src={ring} />
                            </div>
                            <span className={pageCtx.theme=='light' ? "pop-txt pop-txt-light" : "pop-txt pop-txt-dark"}>Construction</span>
                        </Link>
                        <Link className={pageCtx.theme=='light' ? "pop-item pop-item-light" : "pop-item pop-item-dark"}>
                            <div className="pop-img-cover">
                                <img className="pop-img" src={ring} />
                            </div>
                            <span className={pageCtx.theme=='light' ? "pop-txt pop-txt-light" : "pop-txt pop-txt-dark"}>Art & Design</span>
                        </Link>
                        <Link className={pageCtx.theme=='light' ? "pop-item pop-item-light" : "pop-item pop-item-dark"}>
                            <div className="pop-img-cover">
                                <img className="pop-img" src={ring} />
                            </div>
                            <span className={pageCtx.theme=='light' ? "pop-txt pop-txt-light" : "pop-txt pop-txt-dark"}>Art & Design</span>
                        </Link>
                        <Link className={pageCtx.theme=='light' ? "pop-item pop-item-light" : "pop-item pop-item-dark"}>
                            <div className="pop-img-cover">
                                <img className="pop-img" src={ring} />
                            </div>
                            <span className={pageCtx.theme=='light' ? "pop-txt pop-txt-light" : "pop-txt pop-txt-dark"}>Art & Design</span>
                        </Link>
                    </div>
                </div>
                <div className="gigs-cover">
                    <div className={pageCtx.theme=='light' ? "ft-div ft-div-light" : "ft-div ft-div-dark"}>
                        <h2 className="ft-txt">Suggested Gigs</h2>
                        <Link to="explore" className="ft-more">See more</Link>
                    </div>
                    <div className="gigs-roll">
                        <GigItem theme={pageCtx.theme} />
                        <GigItem theme={pageCtx.theme} />
                        <GigItem theme={pageCtx.theme} />
                    </div>
                </div>
                {/*<div className="channels-cover">
                    <div className={pageCtx.theme=='light' ? "ft-div ft-div-light" : "ft-div ft-div-dark"}>
                        <h2 className="ft-txt">Channels</h2>
                        <Link to="explore" className="ft-more">See more</Link>
                    </div>
                    <div className="channel-roll">
                        <GigItem theme={pageCtx.theme} />
                        <GigItem theme={pageCtx.theme} />
                        <GigItem theme={pageCtx.theme} />
                    </div>
                </div>*/}
                {/*<div className="feed-cover">
                    <h2 className="ft-txt">Feed</h2>
                </div>*/}
            </div>
            {/*visibility ? <Poption viewOption={viewOption} setVisibility={setVisibility} /> : ''*/}
            {/*pageCtx.showfaculties ? <Faculties facData={facData} toggleFaculties={pageCtx.toggleFaculties} /> : ''*/}
            <BottomNav />
            {/*pageCtx.showCreate ? <CreatePost /> : ''*/}
            <Outlet context={{pageCtx, authCtx}} />
        </div>
    )
}