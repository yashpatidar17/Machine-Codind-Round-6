import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Restaurant } from './Pages/Res/Restaurant';
function App() {


  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/restaurant/:resID" element={<Restaurant/>}/>
        </Routes>
    </div>
  )
}

export default App
