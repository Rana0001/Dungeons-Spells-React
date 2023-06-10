import React from 'react'
import image from '../static/image/wizard.png'

export default function Info() {
  return (
    <div className='bg-[#0c0c0c]'>
        <div className='grid grid-cols-1 lg:grid-cols-4 items-center justify-center text-white'>
           
            <div></div>
            <div className='w-full space-y-4 py-5'>
            <h1 className='text-4xl font-bold text-center '>Dungeons & Dragons</h1>
            <p className='text-center'>Dungeons & Dragons (commonly abbreviated as D&D or DnD) is a fantasy tabletop role-playing game (RPG) originally designed by Gary Gygax and Dave Arneson. It was first published in 1974 by Tactical Studies Rules, Inc. (TSR). The game has been published by Wizards of the Coast (now a subsidiary of Hasbro) since 1997. It was derived from miniature wargames, with a variation of the 1971 game Chainmail serving as the initial rule system. D&D's publication is commonly recognized as the beginning of modern role-playing games and the role-playing game industry.</p>
            </div>
            <div className='w-full'>
            <img src={image} alt="Dungeons & Dragons"/>
            </div>
            <div></div>
            </div>
    </div>
  )
}
