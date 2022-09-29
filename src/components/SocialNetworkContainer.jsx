import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", url: 'https://www.linkedin.com/in/gustavo-rodrigues-b63b28210/,' , icon: <FaLinkedinIn /> },
  { name: "github", url:'https://github.com/GustavoR35' ,icon: <FaGithub /> },
  { name: "instagram",url: 'https://www.instagram.com/gustavor.n12/', icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {

  const aux = true;

  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href= {aux && `${network.url} `} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
