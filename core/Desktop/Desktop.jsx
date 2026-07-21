import MenuBar from "../../components/MenuBar/MenuBar";
import Dock from "../../components/Dock/Dock";
import WindowManager from "../WindowManager/WindowManager";

import "./desktop.scss";


export default function Desktop(){

    return (
        <div className="desktop">

            <MenuBar/>

            <WindowManager/>

            <Dock/>

        </div>
    )
}
