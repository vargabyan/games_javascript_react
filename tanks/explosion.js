import React, { useState, useEffect } from "react";
import imgExplosion from "./image/explosion.png";

const Explosion = ({setShellOrBangstate})=>{
    const [explosionstate, setExplosionstate] = useState(null)
    const updatesStyle = [
        { 
            background: `url(${imgExplosion})`,
            backgroundSize: "300px",   
            backgroundPosition: "-18px -45px",
            width: "50px",
            height: "50px",
            position: "absolute",
            zIndex: 10,
        },
        { 
            background: `url(${imgExplosion})`,
            backgroundSize: "300px",   
            backgroundPosition: "-72px -16px",
            width: "50px",
            height: "50px",
            position: "absolute",
            zIndex: 10,
        },
        { 
            background: `url(${imgExplosion})`,
            backgroundSize: "300px",   
            backgroundPosition: "-128px -4px",
            width: "50px",
            height: "50px",
            position: "absolute",
            zIndex: 10,
        },
        { 
            background: `url(${imgExplosion})`,
            backgroundSize: "300px",   
            backgroundPosition: "-204px -31px",
            width: "50px",
            height: "50px",
            position: "absolute",
            zIndex: 10,
        },
        { 
            background: `url(${imgExplosion})`,
            backgroundSize: "300px",   
            backgroundPosition: "-238px -90px",
            width: "50px",
            height: "50px",
            position: "absolute",
            zIndex: 10,
        },
        { 
            background: `url(${imgExplosion})`,
            backgroundSize: "300px",   
            backgroundPosition: "-238px -150px",
            width: "50px",
            height: "50px",
            position: "absolute",
            zIndex: 10,
        },
        { 
            background: `url(${imgExplosion})`,
            backgroundSize: "300px",   
            backgroundPosition: "-188px -188px",
            width: "50px",
            height: "50px",
            position: "absolute",
            zIndex: 10,
        },
        { 
            background: `url(${imgExplosion})`,
            backgroundSize: "300px",   
            backgroundPosition: "-188px -198px",
            width: "50px",
            height: "50px",
            position: "absolute",
            zIndex: 10,
        },
        { 
            background: `url(${imgExplosion})`,
            backgroundSize: "300px",   
            backgroundPosition: "-50px -174px",
            width: "50px",
            height: "50px",
            position: "absolute",
            zIndex: 10,
        },
        { 
            background: `url(${imgExplosion})`,
            backgroundSize: "300px",   
            backgroundPosition: "-17px -109px",
            width: "50px",
            height: "50px",
            position: "absolute",
            zIndex: 10,
        },
    ]

    function changeStyle(){
        setTimeout(()=>{
            setExplosionstate(<div style={updatesStyle[0]}/>)

        }, 0)
        setTimeout(()=>{
            setExplosionstate(<div style={updatesStyle[1]}/>)

        }, 50)
        setTimeout(()=>{
            setExplosionstate(<div style={updatesStyle[2]}/>)

        }, 100)
        setTimeout(()=>{
            setExplosionstate(<div style={updatesStyle[3]}/>)

        }, 150)
        setTimeout(()=>{
            setExplosionstate(<div style={updatesStyle[4]}/>)

        }, 200)
        setTimeout(()=>{
            setExplosionstate(<div style={updatesStyle[5]}/>)

        }, 250)
        setTimeout(()=>{
            setExplosionstate(<div style={updatesStyle[6]}/>)

        }, 300)
        setTimeout(()=>{
            setExplosionstate(<div style={updatesStyle[7]}/>)

        }, 350)
        setTimeout(()=>{
            setExplosionstate(<div style={updatesStyle[8]}/>)

        }, 400)
        setTimeout(()=>{
            setExplosionstate(<div style={updatesStyle[9]}/>)

        }, 450)
        setTimeout(()=>{
            setExplosionstate(null)
            setShellOrBangstate(null)

        }, 500)
    }

    useEffect(() => {

        changeStyle()

    }, [])

    return explosionstate
}

export default Explosion