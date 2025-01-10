// AboutMe.js
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <p>
          Hi, I’m Darren Sim, a NUS undergraduate in <em>Computer Science</em>, and a  passionate and driven individual with a foundational background in <strong> backend & frontend</strong> languages.  
          I'm striving to achieve a mastery in full stack development, using personal projects to develop my skillset, starting with this website!
        </p>
        <p>
          I thrive on challenges that push me to grow 
          both professionally and personally. 
        </p>
        <p>
          Beyond academics, I enjoy spending time polishing my cullinary Skills, which have taught me the importance of precision and well planned executions. I’m always eager to connect with like-minded individuals and explore new opportunities to 
          make a positive impact.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
