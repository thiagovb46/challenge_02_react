import { useEffect, useState } from 'react';

import { api } from './services/api';

import './styles/global.scss';



import { SideBar } from './components/SideBar/SideBar';
import { Content } from './components/Content/Content';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     
     <SideBar handleClickButton={handleClickButton} selectedGenreId={selectedGenreId}/>
     <Content selectedGenre={selectedGenre} selectedGenreId = {selectedGenreId}/>
     
    </div>
  )
}