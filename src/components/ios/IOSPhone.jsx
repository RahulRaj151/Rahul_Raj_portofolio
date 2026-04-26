import { useState } from 'react';
import { javaProjects, profile, snakeCode, socialLinks } from '../common/data';

const homeIcons = [
  { label: 'About', screen: 'about' },
  { label: 'Java Games', screen: 'java' },
  { label: 'Snake Game', screen: 'snake' },
  { label: 'Instagram', link: socialLinks.instagram },
  { label: 'Facebook', link: socialLinks.facebook }
];

const dockIcons = [
  { label: 'GitHub', link: socialLinks.github },
  { label: 'LinkedIn', link: socialLinks.linkedin },
  { label: 'Email', mailto: `mailto:${profile.email}` }
];

export default function IOSPhone() {
  const [screen, setScreen] = useState('home');

  const openLink = (url) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <div className="ios-shell">
      <div className={`ios-slider ios-screen-${screen}`}>
        <section className="ios-page ios-home">
          <div className="ios-grid">
            {homeIcons.map((icon) => (
              <button
                type="button"
                key={icon.label}
                className="ios-icon"
                onClick={() => {
                  if (icon.link) openLink(icon.link);
                  else setScreen(icon.screen);
                }}
              >
                <span className="ios-icon-shine" />
                <span>{icon.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="ios-page">
          {screen !== 'home' && (
            <>
              <button className="ios-back" type="button" onClick={() => setScreen('home')}>Back</button>
              {screen === 'about' && (
                <div>
                  <h2>{profile.name}</h2>
                  <p>{profile.bio}</p>
                  <p><strong>Skills:</strong> {profile.skills.join(', ')}</p>
                </div>
              )}
              {screen === 'java' && (
                <div>
                  <h2>Java Games</h2>
                  <ul>
                    {javaProjects.map((project) => (
                      <li key={project.name}>{project.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              {screen === 'snake' && (
                <div>
                  <h2>Snake Game</h2>
                  <p>Classic Java snake with keyboard controls.</p>
                  <pre>{snakeCode}</pre>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      <div className="ios-dock">
        {dockIcons.map((icon) => (
          <button
            className="ios-dock-icon"
            type="button"
            key={icon.label}
            onClick={() => {
              if (icon.link) openLink(icon.link);
              if (icon.mailto) window.location.href = icon.mailto;
            }}
          >
            <span>{icon.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
