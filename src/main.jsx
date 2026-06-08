import { SpeedInsights } from '@vercel/speed-insights/react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/theme-provider.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
        <SpeedInsights />
    </ThemeProvider>
)
