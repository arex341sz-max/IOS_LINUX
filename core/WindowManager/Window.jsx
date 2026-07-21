import {Rnd} from "react-rnd";

import "./window.scss";


export default function Window({title,children}){


return(

<Rnd

default={{
x:250,
y:120,
width:500,
height:300
}}

minWidth={300}
minHeight={200}

>


<div className="window">


<div className="window-header">


<div className="buttons">

<span className="close"/>
<span className="min"/>
<span className="max"/>


</div>


{title}


</div>



<div className="window-body">

{children}

</div>


</div>


</Rnd>

)

}
