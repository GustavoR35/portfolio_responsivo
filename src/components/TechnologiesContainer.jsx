import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", html5:'Conhecimento Nivel 1',icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", css:'Conhecimento Nivel 1', icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", java:'Conhecimento Nivel 1', icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", node:'Conhecimento Nivel 1', icon: <DiNodejsSmall /> },
  { id: "react", name: "React", react:'Conhecimento Nivel 1', icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.html5}{tech.css}{tech.java}{tech.node}{tech.react}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
