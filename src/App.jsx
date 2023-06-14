import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contacto from './Contacto'
import Beer from './Beer'
import PageNotFound from './PageNotFound'
import { routes } from './utils/routes'



function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contacto/>}/>
        <Route path={routes.beer} element={<Beer/>}/>
        <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App


