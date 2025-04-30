import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MainContent from '../MainContent/MainContent'
import './Layout.scss'


function Layout() {
    return (
        <div className="layout-container">
            <Sidebar />
            <MainContent />
        </div>
    )
}

export default Layout