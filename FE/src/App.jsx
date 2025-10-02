import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Books from './pages/Books'
import Categories from './pages/Categories'
import AuthPage from './pages/AuthPage'
import './App.css'
import {Routes , Route} from 'react-router'    

function App() {
   return (
    <>
        <div>
            <Routes>
                < Route path = '/' element = {<Home/>}/>
                < Route path = '/Books' element = {<Books/>}/>
                 < Route path = '/Categories' element = {<Categories/>}/>
                  < Route path = '/AuthPage' element = {<AuthPage/>}/>
            </Routes>
        </div>
    </>
   );
}
export default App
