import Home from "./pages/Home"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Songs from "./pages/Songs"
import Albums from "./pages/Albums"
import Artists from "./pages/Artists"
import Genres from "./pages/Genres"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/genres" element={<Genres />} />
      </Routes>
    </Router>
  )
}

export default App
