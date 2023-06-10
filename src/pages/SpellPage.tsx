import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Toast } from 'flowbite-react';
import { } from '@fortawesome/free-regular-svg-icons';
import { faFlask,faBook, faCircleCheck,faCircleXmark,faAtom,faVial, faChalkboardUser,faArrowUpRightDots,faSchoolFlag,faStopwatch,faClock } from '@fortawesome/free-solid-svg-icons';
import errorImage from '../static/image/notfound.jpg'
import radar from '../static/image/radar.png'
import spellImage from "../static/image/spell.jpg"

const SpellPage: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const spell = state && state.data;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isToggleS, setToggleS] = useState(false);
  const [isToggleF, setToggleF] = useState(false);

  useEffect(() => {
    // Check if the spell is already in favorites
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isSpellFavorite = favorites.some((fav:any) => fav.name === spell.name);
    setIsFavorite(isSpellFavorite);
  }, [spell]);

const handleAddToFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const updatedFavorites = [...favorites, spell];
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  setIsFavorite(true);
  setToggleS(true);
  setTimeout(() => {
    setToggleS(false);
  }
  , 3000);

};
  const handleRemoveFromFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = favorites.filter((fav:any) => fav.name !== spell.name);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(false);
    setToggleF(true);
    setTimeout(() => {
      setToggleF(false);
    }
    , 3000);
  };

  if (!spell) {
    return null; // Add appropriate loading or error handling here
  }

  if (spell.length === 0) {
    return (
      <div className="container mx-auto text-center py-5">
        <img src={errorImage} alt="Error" className="w-64 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">No Spell Items Found</h1>
        <p className="text-gray-700">Somethings! might wrong here.</p>

      </div>
    );
  }
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="spell"
            className="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200"
            src={spellImage}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest"><FontAwesomeIcon icon={faFlask} size="lg" style={{color: "#ee2f2f",}} /> Spell Name</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{spell.name}</h1>
            <div className="flex mb-4">
              
            </div>
            <p className="leading-relaxed italic">
              {spell.desc}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3"><FontAwesomeIcon icon={faArrowUpRightDots} size="lg" style={{color: "#ee2f2f",}} /> Spell Level:</span>
                {spell.level}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3"><FontAwesomeIcon icon={faAtom} size="lg" style={{color: "#ee2f2f",}} /> Components:</span>
                {spell.components.join(", ")}
              </div>
            </div>
            <div className="flex flex-col mb-5 gap-3 border-b-2">
              
            <span className="title-sm text-gray-900">
              <span className="mr-3"><FontAwesomeIcon icon={faSchoolFlag} size="lg" style={{color: "#ee2f2f",}}/> School:</span>{spell.school.name}
              </span>
              <span className="title-sm text-gray-900">
              <span className="mr-3"><FontAwesomeIcon icon={faChalkboardUser} size="lg" style={{color: "#ee2f2f",}} /> Classes:</span>{spell.classes.map((item:any) => item.name).join(", ")}
              </span>
              <span className="title-sm text-gray-900">
              <span className="mr-3"><FontAwesomeIcon icon={faStopwatch} size="lg" style={{color: "#ee2f2f",}} /> Casting Time:</span>{spell.casting_time}
              </span>
              <span className="title-sm text-gray-900">
              <span className="mr-3"><img src={radar} className='inline' alt='radar' /> Range:</span>{spell.range}
              </span>
              <span className="title-sm text-gray-900">
              <span className="mr-3"><FontAwesomeIcon icon={faClock} size="lg" style={{color: "#ee2f2f",}}/> Duration:</span>{spell.duration}
              </span>
              <span className="title-sm text-gray-900 mb-5">
              <span className="mr-3"><FontAwesomeIcon icon={faVial} size="lg" style={{color: "#ee2f2f",}} /> Material:</span>{spell.material}
              </span>
            </div>
            <div className='border-b-2 mb-5 pb-3'>
              <span className="title-sm text-gray-900 mb-5">
              <span className="mr-3 font-bold italic"><FontAwesomeIcon icon={faBook} size="lg" style={{color: "#ee2f2f",}} /> In Higher Level:</span>{spell.higher_level}
              </span>
            </div>
           {!isFavorite ? <div className="flex">
              <button className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={handleAddToFavorites}>
                Add to Favorite
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>:<div className="flex">
              <button className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={handleRemoveFromFavorites}>
                Remove From Favorite
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>}
        
        {isToggleF? <Toast className='fixed top-2 right-0'>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        <FontAwesomeIcon icon={faCircleXmark} style={{color: "#c72323",}} />
        </div>
        <div className="ml-3 text-sm font-normal">
          Spell Removed Successfully.
        </div>
        <Toast.Toggle />
      </Toast>:""}

      {isToggleS? <Toast className='fixed top-2 right-0'>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#2fc72f",}} />
        </div>
        <div className="ml-3 text-sm font-normal">
          Spell Added Successfully.
        </div>
        <Toast.Toggle />
      </Toast>:""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpellPage;
