import { useEffect, useState } from "react";
import { GenreResponseProps } from "../../App";
import { api } from "../../services/api";
import { Button } from "../Button/Button";

import '../../styles/global.scss';

import './sidebar.scss'

interface SideBarProps{

handleClickButton: (genreId: number) => void;
selectedGenreId: number;

}
export function SideBar({handleClickButton,selectedGenreId }: SideBarProps) {
  
  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, [selectedGenreId]);
  console.log(genres);


  
  return ( 
  
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>)
}