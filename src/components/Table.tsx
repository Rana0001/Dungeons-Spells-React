
import React,{useState,useEffect} from 'react';
import image from '../static/image/1a.png';
import '../static/css/Table.css'


const SpellTable: React.FC<{spellData:any}>=({spellData}) => {
  const [collapsedSpells, setCollapsedSpells] = useState<boolean[]>(new Array(spellData.length).fill(false));

  const toggleCollapse = (index: number) => {
    const updatedSpells = [...collapsedSpells];
    updatedSpells[index] = !updatedSpells[index];
    
    setCollapsedSpells(updatedSpells);
    console.log(collapsedSpells)
  };


  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between mb-4 mt-8 table-heading text-center">
  
        <div className="w-1/6 font-semibold">Level</div>
        <div className="w-1/6 font-semibold">Name</div>
        <div className="w-1/6 font-semibold">Casting Time</div>
        <div className="w-1/6 font-semibold">Duration</div>
        <div className="w-1/6 font-semibold">Range/Area</div>
        <div className="w-1/6 font-semibold">Attack/Save</div>
        <div className="w-1/6 font-semibold">Damage/Effect</div>
        <div className='w-1/6'></div>
      </div>
      {spellData ? spellData.map((spell:any,index:number) => (
  
        <div className="listing bg-cover mt-5 py-3 z-50" key={spell.index} style={{backgroundImage: `url(${image})`, backgroundRepeat:`no-repeat`, }}>
          <div className="info flex flex-row justify-between items-center text-center py-4 -z-50">

            <div className="w-1/6">{spell.level}</div>
            <div className="w-1/6">{spell.name}</div>
            <div className="w-1/6">{spell.casting_time}</div>
            <div className="w-1/6">{spell.duration}</div>
            <div className="w-1/6">{spell.range}</div>
            <div className="w-1/6">{spell.attack_type ? spell.attack_type : 'N/A'}</div>
            <div className="w-1/6">{spell.damage ? spell.damage.damage_type.name : 'N/A'}</div>
            <div className='w-1/6'><button onClick={()=>toggleCollapse(index)}><i className="fa-solid fa-circle-plus fa-xl"></i>{collapsedSpells[index] ? 'Expand' : 'Collapse'}</button></div>
          </div>
                  {/* Collapse content */}
        {collapsedSpells[index] && (
          <div className='container'>
            <div className="px-4 py-2 border-t-2 grid grid-cols-4 gap-4 rounded-b-2xl">
             <div className='mx-3 py-3'>
                <div className="font-bold">Level</div>
                <span>{spell.level}</span>
             </div>
             
             <div className='mx-3 py-3'>
                <div className="font-bold">Casting Time</div>
                <span>{spell.casting_time}</span>
             </div>
             <div className='mx-3 py-3'>
                <div className="font-bold">Range/Area</div>
                <span>{spell.range}</span>
             </div>
              <div className='mx-3 py-3'>
                <div className="font-bold">Components</div>
                <span>{spell.components.join(", ")}</span>
              </div>
              <div className='mx-3 py-3'>
                <div className="font-bold">Duration</div>
                <span>{spell.duration}</span>
             </div>
             
             <div className='mx-3 py-3'>
                <div className="font-bold">School</div>
                <span>{spell.school? spell.school.name : 'N/A'}</span>
             </div>
             <div className='mx-3 py-3'>
                <div className="font-bold">Attack/Save</div>
                <span>{spell.attack_type ? spell.attack_type : 'N/A'}</span>
             </div>
              <div className='mx-3 py-3'>
                <div className="font-bold">Damage/Effect</div>
                <span>{spell.damage ? spell.damage.damage_type.name : 'N/A'}</span>
              </div>
              
            </div>
            <div className='w-full'>
              <hr className=" bg-[#f02424] mx-2"/>
            </div>
            <article className='my-5 mx-4'>
            {spell.desc}
            <br/>
            
        </article>
        <p className='mx-4'><span className='italic font-bold'>At Higher Levels. </span>{spell.higher_level}</p>
          <div className='flex py-2'>
            <div className='w-1/2'>
              <div className='mx-3 py-3'>
                <div><button className='bg-[#f02424] px-2 py-2 text-white rounded-sm'>View More</button></div>

              </div>
            </div>
          </div>
            </div>
          )}     
        </div>
        
      )): <p>Loading.......</p>}
    </div>
  );
};

export default SpellTable;
