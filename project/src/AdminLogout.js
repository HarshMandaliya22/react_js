import VerifyLogin from './VerifyLogin'
import {useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'

export default function AdminLogout()
{

    VerifyLogin();
    let navigate = useNavigate();
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    removeCookie("id");
    navigate("/");
    return (
        <></>
    );
}