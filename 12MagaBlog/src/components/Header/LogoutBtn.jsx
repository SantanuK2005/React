import React from "react";
import{useDispatch} from "react-redux";
import authService from "../../appwrite/config";
import {logout} from "../../store/authSlice"

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandle = async () => {
        await authService.logout().then(() => {
            // Handle successful logout
        })
        dispatch(logout());
    };

    return (
        <div>LogoutBtn</div>
    )
 }

 export default LogoutBtn;