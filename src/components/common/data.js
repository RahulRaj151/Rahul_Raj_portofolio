export const profile = {
  name: 'Rahul Raj',
  bio: 'Frontend-focused developer who builds nostalgic UI experiences and playful projects.',
  skills: ['React', 'JavaScript', 'Java', 'CSS', 'UI Engineering'],
  email: 'rahulraj.dev@example.com',
  resumeUrl: '#'
};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/'
};

export const javaProjects = [
  { name: 'Snake Game', type: 'snake' },
  { name: 'Library Management System', type: 'project' },
  { name: 'Tic-Tac-Toe (Java Swing)', type: 'project' }
];

export const snakeCode = `public class SnakeGame {
  public static void main(String[] args) {
    GameFrame frame = new GameFrame();
    frame.start();
  }

  static class GameFrame {
    void start() {
      System.out.println(\"Snake game running...\");
    }
  }
}`;
