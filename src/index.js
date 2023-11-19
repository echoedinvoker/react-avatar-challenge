import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";

const skills = [
  { skill: 'VUE', level: 'advanced', color: 'red' },
  { skill: 'HTML', level: 'intermediate', color: 'blue' },
  { skill: 'CSS', level: 'beginner', color: 'pink' },
  { skill: 'REACT', level: 'beginner', color: 'yello' },
]

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}

function Avatar() {
  return <img className='avatar' src='avatar.webp' alt='avatar' />
}

function Intro() {
  return (
    <div>
      <h1>Matt Chang</h1>
      <p>全端工程師，從硬體跳領域到軟體剛好一年，積極學習中，放假有幾天假期的話會安排去自由潛水。</p>
    </div>
  )
}

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map(skill => <Skill skillObj={skill} />)}
    </div>
  )
}

function Skill({ skillObj }) {
  return <span className='skill' style={{ backgroundColor: skillObj.color }}>
    {skillObj.skill} {
      skillObj.level === 'advanced' ? '👺' :
        (skillObj.level === 'intermediate' ? '😐' :
          (skillObj.level === 'beginner' ? '😺' : ''))
    }
  </span>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
