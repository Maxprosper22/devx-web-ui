import StatusBar from '../components/StatusBar'
import BottomNav from '../components/BottomNav'

export default function Settings() {
    return (
        <div className="base">
            <StatusBar title="Settings" />
            <div className="base-cover"></div>
            <BottomNav />
        </div>
    )
}