import React from 'react'
import SplitText from '../components/SplitText'
import RotatingText from '../components/RotatingText'
import GlassSurface from '../components/GlassSurface'
import { GitHub, MailOutline } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
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


      {/* Combined Greeting */}
      <h1 style={{ 
        margin: 0, 
        display: 'flex', 
        alignItems: 'baseline', 
        gap: '0.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <RotatingText texts={["Hello", "Hey", "Hi", "Greetings"]} color="#00FF50"/>
        <SplitText
          text=", I'm Adam!"
          tag='span'
          color='#00FF50'
          delay={70}
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

      <SplitText
        text="But you can call me Ducky."
        tag='span'
        color='#00FF50'
        delay={70}
        duration={2}
        ease="elastic.out(1, 0.3)"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <div style={{display: "flex", flexDirection: "row"}}>
          <GlassSurface width={"fit-content"} height={"fit-content"}>
            <button style={{backgroundColor: "rgba(0,0,0,0)", border: "none", fontFamily: "JetBrains Mono",}} onClick={() => navigate("/about")}><span>About Me</span></button>
          </GlassSurface>
          <div style={{margin: "5px"}}/>
          <GlassSurface width={"fit-content"} height={"fit-content"}>
            <button style={{backgroundColor: "rgba(0,0,0,0)", border: "none", fontFamily: "JetBrains Mono",}} onClick={() => navigate("/projects")}><span>My Projects and Clients</span></button>
          </GlassSurface>
      </div>
    </div>
  )
}

export default Home