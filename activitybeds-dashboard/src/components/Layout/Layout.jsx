import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'
import './Layout.scss'


function Layout() {
    return (
        <div className="layout-wrapper">
            <Header />
            <div className="layout-container">
                <Sidebar />
                <div className="layout-content">
                    <MainContent />
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Layout