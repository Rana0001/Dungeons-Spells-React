import React from "react";
import { Link } from "react-router-dom";
import Table from "./Table";
import background from '../static/image/background.jpg'

 const SpellCard: React.FC<{spells:any}>=({spells})=> {
  return (
    <section className="bg-gray-100 py-8 bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${background})`}}>
      <div className="w-full">
        <div className="mx-5">
         
          <div className="flex justify-end">
            <Link to="/all"><button className="flex items-end text-[#0c0c0c] underline font-bold">
              See More {`->`}
            </button></Link>
          </div>

          <Table spellData={spells} />
        </div>
      </div>
    </section>
  );
}

export default SpellCard