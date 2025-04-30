import React, { useState } from 'react'
import './Sidebar.scss'
import {
  FaUserCog, FaPenSquare, FaBuilding, FaBoxOpen, FaCog, FaQuestionCircle, FaSignOutAlt, FaAngleLeft, FaAngleRight, FaUsers, FaUserTag, FaListAlt, FaTags, FaThList, FaChevronDown, FaChevronRight
} from 'react-icons/fa';


const menuItemsData = [
    { id: 'user_management', icon: <FaUserCog />, text: 'User Management', hasSubmenu: true, subItems: [
        { id: 'users', icon: <FaUsers />, text: 'Users List', path: '/users' },
        { id: 'roles', icon: <FaUserTag />, text: 'Roles & Permissions', path: '/roles' },
    ]},
    { id: 'booking', icon: <FaPenSquare />, text: 'Booking', path: '/booking' },
    { id: 'agent', icon: <FaBuilding />, text: 'Agent', path: '/agents' }, // Змінив іконку для різноманітності
    { id: 'supplier', icon: <FaThList />, text: 'Supplier', path: '/suppliers' }, // Змінив іконку
    { id: 'product', icon: <FaBoxOpen />, text: 'Product', hasSubmenu: true, subItems: [
        { id: 'products_list', icon: <FaListAlt />, text: 'Product List', path: '/products' },
        { id: 'categories', icon: <FaTags />, text: 'Categories', path: '/categories' },
    ] },
    { id: 'settings', icon: <FaCog />, text: 'Settings', path: '/settings' },
    { id: 'help', icon: <FaQuestionCircle />, text: 'Help', path: '/help' },
];

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState({}); // { 'user_management': true, 'product': false }
    const [activeItem, setActiveItem] = useState('booking');

    const handleToggleCollapse = () => {
        setIsCollapsed(prev => !prev);
        if (!isCollapsed) {
            setOpenSubmenus({})
        }
    }

    const handleMenuItemClick = (itemId, hasSubmenu) => {
        setActiveItem(itemId);
        if (hasSubmenu && !isCollapsed) { 
            setOpenSubmenus(prev => ({
                // ...prev, //this or another option
                [itemId]: !prev[itemId]
            }));

        }
    }

    const handleSubMenuItemClick = (itemId, path) => {
     setActiveItem(itemId); 
     // navigate(path);
     console.log("Navigate to:", path);
   };


    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                {!isCollapsed && <span className="logo">activitybeds</span>}
                <button onClick={handleToggleCollapse} className="toggle-button">
                    {isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
                </button>
            </div>

            <nav className="sibebar-nav">
                <ul>
                    {menuItemsData.map((item) => {
                        const isSubmenuOpen = openSubmenus[item.id] && !isCollapsed;
                        return (
                        <li key={item.id} 
                            className={`${activeItem === item.id ? 'active' : ''} ${isSubmenuOpen ? 'submenu-open' : ''}`}
                        >
                            <div className="menu-item-content" onClick={() => handleMenuItemClick(item.id, item.hasSubmenu)}>
                                <span className="icon" title={isCollapsed ? item.text : undefined}>{item.icon}</span>
                                {!isCollapsed && <span className="text">{item.text}</span>}
                                {!isCollapsed && item.hasSubmenu && (
                                    <span className="submenu-arrow">
                                        {isSubmenuOpen ? <FaChevronDown /> : <FaChevronRight />}
                                    </span>
                                )}
                            </div>
                            {isSubmenuOpen && item.subItems && (
                                <ul className="submenu">
                                    {item.subItems.map(subItem => (
                                    <li key={subItem.id}
                                        className={activeItem === subItem.id ? 'active' : ''}
                                        onClick={() => handleSubMenuItemClick(subItem.id, subItem.path)}
                                    >
                                        <span className="icon sub-icon" title={isCollapsed ? subItem.text : undefined}>
                                            {subItem.icon || '•'}
                                        </span> {/* Додаємо іконку або крапку */}
                                        {!isCollapsed && <span className="text">{subItem.text}</span>}
                                    </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="sidebar-footer">
                <button className="logout-button">
                    <span className="icon"><FaSignOutAlt /></span>
                    {!isCollapsed && <span className="text">Log Out</span>}
                    {!isCollapsed && <span className="logout-icon-arrow">➔</span>}
                </button>
            </div>
        </div>
    )
}

export default Sidebar