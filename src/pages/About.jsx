import React from 'react'
import { useNavigate } from 'react-router-dom'
import SplitText from '../components/SplitText'
import GlassSurface from '../components/GlassSurface'
import { GitHub, MailOutline } from '@mui/icons-material'

const About = () => {
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
      overflow: "hidden",
      fontFamily: "JetBrains Mono"
    }}>
      {/* Logo top-left */}
      <div style={{
        position: "absolute",
        top: 20,
        left: 20
      }}>
        <img src='/ducky.png' style={{ width: 50, height: 50 }} alt="Logo" />
      </div>

      {/* Icons top-right */}
      <div style={{
        position: "absolute",
        top: 20,
        right: 20,
        display: "flex",
        gap: "15px",
        alignItems: "center"
      }}>
        <MailOutline
          style={{
            fontSize: 24,
            color: "#00FF50",
            cursor: "pointer",
            transition: "transform 0.2s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          onClick={() => window.open("mailto:adam453345@gmail.com")}
        />
        <GitHub
          style={{
            fontSize: 24,
            color: "#00FF50",
            cursor: "pointer",
            transition: "transform 0.2s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          onClick={() => window.open('https://github.com/IshikDeveloper')}
        />
      </div>

      {/* Title */}
      <h1 style={{ color: "#00FF50", marginBottom: "10px" }}>
        <SplitText
          text="About Me"
          tag="span"
          color="#00FF50"
          delay={60}
          duration={2}
          ease="elastic.out(1, 0.3)"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </h1>

      {/* Description */}
      <p style={{
        color: "#00FF50",
        textAlign: "center",
        maxWidth: "650px",
        lineHeight: "1.6",
        marginBottom: "20px",
        fontSize: "16px"
      }}>
        Hi, I’m Adam — but most people online know me as <span style={{ fontWeight: "bold" }}>Ducky</span>.  
        I have a passion to be know as "the computer kid of all time" and
        I've realized in my past experiences that ill never learn using AI and i must teach myself.  
        This site is my portfolio, inspiration taken from itssharl.ee and brittanychiang.com .
      </p>

      {/* Buttons */}
      <div style={{display: "flex", flexDirection: "row", marginTop: "10px"}}>
        <GlassSurface width={"fit-content"} height={"fit-content"}>
          <button 
            style={{backgroundColor: "rgba(0,0,0,0)", border: "none", fontFamily: "JetBrains Mono", cursor: "pointer"}}
            onClick={() => navigate('/')}
          >
            Back Home
          </button>
        </GlassSurface>
        <div style={{margin: "5px"}}/>
        <GlassSurface width={"fit-content"} height={"fit-content"}>
          <button 
            style={{backgroundColor: "rgba(0,0,0,0)", border: "none", fontFamily: "JetBrains Mono", cursor: "pointer"}}
            onClick={() => navigate('/projects')}
          >
            My Projects
          </button>
        </GlassSurface>
      </div>
    </div>
  )
}

export default About
