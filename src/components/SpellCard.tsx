import React from "react";
import { useState, useEffect } from "react";
import search from "../static/image/magnifying-glass.png";
import { getAllSpell, getSpellDesc } from "../services/spellServices";
import Table from "./Table";

export default function SpellCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [spells, setSpells] = useState<any>([]);

  useEffect(() => {
    const fetchDesc = async () => {
      try {
        const res = await getSpellDesc();
        setSpells(res);
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };
    fetchDesc();
  }, [spells]);

  const handleSearch = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
  };

  return (
    <section className="bg-gray-100 py-8 ">
      <div className="w-full">
        <div className="mx-5">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="pl-10 pr-4 py-3 rounded-lg w-full"
                onChange={(e) => setSearchTerm(e.target.value)}
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
            <button
              className="ml-4 bg-[#f02424] hover:transform hover:scale-105 text-white px-4 py-2 rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-800">Top 15 Spells</h2>
            <button className="flex items-center text-[#f02424] font-bold">
              See More {`->`}
            </button>
          </div>

          <Table spellData={spells} />
        </div>
      </div>
    </section>
  );
}
