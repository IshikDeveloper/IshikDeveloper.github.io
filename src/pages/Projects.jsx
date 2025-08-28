import React from "react";
import { useNavigate } from "react-router-dom";
import { GitHub, MailOutline } from "@mui/icons-material";
import { DiCss3, DiGithub, DiHtml5, DiNodejs, DiPostgresql, DiReact } from "react-icons/di";
import { SiCreatereactapp, SiLua, SiMui, SiReactrouter, SiVite } from "react-icons/si";

import SplitText from "../components/SplitText";
import GlassSurface from "../components/GlassSurface";
import LogoLoop from "../components/LogoLoop";

const techLogos = [
  { node: <DiHtml5 color="#00FF50" />, title: "HTML5", link: "https://html.spec.whatwg.org" },
  { node: <DiCss3 color="#00FF50" />, title: "CSS3", link: "https://www.w3.org/TR/CSS/" },
  { node: <SiLua color="#00FF50" />, title: "Lua", link: "https://www.lua.org/" },
  { node: <SiCreatereactapp color="#00FF50" />, title: "CRA", link: "https://react.dev/" },
  { node: <SiVite color="#00FF50" />, title: "Vite", link: "https://vitejs.dev/" },
  { node: <DiReact color="#00FF50" />, title: "React", link: "https://react.dev/" },
  { node: <SiMui color="#00FF50" />, title: "MUI", link: "https://mui.com/" },
  { node: <SiReactrouter color="#00FF50" />, title: "React Router", link: "https://reactrouter.com/" },
  { node: <DiNodejs color="#00FF50" />, title: "NodeJS", link: "https://nodejs.org" },
  { node: <DiPostgresql color="#00FF50" />, title: "Postgres", link: "https://www.postgresql.org/" },
];

// Section title component
const SectionTitle = ({ text }) => (
  <h1 style={{ margin: "60px 0 30px 0", textAlign: "center" }}>
    <SplitText
      text={text}
      tag="span"
      color="#00FF50"
      delay={50}
      duration={1.8}
      ease="elastic.out(1, 0.3)"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
    />
  </h1>
);

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "JetBrains Mono",
        color: "#00FF50",
        background: "black",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "auto",
        paddingBottom: "80px",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(6px)",
          zIndex: 10,
        }}
      >
        <img src="/ducky.png" alt="logo" style={{ width: 50, height: 50 }} />
        <div style={{ display: "flex", gap: "20px" }}>
          <MailOutline
            style={iconStyle}
            onClick={() => window.open("mailto:adam453345@gmail.com")}
          />
          <DiGithub
            style={iconStyle}
            onClick={() => window.open("https://github.com/IshikDeveloper")}
          />
        </div>
      </header>

      {/* BODY */}
      <main style={{ marginTop: "100px", width: "100%", maxWidth: "1000px" }}>
        {/* TECH */}
        <SectionTitle text="Languages & Frameworks I Use" />
        <LogoLoop logos={techLogos} logoHeight={64} speed={250} />

        {/* CLIENTS */}
        <SectionTitle text="My Clients" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="kawkab.png"
            alt="Kawkab Client"
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onClick={() => window.open("https://kawkabgroup.com")}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* PROJECTS */}
        <SectionTitle text="My Projects" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <span style={linkStyle}>KawkabERP</span>
          <span
            style={linkStyle}
            onClick={() => window.open("https://ishikdeveloper.github.io/Litetube/")}
          >
            Litetube
          </span>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ marginTop: "60px", display: "flex", gap: "15px" }}>
        <GlassSurface width="fit-content" height="fit-content">
          <button style={btnStyle} onClick={() => navigate("/about")}>
            About Me
          </button>
        </GlassSurface>
        <GlassSurface width="fit-content" height="fit-content">
          <button style={btnStyle} onClick={() => navigate("/")}>
            Home
          </button>
        </GlassSurface>
      </footer>
    </div>
  );
};

// Styles
const iconStyle = {
  fontSize: 28,
  color: "#00FF50",
  cursor: "pointer",
  transition: "transform 0.2s ease",
};

const linkStyle = {
  color: "#00FF50",
  cursor: "pointer",
  transition: "transform 0.2s, text-shadow 0.2s",
  fontSize: "1.1rem",
};
linkStyle.onMouseEnter = (e) =>
  (e.currentTarget.style.textShadow = "0 0 8px #00FF50");
linkStyle.onMouseLeave = (e) => (e.currentTarget.style.textShadow = "none");

const btnStyle = {
  backgroundColor: "transparent",
  border: "none",
  fontFamily: "JetBrains Mono",
  color: "#00FF50",
  cursor: "pointer",
  fontSize: "1rem",
  padding: "6px 12px",
};

export default Projects;
