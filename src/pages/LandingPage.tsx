import React,{useEffect} from 'react'
import ParallaxPage from '../components/Parallex'
import SpellCard from '../components/SpellCard'
import Info from '../components/Info'
import { getSpells } from '../services/spellServices'

const LandingPage: React.FC<{spells:any, setSpells:any}> = ({spells, setSpells}) =>{
  const fetchSpells = async () => {
    try {
      const res = await getSpells();
      setSpells(res);
      console.log(res)
    } catch (error) {
      console.error('Error fetching spells:', error);
    }
  };

  useEffect(() => {
    fetchSpells()
  })


  return (
    <>
<ParallaxPage/>
<Info/>
<SpellCard spells={spells} />
    </>
  )
}

export default LandingPage