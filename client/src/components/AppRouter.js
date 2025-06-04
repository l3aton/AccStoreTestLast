import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes.js";
import { SHOP_ROUTE } from "../utils/consts.js";
import { Context } from "../index.js";
import DevicePage from '../pages/DevicePage.js'
import FullDevicePage from "../pages/FullDevicePage.js";

const AppRouter = () => {
    const {user} = useContext(Context);
    return(
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} Component={Component} exact/>
        )}
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} Component={Component} exact/>
        )}
        <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
        <Route path="/smartphones" element={<DevicePage />} />
        <Route path="/household" element={<DevicePage />} />
        <Route path="/householdAppliances" element={<DevicePage />} />
        <Route path="/tools" element={<DevicePage />} />
        <Route path="/sport" element={<DevicePage />} />
        <Route path="/sales" element={<DevicePage />} />
        <Route path="/itempage" element={<FullDevicePage />} />

        </Routes>
    )
}

export default AppRouter;