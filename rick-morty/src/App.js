import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './components/Character';
import ButtonWrapper from './components/ui/ButtonWrapper';
import FlexWrapper from './components/ui/FlexWrapper';

function App() {

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    async function getCharacters() {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=+${currentPage}`);
      console.log(response);
      setCharacters(response.data.results);
      setPages(response.data.info.pages);
    }
    getCharacters();
  }, [currentPage])

  function handleClick(siguiente) {
    if(siguiente && currentPage <= pages) {
      setCurrentPage(currentPage + 1);
    } else if(currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // let characterList = <p>Cargando...</p>
  // if(characters) {
  //   characterList = ...
  // }

  let pagina = 'media';
  if(currentPage === 1) {
    pagina = 'primera';
  } else if(currentPage === pages) {
    pagina = 'ultima';
  }

  return (
    <div className="App">
      <ButtonWrapper page={pagina}>
        {currentPage !== 1 &&
          <button onClick={() => handleClick(false)}>Anterior</button>
        }
        {currentPage !== pages &&
          <button onClick={() => handleClick(true)}>Siguiente</button>
        }
      </ButtonWrapper>
      <FlexWrapper>
        {characters.map(character => (
        // <p>{character.name}</p>
        <Character {...character} key={character.id}/>
      ))}
      </FlexWrapper>
    </div>
  );
}

export default App;
