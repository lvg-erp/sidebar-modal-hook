
import React, { useEffect, useState }  from 'react';

interface IProps{
    movie: string
    onRemove: ()=>void
}

function FavoriteMovies() {
    
    const [movies, setMovies] = useState([{ name: "Heat in street" }]);
    const [newMovie, setNewMovie] = useState("");
  
    const add = (movie: { name: string; }) => setMovies([...movies, movie]);
  
    const remove = (index: number ) => {
      setMovies([...movies.slice(0, index), ...movies.slice(index + 1)]);
    };
  
    const handleAddClick = () => {
      if (newMovie === "") {
        return;
      }
      add({ name: newMovie });
      setNewMovie("");
    };
  
    return (
      <>
        <div className="movies text-lg font-semibold place-content-evenly">
          {movies.map((movie, index) => {
            return <Movie movie={movie.name} onRemove={() => remove(index)} />;
          })}
        </div>
        <div className="add-movie ml-2 w-64 space-x-4">
          <input 
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                       focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                       dark:focus:ring-blue-500 dark:focus:border-blue-500 '
            type="text"
            value={newMovie}
            onChange={event => setNewMovie(event.target.value)}
          />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded max-w-xs text-center' 
                                onClick={handleAddClick}>
                  Add movie
          </button>
        </div>
      </>
    );
  }
  
  function Movie({ movie, onRemove }: IProps) {
    return (
      <div className="movie ml-8 space-x-4">
        <span>{movie}</span>
        <button className='mt-6 bg-red-500 hover:bg-red-700 text-white font-bold 
                          py-2 px-4 border border-red-700 rounded-full 
                          max-w-xs text-center' onClick={onRemove}>
              X
        </button>
      </div>
    );
  }


function App() {

    // const [name, setName] = useState('Dilantha');
    // const [age, setAge] = useState(28);
    // const [renderCount, setRenderCount] = useState(0);
  
    // useEffect(() => {
    //   setRenderCount(renderCount + 1);
    // }, [name]);
  
    return (
        <div className="App ">
            <h2 className='text-xl font-semibold ml-8'>My favorite movies</h2>
             <FavoriteMovies />
        </div>
    )

}

export default App;
