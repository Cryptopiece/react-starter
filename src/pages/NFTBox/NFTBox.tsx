
import Topbar from "../../Components/Topbar/Topbar"
import Menu from "../../Components/Menu/Menu"
import Backdrop from "../../Components/Backdrop/Backdrop"
import React from "react";
import BoxGame from "../../Components/BoxGames/BoxGame";
function NFTBox() {
    return (
        <>
            <div className="container-xl">
            <Backdrop/>
            <Topbar />
            <div id="content">
            <div className="row g-0"> 
                        <Menu />
            <div className="col">
                <div id="mainContent">
                    <div id="gameness">
                       
                        <div>
                    <h1><BoxGame/></h1>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        </>
    )
}

export default NFTBox
