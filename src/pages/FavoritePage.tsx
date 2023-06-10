'use client';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'flowbite-react';
import { faHeart as faHeartF,faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import errorImage from '../static/image/notfound.jpg'

export default function CardWithActionButton() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const [isFavorite, setIsFavorite] = useState(false);


  const handleRemoveFromFavorites = (spell:any) => {
    const favorite = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = favorite.filter((fav:any) => fav.name !== spell.name);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(false);
    window.location.reload()
  };
  if (favorites.length === 0) {
    return (
      <div className="container mx-auto text-center py-5">
        <img src={errorImage} alt="Error" className="w-64 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">No Favorite Items Found</h1>
        <p className="text-gray-700">You haven't added any spells to your favorites yet.</p>
      </div>
    );
  }
  return (
    <div className='flex flex-wrap items-center justify-center py-5'> 
    {favorites.map((spell:any,index:any) =>(
    <Card key={index} className="max-w-sm m-2" imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="https://www.dndbeyond.com/content/1-0-2517-0/skins/waterdeep/images/og-images/og-spells.png">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {spell.name}
        </p>
      </h5>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <p>
          Level: {spell.level}
        </p>
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <p>
          Components: {spell.components.join(", ")}
        </p>
      </p>
      <p className="text-sm text-gray-600  dark:text-gray-400">
        <p>
          School: {spell.school.name}
        </p>
      </p>
      <p className="font-sm text-gray-600 dark:text-gray-400">
        <p>
          Casting Time: {spell.casting_time}
        </p>
      </p>

     {spell.damage? <p className="text-sm text-gray-600 dark:text-gray-400">
        <p>
          Damage: {spell.damage.damage_type?.name}
        </p>
      </p> :<p className="text-sm text-gray-600 dark:text-gray-400">
        <p> 
          Damage: N\A
        </p>
      </p>}

      <p className="font-sm text-gray-600 dark:text-gray-400">
        <p>
          Duration: {spell.duration}
        </p>
      </p>

      
      <Link to="/spell" state={{data:spell}}><Button className='w-full transform bg-primary-800 hover:bg-primary-800 hover:scale-105'>
          View More <FontAwesomeIcon icon={faArrowRightLong}  />
      </Button></Link>
      <button className='transform text-red-700 hover:scale-105' onClick={()=> handleRemoveFromFavorites(spell)}>
        <p>
        <FontAwesomeIcon icon={faHeartF} style={{ color: "#ff0a2f" }} size='xl'/> Remove From Favorite
        </p>
      </button>
    </Card>))}
    </div>
  )
}


