import axios from "axios";

const spellCache = new Map();

export const getSpell = async (spellName:string) => {
  if (spellCache.has(spellName)) {
    return spellCache.get(spellName);
  }

  try {
    const response = await axios.get(
      `https://www.dnd5eapi.co/api/spells/${spellName}`
    );

    const spellData = response.data;
    spellCache.set(spellName, spellData);

    return spellData;
  } catch (error) {
    console.log("Error fetching spell:", error);
    throw error;
  }
};

export const getAllSpell = async () => {
  try {
    const response = await axios.get(`https://www.dnd5eapi.co/api/spells`);
    return response.data;
  } catch (error) {
    console.log("Error fetching all spells:", error);
    throw error;
  }
};

export const getSpellByClass = async () => {
  try {
    const response = await axios.get(`https://www.dnd5eapi.co/api/classes/`);
    return response.data;
  } catch (error) {
    console.log("Error fetching spells by class:", error);
    throw error;
  }
};

export const getSpellDesc = async () => {
  try {
    const response = await getAllSpell();
    const spellList = response.results;

    const spellPromises = spellList.map(async (spell:any) => {
      const spellData = await getSpell(spell.index);
      return spellData;
    });

    const spellDesc = await axios.all(spellPromises);
    return spellDesc;
  } catch (error) {
    console.log("Error fetching spell descriptions:", error);
    throw error;
  }
};

export const getSpells = async () => {
  try {
    const response = await getAllSpell();
    const spellList = response.results;

    const spellPromises = spellList.map(async (spell:any) => {
      const spellData = await getSpell(spell.index);
      return spellData;
    });

    const spellDesc = await axios.all(spellPromises.slice(0,15));
    return spellDesc;
  } catch (error) {
    console.log("Error fetching spell descriptions:", error);
    throw error;
  }
};
