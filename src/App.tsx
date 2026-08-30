import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import About from './pages/About.tsx'
import Home from './pages/Home.tsx'
import Project from './pages/Project.tsx'
import Projets from './pages/Projets.tsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="projets-professionnels"
          element={<Projets category="pro" />}
        />
        <Route path="projets-fictifs" element={<Projets category="fictif" />} />
        <Route path="projets/:slug" element={<Project />} />
        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
