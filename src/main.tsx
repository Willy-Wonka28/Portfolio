import { createRoot } from 'react-dom/client'
import { SpeedInsights } from "@vercel/speed-insights/react"
import App from './App.tsx'
import './App.css'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
<SpeedInsights/>; 
