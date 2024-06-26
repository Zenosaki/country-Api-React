import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import InfoPage from './pages/Info.jsx';



export default function App() {
  return (
    <div>
    <BrowserRouter basename="/country-Api-React">
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='/Info/:countryN' element={<InfoPage/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}
