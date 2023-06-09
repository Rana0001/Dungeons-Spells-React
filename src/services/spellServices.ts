import axios from "axios";

export const getSpell = async (spellName: string) => {
    const response = await axios.get(
        `https://www.dnd5eapi.co/api/spells/${spellName}`
    );
    return response.data;
    }


export const getAllSpell = async()=>{
    const response = await axios.get(
        `https://www.dnd5eapi.co/api/spells`
    );
    return response.data;
}

export const getSpellByClass = async () => {
    const response = await axios.get(
        `https://www.dnd5eapi.co/api/classes/`
    );
    return response.data;
    }

export const getSpellDesc = async()=>{
    const response = await getAllSpell()
    const spellList = response.results
    // add 
    const spellPromises = spellList.map(async (spell: any) => {
        const spellData = await getSpell(spell.index);
        return spellData;
      });
      
      const spellDesc = await Promise.all(spellPromises.slice(0,15));
      return spellDesc;
}