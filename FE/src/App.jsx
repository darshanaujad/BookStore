import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Books from './pages/Books'
import Categories from './pages/Categories'
import About from './pages/About'
import Contact from './pages/Contact'
import AuthPage from './pages/AuthPage'
import Layout from './layouts/Layout'
import Practice from './pages/Practice'
import { Routes, Route } from 'react-router'
import toast, { Toaster } from 'react-hot-toast'
import './App.css'


function App() {
    const routes = [
        {
            path: '/', element: <Layout><Home/></Layout>
        },
        {
            path: '/books', element: <Layout><Books/></Layout>
        },
        {
            path: '/categories', element: <Layout><Categories/></Layout>
        },
        {
            path: '/auth', element: <AuthPage/>
        },
        {
            path: '/about', element: <Layout><About/></Layout>
        },
        {
            path: '/contact', element: <Layout><Contact/></Layout>
        },
        {
            path : '/practice' , element: <Layout><Practice/></Layout>
        }
    ];

    return (
        <>
            <div>
               {/**Initializing the routes */}
                <Routes>
                    {routes.map((route,index)=>(
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                </Routes>
                {/**Initializing the toaster */}
                <Toaster position='top-right' reverseOrder={false} />
            </div>
        </>
    );
}
export default App
