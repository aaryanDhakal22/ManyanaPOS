import React from "react";

const Button = (props)=>{
    return (<div className="inline">
    <button className="bg-purple-400 p-3 text-l rounded-xl outline-none active:bg-purple-600 text-white">{props.children}</button>
    </div>)
}
export default Button;