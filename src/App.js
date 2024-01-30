import { useState, useEffect, useContext, useMemo, useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

// import { AuthContext } from './ctx/AuthContext'
// import { PageContext } from './ctx/PageContext'

// import Signin from './pages/Signin'

import './assets/css/common.css'
import './App.css'
import Cookies from 'universal-cookie'

function App() {
    const cookies = new Cookies()
    const anime = require("animejs")
    const navigate = useNavigate()
    
    const apiRoute = '127.0.0.1:8080'
    let user = {}
    const [menuView, setMenuView] = useState(false)
    
    const iconStyle = {
        fontSize: '1.6em',
    }
    const borderStyle = {
        borderBottom: '1px solid rgb(0,128,128)'
    }
    const root = document.querySelector(':root')
    const rootVar = getComputedStyle(root)
    
    let edTheme = localStorage.getItem('edTheme')
    if (!edTheme) {
        localStorage.setItem('edTheme', 'light')
    }
    const [theme, setTheme] = useState(edTheme)
    
    const toggleTheme = async () => {
        if (theme=='light') {
            localStorage.setItem('edTheme', 'dark')
            edTheme = localStorage.getItem('edTheme')
            setTheme(edTheme)
        }
        else if (theme=='dark') {
            localStorage.setItem('edTheme', 'light')
            edTheme = localStorage.getItem('edTheme')
            setTheme(edTheme)
        }
    }
    
    const [userURL, setUserURL] = useState('')
    const [allChats, setAllChats] = useState('')
    const [chatURL, setChatURL] = useState('')
    const [newPost, setNewPost] = useState('')
    const [aboutUser, setAboutUser] = useState('')
    const [followersLink, setFollowersLink] = useState('')
    const [followedLink, setFollowedLink] = useState('')
    const [newChat, setNewChat] = useState([])
    const [postView, setPostView] = useState('')
    const [showCreate, setShowCreate] = useState()
    
    const toggleCreate = async () => {
        if (showCreate) {
            setShowCreate(false)
        } else {
            setShowCreate(true)
        }
    }
    
    const toggleMenu = () => {
        if (menuView) {
            setMenuView(false)
        } else {
            setMenuView(true)
        }
    }
    const [showLogin, setLogin] = useState(false)
    const toggleLogin = async () => {
        if(showLogin) {
            setLogin(false)
        }else {
            setLogin(true)
        }
    }
    // const localData = JSON.stringify(cookies.get('chappUser'))
    const localData = localStorage.getItem('chappUser')
    if (localData) {
        // const localUser = JSON.parse(localData)
        const localUser = JSON.parse(localData)
        user = {
            username: localUser.username,
            email: localUser.email,
            user_id: localUser.user_id,
            firstname: localUser.firstname,
            lastname: localUser.lastname,
            acctoken: localUser.access_token,
            loggedIn: localUser.loggedIn
        }
        // console.log('Current User: ' + user.username)
    } else {
        localStorage.setItem("chappUser", JSON.stringify({username: 'Guest', email: null, user_id: null, firstname: 'John', lastname: 'Doe', access_token: null, loggedIn: false}))
        const localUser = JSON.parse(localStorage.getItem('chappUser'))
        console.log(localUser)
        user = {
            username: localUser.username,
            email: localUser.email,
            user_id: localUser.user_id,
            firstname: localUser.firstname,
            lastname: localUser.lastname,
            acctoken: localUser.access_token,
            loggedIn: localUser.loggedIn
        }
        console.log('Current User: ' + user.username)
    }
    
    const onLogIn = (xData) => {
        localStorage.setItem("chappUser", JSON.stringify({username: xData.user.username, email: xData.user.email, user_id: xData.user.user_id, firstname: xData.user.firstname, lastname: xData.user.lastname, access_token: xData.access_token, loggedIn: true }))
        const userData=JSON.parse(localStorage.getItem('chappUser'))
        user={
            username: userData.username,
            email: userData.email,
            user_id: userData.user_id,
            firstname: userData.firstname,
            lastname: userData.lastname,
            acctoken: userData.access_token,
            loggedIn: userData.loggedIn
        }
        console.log(user)
    }
    const onLogOut = async () =>{
        const logoutReq =  await fetch(`http://${apiRoute}/signout`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'username': user.username, 'user_id': user.user_id, 'access_token': user.acctoken})
        })
        const data = await logoutReq.json()
        console.log(data)
        if (data.res === 'OK') {
            localStorage.removeItem('chappUser')
            user={
                username: 'Guest',
                email: null,
                user_id: null,
                firstname: 'John',
                lastname: 'Doe',
                acctoken: null,
                loggedIn: false
            }
            toggleMenu()
        } else if (data.res == 'Error') {
            alert(data.message)
        }
    }
    // cookies.remove('chappUser')
    // let postSocket = new WebSocket(`ws://${apiRoute}/post_socket`)
    // let chatSocket = new WebSocket(`ws://${apiRoute}/chat_socket`)
    // let socket = new WebSocket(`ws://${apiRoute}/wstest`)
    const socketIsOpen = (ws_obj) => {
        if (ws_obj.readyState==2 || ws_obj.readyState==3) {
            return false
        } else if (ws_obj.readyState==0 || ws_obj.readyState==1) {
            return true
        }
    }
    const [viewOption, setViewOption] = useState('')
    const [visibility, setVisibility] = useState()
    
    const toggleOption = (option, visible, post) =>{
        if (visible) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
        setViewOption(option)
    }
    
    const [showfaculties, setFaculties] = useState(false)
    const toggleFaculties = async () => {
        window.history.back()
        // {showfaculties? setFaculties(false) : setFaculties(true)}
    }
    const [search, setSearch] = useState(false)
    const toggleSearch = async () => {
        if (search) {
            setSearch(false)
        } else {
            setSearch(true)
        }
    }
    const pageCtx = {menuView, toggleMenu, iconStyle, borderStyle, apiRoute, anime, toggleCreate, showCreate, toggleOption, showfaculties, toggleFaculties, rootVar, theme, toggleTheme, search, toggleSearch}//, postSocket, chatSocket, socketIsOpen}
    const authCtx = {user, onLogIn, onLogOut, showLogin, toggleLogin}
    
    return (
        <div className={theme=='light' ? "appBase appBaseLight" : "appBase appBaseDark"}>
            {/*showLogin ? <Signin pageCtx={pageCtx} authCtx={authCtx} /> : ""*/}
            <Outlet context={{pageCtx, authCtx}} />
        </div>
    );
}

export default App;