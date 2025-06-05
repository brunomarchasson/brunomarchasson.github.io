import { createRoot } from 'react-dom/client';
import { Resume } from './Resume';
import resumeData from './storyResume.json';
import '../style.css';
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Resume {...resumeData} />);
