import { useState, useEffect, useContext, useMemo, useRef } from 'react'
import { Outlet, useNavigate, useOutletContext, Link } from 'react-router-dom'

import '../assets/css/signin.css'

import StatusBar from '../components/StatusBar'
import { IonIcon } from '@ionic/react'
import { eyeOutline, eyeOffOutline } from 'ionicons/icons'

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    
    const {pageCtx, authCtx} = useOutletContext()
    
    if (authCtx.user.username !== 'Guest' && authCtx.user.loggedIn !== false) {
        // pageCtx.navigateTo('/')
    }
    // const handleView = async (xpage) => {
    //     pageCtx.navigateTo(xpage)
    // }
    const handleMail = async (event) => {
        setEmail(event.target.value)
    }
    const handlePass = async (event) => {
        setPass(event.target.value)
    }
    
    const signupAction = async (event) => {
        if (email === '') {
            alert('Email is required!')
        } else if (password === '') {
            alert('Password is required!')
        } else if (email !== '' || password !== '') {
            // alert("All fields are filled, all that's left is to reel")
            
            const formData = {'email': email, 'password': password}
            try {
                const req = await fetch('http://127.0.0.1:8080/signup', {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'accept': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })
                const res = await req
                if (res.status === 200) {
                    const data = await res.json()
                    if (data.res.type === 'error') {
                        alert(data.res.message)
                    } else if (data.res.type === 'success') {
                        authCtx.onLogIn(data.res)
                    }
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
    const [showPass1, setShowPass1] = useState()
    const [showPass2, setShowPass2] = useState()

    const togglePass = async (passId) => {
        if (passId && passId===1) {
            if (showPass1) {setShowPass1(false)}
            else{setShowPass1(true)}
        } else if (passId && passId===2) {
            if (showPass2) {setShowPass2(false)}
            else{setShowPass2(true)}
        }
    }
    
    return (
        <div className="sign-in">
            <StatusBar title="Signup" />
            <div className="signup-cover" >
                <span className="signuptxt" >Sign up</span>
                <div method="post" className="signup-form" >
                    <input name="email" onChange={handleMail} type="email" placeholder="Email" className="signup-fields" />
                    <div className="password-cover">
                        <input name="password" onChange={handlePass} type={showPass1 ? "text" : "password"} placeholder="Password" className="signup-fields password-field" />
                        <div className="pass-icon" onClick={()=>togglePass(1)}>
                            <IonIcon icon={showPass1 ? eyeOffOutline : eyeOutline} style={pageCtx.iconStyle}></IonIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signup-actions">
                <button className="signup-btn" type="submit" onClick={signupAction} >Signup</button>
                <div className="others">
                    <Link to="/reset" className="otherOpts" >Reset Password</Link>
                    <Link to="/signup" className="otherOpts" >Sign up</Link>
                </div>
            </div>
        </div>
    )
}