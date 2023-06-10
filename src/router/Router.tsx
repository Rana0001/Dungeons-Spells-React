import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/layout'
import LandingPage from '../pages/LandingPage'
import SpellPage from "../pages/SpellPage"
import FavoritePage from '../pages/FavoritePage'
import ViewAllSpell from '../pages/ViewAllSpell'

export default function Router() {
 return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="/spell" element={<SpellPage/>}/>
            <Route path='/favor' element={<FavoritePage/>}/>
            <Route path='/all' element={<ViewAllSpell/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

