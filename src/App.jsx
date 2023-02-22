import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './screens/HomePage'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
