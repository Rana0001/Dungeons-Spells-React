import React,{useState,useEffect} from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/layout'
import LandingPage from '../pages/LandingPage'
import SpellPage from "../pages/SpellPage"
import FavoritePage from '../pages/FavoritePage'
import ViewAllSpell from '../pages/ViewAllSpell'


export default function Router() {
  const [spells, setSpells] = useState<any>([])
  const [spell,setSpell] = useState<any>([])

 return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<LandingPage spells={spells} setSpells={setSpells}/>}/>
            <Route path='/favor' element={<FavoritePage/>}/>
            <Route path='/all' element={<ViewAllSpell/>}/>
            <Route path='/spell' element={<SpellPage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

