import React from "react";
import Button from "./button_component";

const Navbar= ()=>{
    return (
    <>
    <div className="flex flex-col justify-between">
        <Button>Home</Button>
        <Button>Counter</Button>
        <Button>Pickup</Button>
        <Button>Dispatch</Button>
        <Button>Manager</Button>
        <Button>Employee</Button>
        <Button>Others</Button>
    </div>
    </>
    )
}

export default Navbar;