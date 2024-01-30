import '../assets/css/backfill.css'

export default function BackFill({ action }) {
    return (
        <div className="back-fill" onClick={()=>action()}></div>
    )
}