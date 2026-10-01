import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <Home />
    </div>
  )
}