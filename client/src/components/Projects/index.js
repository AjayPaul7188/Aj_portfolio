import React from 'react';
import { motion } from 'framer-motion';
import './index.css'

const projects = [
  { title: 'Jobby App', liveDemo: 'https://ajjobapp.ccbp.tech/login', github: 'https://github.com/AjayPaul7188/Jobby-App.git', img: '/images/JobImage.jpg', intro: 'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based on Salary range and Employment type, etc' },
  { title: 'Emoji Game', liveDemo: 'https://emojigameaj.ccbp.tech/', github: 'https://github.com/AjayPaul7188/Emoji-Game.git', img: '/images/Emojiimage.jpg', intro: 'Bulit an Emoji Game where users can select unique emojies and get score card' },
  { title: 'Nxt Trends', liveDemo: 'https://ajtrnds.ccbp.tech/login', github: 'https://github.com/AjayPaul7188/nxtTrends.git', img: '/images/TrendsImage.jpg', intro: 'Created a modern e-commerce experience with a design inspired by Amazon and Flipkart.' }
];

export default function Projects() {
  return (
    <section className="section">
      <div className="glass project-section" >
        <h1 style={{color: '#8b5cf6'}}>Projects</h1>
        <div className='projects'>
            {projects.map((p, i) => (
            <motion.div className='project-tab' key={i} whileHover={{ scale: 1.05 }}>
                <img className='project-img' src={p.img} alt='Project pics' />
                <div>
                    <h3 style={{color: '#a78bfa', marginBottom: '0px'}}>{p.title}</h3>
                    <p className='para' style={{fontSize: '12px'}}>{p.intro}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <button className='btn'><a href={p.github} style={{textDecoration: 'none', color: '#000000', fontWeight: '600'}} target='_blank' rel='noopener norefferer' >GitHub</a></button>
                    <button className='btn'><a href={p.liveDemo} style={{textDecoration: 'none', color: '#000000', fontWeight: '600'}} target='_blank' rel='noopener norefferer' >Live Demo</a></button>
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}