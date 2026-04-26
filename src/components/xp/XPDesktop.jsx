import { useEffect, useState } from 'react';
import XPWindow from './XPWindow';
import { javaProjects, profile, snakeCode, socialLinks } from '../common/data';

const icons = [
  'About Me',
  'Java Games',
  'LinkedIn',
  'GitHub',
  'Instagram',
  'Facebook',
  'Contact Me'
];

const socialMap = {
  LinkedIn: socialLinks.linkedin,
  GitHub: socialLinks.github,
  Instagram: socialLinks.instagram,
  Facebook: socialLinks.facebook
};

function Clock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="xp-clock">{time}</div>;
}

export default function XPDesktop() {
  const [activeWindow, setActiveWindow] = useState(null);
  const [showSnake, setShowSnake] = useState(false);

  const openIcon = (icon) => {
    if (icon === 'About Me') setActiveWindow('about');
    if (icon === 'Java Games') setActiveWindow('java');
    if (icon === 'Contact Me') setActiveWindow('contact');
  };

  return (
    <div className="xp-desktop">
      <div className="xp-icons-column">
        {icons.map((icon) => {
          if (socialMap[icon]) {
            return (
              <a key={icon} className="xp-icon xp-icon-link" href={socialMap[icon]} target="_blank" rel="noopener noreferrer">
                <div className="xp-icon-image" />
                <span>{icon}</span>
              </a>
            );
          }

          return (
            <button type="button" key={icon} className="xp-icon" onDoubleClick={() => openIcon(icon)} onClick={() => openIcon(icon)}>
              <div className="xp-icon-image" />
              <span>{icon}</span>
            </button>
          );
        })}
      </div>

      {activeWindow === 'about' && (
        <XPWindow title="About Me" onClose={() => setActiveWindow(null)}>
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
          <p><strong>Skills:</strong> {profile.skills.join(', ')}</p>
          <button className="xp-action">Resume</button>
        </XPWindow>
      )}

      {activeWindow === 'java' && (
        <XPWindow title="Java Games" onClose={() => { setActiveWindow(null); setShowSnake(false); }} width={640}>
          {!showSnake ? (
            <ul>
              {javaProjects.map((project) => (
                <li key={project.name}>
                  {project.type === 'snake' ? (
                    <button type="button" className="xp-link-btn" onClick={() => setShowSnake(true)}>{project.name}</button>
                  ) : (
                    project.name
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <section>
              <h3>Snake Game</h3>
              <p>Classic snake implemented in Java with keyboard controls and score tracking.</p>
              <h4>Java Source Code</h4>
              <pre>{snakeCode}</pre>
              <h4>Preview</h4>
              <div className="xp-preview-box">GIF/Video/CheerpJ container placeholder</div>
              <button className="xp-action" type="button" onClick={() => setShowSnake(false)}>Back</button>
            </section>
          )}
        </XPWindow>
      )}

      {activeWindow === 'contact' && (
        <XPWindow title="Contact Me" onClose={() => setActiveWindow(null)} width={380}>
          <p>Email: {profile.email}</p>
          <button
            className="xp-action"
            type="button"
            onClick={() => navigator.clipboard?.writeText(profile.email)}
          >
            Copy Email
          </button>
        </XPWindow>
      )}

      <div className="xp-taskbar">
        <button type="button" className="xp-start">Start</button>
        <Clock />
      </div>
    </div>
  );
}
