import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Jobby App', github: 'https://github.com/AjayPaul7188/Jobby-App.git' },
  { title: 'Emoji Game', github: 'https://github.com/AjayPaul7188/Emoji-Game.git' },
  { title: 'Nxt Trends', github: 'https://github.com/AjayPaul7188/nxtTrends.git' }
];

export default function Projects() {
  return (
    <section className="section">
      <div className="glass">
        <h2>Projects</h2>
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }}>
            <h3>{p.title}</h3>
            <a href={p.github}>GitHub</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}