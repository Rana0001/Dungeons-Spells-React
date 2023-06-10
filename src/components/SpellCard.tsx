import React from "react";
import { useState, useEffect } from "react";
import search from "../static/image/magnifying-glass.png";
import { getSpellDesc } from "../services/spellServices";
import Table from "./Table";
import background from '../static/image/background.jpg'

export default function SpellCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [spells, setSpells] = useState<any>([]);

  useEffect(() => {
    const fetchDesc = async () => {
      try {
        const res = await getSpellDesc();
        setSpells(res.slice(0,15));
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
    <section className="bg-gray-100 py-8 bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${background})`}}>
      <div className="w-full">
        <div className="mx-5">
         
          <div className="flex justify-end">
            <button className="flex items-end text-[#0c0c0c] underline font-bold">
              See More {`->`}
            </button>
          </div>

          <Table spellData={spells} />
        </div>
      </div>
    </section>
  );
}
