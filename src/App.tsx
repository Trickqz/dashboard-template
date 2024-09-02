import { ThemeProvider } from "./components/theme-provider"
import { Dashboard } from "./page/dashboard"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Dashboard />
    </ThemeProvider>
  )
}