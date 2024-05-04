/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom"
import { useAuthContext } from '../hooks/useAuthContext';


const Sidebar = () => {
    const user = useAuthContext()
    const logOut = () => {
        localStorage.removeItem('user')
        window.location.href = '/'
    }
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="" className="brand-link">
                    <img src="/dist/img/IBUA LOGO.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '1' }} />
                    <span className="brand-text font-weight-light">iBUA HUB</span>
                </Link>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            {/* <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> */}
                        </div>
                        <div className="info">
                            <Link to="" className="d-block">
                                {user.user.user.user.first_name}
                            </Link>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className='nav-item'>
                                <Link to="/dashboard" className='nav-link active'>
                                    <i className='nav-icon fas fa-tachometer-alt' />
                                    <p>
                                        Dashboard
                                    </p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/dashboard/updateList" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>View Updates</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/addUpdates" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Add updates</p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/dashboard/imageList" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Hero Section Content</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/addImage" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Add Section Content</p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/dashboard/view_testimonies" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>View Testimonies</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/addtestmonies" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Add Testimonies</p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/dashboard/faqsList" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>View FAQs</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/addFAQs" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Add FAQs</p>
                                </Link>
                            </li>
                            <li className="nav-header">SETTINGS</li>
                            <li className="nav-item">
                                <Link to="/dashboard/changePassword" className="nav-link">
                                    <i className="nav-icon fa fa-lock" />
                                    <p>
                                        Change Password
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" onClick={logOut}>
                                    <i className="nav-icon fa fa-arrow-left" />
                                    <p>
                                        Log Out
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

        </>
    )
}

export default Sidebar
