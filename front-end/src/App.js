import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header';
import { Home } from './components/Home'
import { FoodPage } from './components/FoodPage'
import { DrinkPage } from './components/DrinkPage'
import { useState } from 'react';


export const App = () => {
  const [foodList, setFoodList] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<FoodPage foodList={foodList} setFoodList={setFoodList} />} />
            <Route path="/drink" element={<DrinkPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}
