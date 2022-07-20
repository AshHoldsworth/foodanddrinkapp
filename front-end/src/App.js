import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header';
import { Home } from './components/Home'
import { FoodPage } from './components/FoodPage'
import { DrinkPage } from './components/DrinkPage'


export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<FoodPage />} />
            <Route path="/drink" element={<DrinkPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}
