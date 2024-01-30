import '../assets/css/gigitem.css'

import { Link } from 'react-router-dom'

export default function GigItem ({ theme }) {
    const ring = require('../assets/media/pix/ring_banner.png')
    return (
        <div className={theme=='light' ? "gig-item gig-item-light": "gig-item gig-item-dark"}>
            <div className="gig-img-cover">
                <img className="gig-img" src={ring} />
            </div>
            <div className="gig-content">
                <div className="gig-txt">
                    <span className="gig-title">Logo design</span>
                    <span className="gig-price">$10</span>
                </div>
                <Link to="" className={theme == 'light' ? "gig-link gig-link-light" : "gig-link gig-link-dark"}>View</Link>
            </div>
        </div>
    )
}