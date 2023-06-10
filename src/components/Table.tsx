import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import image from '../static/image/1a.png';
import '../static/css/Table.css';

const SpellTable: React.FC<{ spellData: any }> = ({ spellData }) => {
  const [collapsedSpells, setCollapsedSpells] = useState(new Array(spellData.length).fill(false));
  const [currentPage, setCurrentPage] = useState(1);
  const spellsPerPage = 10;

  const toggleCollapse = (index: any) => {
    const updatedSpells = [...collapsedSpells];
    updatedSpells[index] = !updatedSpells[index];
  
    setCollapsedSpells(updatedSpells);
  };
  
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastSpell = currentPage * spellsPerPage;
  const indexOfFirstSpell = indexOfLastSpell - spellsPerPage;
  const currentSpells = spellData.slice(indexOfFirstSpell, indexOfLastSpell);

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between mb-4 mt-8 table-heading text-center">
        <div className="w-1/6 font-semibold">Level</div>
        <div className="w-1/6 font-semibold">Name</div>
        <div className="w-1/6 font-semibold hidden xs:block">Casting Time</div>
        <div className="w-1/6 font-semibold hidden xs:block">Duration</div>
        <div className="w-1/6 font-semibold hidden md:block">Range/Area</div>
        <div className="w-1/6 font-semibold hidden md:block">Attack/Save</div>
        <div className="w-1/6 font-semibold hidden md:block">Damage/Effect</div>
        <div className="w-1/6"></div>
      </div>
      {currentSpells.map((spell: any, index: any) => (
        <div className="listing bg-cover  md:my-5 py-3 z-50 opacity-80" key={spell.index} style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat' }}>
          <div className="info flex flex-row justify-between items-center text-center md:py-4 -z-50">
            <div className="w-1/6">{spell.level}</div>
            <div className="w-1/6">{spell.name}</div>
            <div className="w-1/6 hidden xs:block">{spell.casting_time}</div>
            <div className="w-1/6 hidden xs:block">{spell.duration}</div>
            <div className="w-1/6 hidden md:block">{spell.range}</div>
            <div className="w-1/6 hidden md:block">{spell.attack_type ? spell.attack_type : 'N/A'}</div>
            <div className="w-1/6 hidden md:block">{spell.damage ? spell.damage.damage_type?.name : 'N/A'}</div>
            <div className="w-1/6">
              <button onClick={() => toggleCollapse(index)}>
                <i className="fa-solid fa-circle-plus fa-xl"></i>
                {collapsedSpells[index] ? 'Expand' : 'Collapse'}
              </button>
            </div>
          </div>
          {/* Collapse content */}
          {collapsedSpells[index] && (
            <div className="container">
              <div className="px-4 py-2 border-t-2 grid xs:grid-cols-4 grid-cols-2 gap-4 rounded-b-2xl">
                <div className="mx-3 py-3">
                  <div className="font-bold">Level</div>
                  <span>{spell.level}</span>
                </div>
                <div className="mx-3 py-3">
                  <div className="font-bold">Casting Time</div>
                  <span>{spell.casting_time}</span>
                </div>
                <div className="mx-3 py-3">
                  <div className="font-bold">Range/Area</div>
                  <span>{spell.range}</span>
                </div>
                <div className="mx-3 py-3">
                  <div className="font-bold">Components</div>
                  <span>{spell.components.join(', ')}</span>
                </div>
                <div className="mx-3 py-3">
                  <div className="font-bold">Duration</div>
                  <span>{spell.duration}</span>
                </div>
                <div className="mx-3 py-3">
                  <div className="font-bold">School</div>
                  <span>{spell.school ? spell.school.name : 'N/A'}</span>
                </div>
                <div className="mx-3 py-3">
                  <div className="font-bold">Attack/Save</div>
                  <span>{spell.attack_type ? spell.attack_type : 'N/A'}</span>
                </div>
                <div className="mx-3 py-3">
                  <div className="font-bold">Damage/Effect</div>
                  <span>{spell.damage ? spell.damage.damage_type?.name : 'N/A'}</span>
                </div>
              </div>
              <div className="w-full">
                <hr className="bg-[#f02424] mx-2" />
              </div>
              <article className="my-5 mx-4">{spell.desc}</article>
              <p className="mx-4">
                <span className="italic font-bold">At Higher Levels. </span>
                {spell.higher_level}
              </p>
              <div className="flex py-2">
                <div className="w-1/2">
                  <div className="mx-3 py-3">
                    <div>
                      <button className="bg-[#f02424] px-2 py-2 text-white rounded-sm">View More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Pagination */}
      {spellData.length > spellsPerPage && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(spellData.length / spellsPerPage) }).map((_, index) => (
            <button
              key={index}
              className={`mx-1 px-2 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

SpellTable.propTypes = {
  spellData: PropTypes.array.isRequired,
};

export default SpellTable;
