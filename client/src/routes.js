import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGESTRATION_ROUTE, SHOP_ROUTE,FULLDEVICEPAGE_ROUTE } from './utils/consts.js';
import Admin from './pages/Admin.js';
import Basket from './pages/Basket.js';
import Shop from './pages/Shop.js';
import Auth from './pages/Auth.js';
import DevicePage from './pages/DevicePage.js';
import LoginPage from "./pages/LoginPage.js";
import FullDevicePage from './pages/FullDevicePage.js';


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGESTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: FULLDEVICEPAGE_ROUTE,
        Component: FullDevicePage
    }
]