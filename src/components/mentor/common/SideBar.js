import React, {Fragment} from 'react';
class SideBar extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="navbar-bg"></div>
                <div className="main-sidebar">
                    <aside id="sidebar-wrapper">
                        <div className="sidebar-brand">
                            <a href="index.html">Bridemy</a>
                        </div>
                        <div className="sidebar-brand sidebar-brand-sm">
                            <a href="index.html">Bmy</a>
                        </div>
                        <ul className="sidebar-menu">
                            <li className="menu-header">Tableau de bord</li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link ">
                                    <i className="fas fa-fire"></i>
                                    <span>Tableau de bord</span>
                                </a>

                            </li>
                            <li className="menu-header">Profile</li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link has-dropdown" data-toggle="dropdown">
                                    <i className="fas fa-columns"></i>
                                    <span>Profile</span>
                                </a>

                            </li>

                        </ul>

                        <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
                            <a
                                href="https://getstisla.com/docs"
                                className="btn btn-primary btn-lg btn-block btn-icon-split">
                                <i className="fas fa-rocket"></i>
                                Documentation
                            </a>
                        </div>
                    </aside>
                </div>
            </Fragment>
        )
    }
}

export default SideBar;