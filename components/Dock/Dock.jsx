import {
Folder,
Terminal,
Settings,
Globe
}
from "lucide-react";


import "./dock.scss";


export default function Dock(){


const apps=[

Folder,
Terminal,
Globe,
Settings

];


return(

<div className="dock">


{
apps.map((Icon,index)=>(

<div 
className="dock-icon"
key={index}
>

<Icon/>

</div>

))
}


</div>

)

}
