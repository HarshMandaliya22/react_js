import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { COOKIENAME } from "./api";
import { useEffect } from "react";
export default function VerifyLogin() {
    let RedirectToLogin = function () {
        navigate("/"); //send user on login screen  
    }
    let navigate = useNavigate();
    let [cookies, setCookie, removeCookie] = useCookies(COOKIENAME);
    // console.log(cookies['id']);
    //check whether cookies has id or not, if id is not in cookies it means user has yet not logged in
    useEffect(() => {
        if (cookies['id'] === undefined) {
            RedirectToLogin();
        }
    });
}