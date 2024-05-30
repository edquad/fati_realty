import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { Route, Routes, useLocation } from 'react-router-dom';

import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppRightMenu from './AppRightMenu';
import AppMenu from './AppMenu';

import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';
//import Dashboard from './pages/Dashboard';
import Map from './pages/Map';
import Properties from './pages/Properties';
import Enquiries from './pages/Enquiries';
import MortgageCalc from './pages/MortgageCalc';
import PropertyDetails from './pages/PropertyDetails';
import TenantRegistration from './pages/TenantRegistration';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

const App = (props: any) => {
    const locationUrl = useLocation();
    if (locationUrl.pathname === '/' || locationUrl.pathname === '/Login' || locationUrl.pathname === '/Properties') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    if (locationUrl.pathname === '/' || locationUrl.pathname === '/Login' || locationUrl.pathname === '/Register' || locationUrl.pathname === '/login' || locationUrl.pathname === '/register') {
        const hidMenuBar = document.querySelectorAll<HTMLElement>('.layout-menu-wrapper');
        hidMenuBar.forEach((menu) => {
            menu.style.display = 'none';
        });
    } else {
        const hidMenuBar = document.querySelectorAll<HTMLElement>('.layout-menu-wrapper');
        hidMenuBar.forEach((menu) => {
            menu.style.display = 'block';
        });
    }
    const [userName, setUserName] = useState('');
    const [rightMenuActive, setRightMenuActive] = useState(false);
    const [configActive, setConfigActive] = useState(false);
    const [menuMode, setMenuMode] = useState('sidebar');
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [ripple, setRipple] = useState(true);
    const [sidebarStatic, setSidebarStatic] = useState(false);
    const [staticMenuDesktopInactive, setStaticMenuDesktopInactive] = useState(false);
    const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [topbarMenuActive, setTopbarMenuActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [pinActive, setPinActive] = useState(false);
    const [activeInlineProfile, setActiveInlineProfile] = useState(false);
    const [resetActiveIndex, setResetActiveIndex] = useState<boolean>(false);
    const copyTooltipRef = useRef<any>();
    const location = useLocation();
    useEffect(() => {
        if (location.state && location.state.userName) {
            setUserName(location.state.userName);
        }
    }, [location]);
    PrimeReact.ripple = true;

    const menu = [
        {
            label: 'User',
            icon: 'pi pi-user',
            items: [
                {
                    label: ` ${userName} `,
                    icon: 'pi pi pi-user'
                },
                {
                    label: 'Log Out',
                    icon: 'pi pi-sign-out',
                    to: '/'
                }
            ]
        },
        {
            label: 'Map',
            icon: 'pi pi-map-marker',
            to: '/Map'
        },
        {
            label: 'Properties',
            icon: 'pi pi-building',
            to: '/Properties'
        },
        {
            label: 'Enquiries',
            icon: 'pi pi-comments',
            to: '/Enquiries'
        },
        {
            label: 'Mortgage Calc',
            icon: 'pi pi-calculator',
            to: '/MortgageCalc'
        },
        {
            label: 'Property Details',
            icon: 'pi pi-list',
            to: '/PropertyDetails'
        },
        {
            label: 'Tenant Registration',
            icon: 'pi pi-list',
            to: '/TenantRegistration'
        }

        // {
        //     label: 'Analytics',
        //     icon: 'pi pi-chart-line',
        //     items: [
        //         {
        //             label: 'Vision Pro',
        //             icon: 'pi pi-list',
        //             to: '/PreVisionPro'
        //         },
        //         {
        //             label: 'Grey Market',
        //             icon: 'pi pi-list',
        //             to: '/GreyMarket'
        //         },

        //         {
        //             label: 'Grey Market Summary',
        //             icon: 'pi pi-list',
        //             to: '/GreyMarketSlide'
        //         }
        //     ]
        //}
    ];

    let rightMenuClick: any;
    let configClick: any;
    let menuClick: any;
    let searchClick: boolean = false;
    let topbarItemClick: any;

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

    useEffect(() => {
        setResetActiveIndex(true);
        setMenuActive(false);
    }, [menuMode]);

    const onDocumentClick = () => {
        if (!searchClick && searchActive) {
            onSearchHide();
        }

        if (!topbarItemClick) {
            setTopbarMenuActive(false);
        }

        if (!menuClick) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false);
                setResetActiveIndex(true);
            }

            if (overlayMenuActive || staticMenuMobileActive) {
                setOverlayMenuActive(false);
                setStaticMenuMobileActive(false);
            }

            hideOverlayMenu();
            unblockBodyScroll();
        }

        if (!rightMenuClick) {
            setRightMenuActive(false);
        }

        if (configActive && !configClick) {
            setConfigActive(false);
        }

        topbarItemClick = false;
        menuClick = false;
        configClick = false;
        rightMenuClick = false;
        searchClick = false;
    };

    const onSearchHide = () => {
        setSearchActive(false);
        searchClick = false;
    };

    const onRightMenuClick = () => {
        rightMenuClick = true;
    };

    const onRightMenuActiveChange = (active: any) => {
        setRightMenuActive(active);
    };

    const onMenuButtonClick = (event: any) => {
        menuClick = true;

        if (isOverlay()) {
            setOverlayMenuActive((prevState) => !prevState);
        }

        if (isDesktop()) {
            setStaticMenuDesktopInactive((prevState) => !prevState);
        } else {
            setStaticMenuMobileActive((prevState) => !prevState);
        }

        event.preventDefault();
    };

    const hideOverlayMenu = () => {
        setOverlayMenuActive(false);
        setStaticMenuMobileActive(false);
    };

    const onTopbarItemClick = (event: any) => {
        topbarItemClick = true;
        setTopbarMenuActive((prevState) => !prevState);
        hideOverlayMenu();
        event.preventDefault();
    };

    const onToggleMenu = (event: any) => {
        menuClick = true;

        if (overlayMenuActive) {
            setOverlayMenuActive(false);
        }

        if (sidebarActive) {
            setSidebarStatic((prevState) => !prevState);
        }

        event.preventDefault();
    };

    const onSidebarMouseOver = () => {
        if (menuMode === 'sidebar' && !sidebarStatic) {
            setSidebarActive(isDesktop());
            setTimeout(() => {
                setPinActive(isDesktop());
            }, 200);
        }
    };

    const onSidebarMouseLeave = () => {
        if (menuMode === 'sidebar' && !sidebarStatic) {
            setTimeout(() => {
                setSidebarActive(false);
                setPinActive(false);
            }, 250);
        }
    };

    const onMenuClick = () => {
        menuClick = true;
    };

    const onChangeActiveInlineMenu = (event: any) => {
        setActiveInlineProfile((prevState) => !prevState);
        event.preventDefault();
    };

    const onRootMenuItemClick = () => {
        setMenuActive((prevState) => !prevState);
    };

    const onMenuItemClick = (event: any) => {
        if (!event.item.items) {
            hideOverlayMenu();
            setResetActiveIndex(true);
        }

        if (!event.item.items && (isHorizontal() || isSlim())) {
            setMenuActive(false);
        }
    };

    const isHorizontal = () => {
        return menuMode === 'horizontal';
    };

    const isSlim = () => {
        return menuMode === 'slim';
    };

    const isOverlay = () => {
        return menuMode === 'overlay';
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const unblockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    const layoutClassName = classNames('layout-wrapper', {
        'layout-static': menuMode === 'static',
        'layout-overlay': menuMode === 'overlay',
        'layout-overlay-active': overlayMenuActive,
        'layout-slim': menuMode === 'slim',
        'layout-horizontal': menuMode === 'horizontal',
        'layout-active': menuActive,
        'layout-mobile-active': staticMenuMobileActive,
        'layout-sidebar': menuMode === 'sidebar',
        'layout-sidebar-static': menuMode === 'sidebar' && sidebarStatic,
        'layout-static-inactive': staticMenuDesktopInactive && menuMode === 'static',
        'p-ripple-disabled': !ripple
    });
    return (
        <div className={layoutClassName} onClick={onDocumentClick}>
            <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

            <div className="layout-main">
                <AppTopbar
                    items={menu}
                    menuMode={menuMode}
                    colorScheme={props.colorScheme}
                    menuActive={menuActive}
                    topbarMenuActive={topbarMenuActive}
                    activeInlineProfile={activeInlineProfile}
                    onTopbarItemClick={onTopbarItemClick}
                    onMenuButtonClick={onMenuButtonClick}
                    onSidebarMouseOver={onSidebarMouseOver}
                    onSidebarMouseLeave={onSidebarMouseLeave}
                    onToggleMenu={onToggleMenu}
                    onChangeActiveInlineMenu={onChangeActiveInlineMenu}
                    onMenuClick={onMenuClick}
                    onMenuItemClick={onMenuItemClick}
                    onRootMenuItemClick={onRootMenuItemClick}
                    resetActiveIndex={resetActiveIndex}
                />

                <AppMenu
                    model={menu}
                    onRootMenuItemClick={onRootMenuItemClick}
                    onMenuItemClick={onMenuItemClick}
                    onToggleMenu={onToggleMenu}
                    onMenuClick={onMenuClick}
                    menuMode={menuMode}
                    colorScheme={props.colorScheme}
                    menuActive={menuActive}
                    sidebarActive={sidebarActive}
                    sidebarStatic={sidebarStatic}
                    pinActive={pinActive}
                    onSidebarMouseLeave={onSidebarMouseLeave}
                    onSidebarMouseOver={onSidebarMouseOver}
                    activeInlineProfile={activeInlineProfile}
                    onChangeActiveInlineMenu={onChangeActiveInlineMenu}
                    resetActiveIndex={resetActiveIndex}
                />

                <div className="layout-main-content" style={{ position: 'initial' }}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        {/* <Route path="/" element={<Map />} /> */}
                        <Route path="/Map" element={<Map />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Properties" element={<Properties />} />
                        <Route path="/Enquiries" element={<Enquiries />} />
                        <Route path="/MortgageCalc" element={<MortgageCalc />} />
                        <Route path="/MortgageCalc" element={<MortgageCalc />} />
                        <Route path="/PropertyDetails" element={<PropertyDetails />} />
                        <Route path="/TenantRegistration" element={<TenantRegistration />} />
                        <Route path="/Logout" element={<Logout />} />
                    </Routes>
                </div>

                <AppFooter colorScheme={props.colorScheme} />
            </div>

            <AppRightMenu rightMenuActive={rightMenuActive} onRightMenuClick={onRightMenuClick} onRightMenuActiveChange={onRightMenuActiveChange} />
        </div>
    );
};

export default App;
