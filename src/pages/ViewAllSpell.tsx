import React, { useEffect, useState } from 'react';
import { getSpellDesc } from '../services/spellServices';
import Table from '../components/Table';
import background from '../static/image/background.jpg';

const ViewAllSpell: React.FC = () => {
  const [spells, setSpells] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchSpells = async () => {
    try {
      const res = await getSpellDesc();
      setSpells(res);
    } catch (error) {
      console.error('Error fetching spells:', error);
    }
  };

  useEffect(() => {
    fetchSpells();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredSpells = spells.filter((spell: any) =>
    spell.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      className="bg-gray-100 py-8 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex items-center justify-end my-4 mr-2">
        <div className="relative">
          <input
            type="search"
            placeholder="Search a spell"
            className="pl-10 pr-4 py-3 rounded-lg w-full"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 17a8 8 0 100-16A8 8 0 009 17zm1-7H8v2h2v-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <button className="ml-4 bg-[#f02424] hover:transform hover:scale-105 text-white px-4 py-2 rounded-lg">
          Search
        </button>
      </div>
      <Table spellData={filteredSpells} />
    </section>
  );
};

export default ViewAllSpell;
