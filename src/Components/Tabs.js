import React, {useState} from 'react';
import './Tabs.css';
import './Experience'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div className="tab-headers">
        <button
          className={`tab-link ${activeTab === 'section1' ? 'active' : ''}`}
          onClick={() => handleTabClick('section1')}
        >
        Experiences
        </button>
        <button
          className={`tab-link ${activeTab === 'section2' ? 'active' : ''}`}
          onClick={() => handleTabClick('section2')}
        >
        Education
        </button>
        <button
          className={`tab-link ${activeTab === 'section3' ? 'active' : ''}`}
          onClick={() => handleTabClick('section3')}
        >
        Skills
        </button>
        <button
          className={`tab-link ${activeTab === 'section4' ? 'active' : ''}`}
          onClick={() => handleTabClick('section4')}
        >
        Projects
        </button>
      </div>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'section1' ? 'active' : ''}`}>
          <div class="body1">
          <h2>Private Mathematics Tuition Teacher</h2>
          <ul>
            <li>Organized a highly targeted 3-week A-Level crash course, resulting in a stark grade improvement from U to C in 
            students </li>
            <li>Implemented gamified teaching strategies (Anki) powered by machine learning (ML) algorithms to enhance learner 
            engagement and memory recall </li>
            <li>Utilized adaptive learning platforms and virtual whiteboard technology to tailor lessons for diverse student needs. </li>
          </ul>
          <h2>Geography Relief Teacher, Anglican High School </h2>
          <ul>
            <li> Delivered lessons using educational technology tools (Pear Deck), impacting over 120 students with improved mid
            term results (median score: A) </li>
            <li> Designed over 20 interactive digital lesson materials and 3 practice papers, enhancing learning outcomes. </li>
            <li> Adapted teaching approaches using data-driven insights to address class-specific strengths and weaknesses</li>
            <li> Maintained seamless learning experiences by leveraging centralized LMS platforms during urgent substitutions.</li>
            <li>Enhanced critical thinking and engagement through digital mapping tools and interactive simulations.</li>
          </ul>
          <h2>Air Warfare Officer (AWO) / Air Defence Weapons (ADW) </h2>
          <ul>
            <li> Spearheaded deployment training sessions in teams of 4 or 8, ensuring effective mission readiness and response 
            capability with zero safety breach incidents</li>
            <li>Strategically orchestrated deployment for more than 10 training plans </li>
            <li>Managed unexpected adaptations to ensure and warranted 90% mission success </li>
            <li>Oversaw flight discipline and punctuality, contributing to the overall efficiency and effectiveness of the unit consisting 
            over 30 people </li>
            <li>Initiated 3 flight cohesion parties to enhance team morale and foster a positive working environment</li>
            <li> Orchestrated and executed the Advanced Training Package with 0 accidents </li>
            <li>Oversaw 5 innovation projects and initiated 1 3-D printing project, making significant contributions and improvements 
            to the innovation department within the unit </li>
          </ul>
          </div>
        </div>
        <div className={`tab-pane ${activeTab === 'section2' ? 'active' : ''}`}>
          <h2>National University of Singapore</h2>
          <p>Bachelor of Computing in Computer Science, Second Major in Statistics</p>
          <h2>Victoria Junior College</h2>
          <p>This is the content for Section 1.2.</p>
          <h2>Anglican High School</h2>
          <p>This is the content for Section 1.3.</p>
        </div>
        <div className={`tab-pane ${activeTab === 'section3' ? 'active' : ''}`}>
        <h2>Languages</h2>
          <p>Fluent in English and Mandarin, both spoken and written</p>
          <h2>Frontend Programming</h2>
          <p>HTML, CSS, JAVASCRIPT, REACT </p>
          <h2>Backend Programming</h2>
          <p>PYTHON, JAVA, C </p>
        </div>
        <div className={`tab-pane ${activeTab === 'section4' ? 'active' : ''}`}>
        <h2>Upcoming!</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;