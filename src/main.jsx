import { SpeedInsights } from '@vercel/speed-insights/react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/theme-provider.jsx'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 800,
    once: true,
    easing: "ease-in-out",
});

createRoot(document.getElementById('root')).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
        <SpeedInsights />
    </ThemeProvider>
)
