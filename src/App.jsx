import useScreenMode from './hooks/useScreenMode';
import XPDesktop from './components/xp/XPDesktop';
import IOSPhone from './components/ios/IOSPhone';

export default function App() {
  const mode = useScreenMode();
  return mode === 'xp' ? <XPDesktop /> : <IOSPhone />;
}
