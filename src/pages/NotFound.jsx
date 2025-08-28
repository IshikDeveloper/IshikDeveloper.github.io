import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Logo top-left */}
      <div style={{
        position: "absolute",
        top: 20,
        left: 20
      }}>
        <img src='/ducky.png' style={{ width: 50, height: 50 }} />
      </div>

      <h1 style={{color: "#00FF50"}}>404</h1>
      <h1 style={{color: "#00FF50"}}>Not Found</h1>
      <button style={{background: 'rgba(0,0,0,0)', fontFamily: "JetBrains Mono", border: "none", borderRadius: "5px"}} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0,255,80,0.5)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(0,0,0,0)"} onClick={() => navigate('/')}>Home</button>

      </div>
  )
}

export default NotFound