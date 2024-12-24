import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Entry from './Component/Entry'
import FirstScreen from './Component/FirstScreen'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/login" element={<Entry />} />
      </Routes>
    </Router>
  )
}

export default App
