import { CallMovie } from './CallMovie'

export function Mvs({ movies,setMovies,id }) {
  return (
    <section className="container">
    {movies.map((mv,id)=>
      <CallMovie mv={mv} id={id} movies={movies} setMovies={setMovies}/>      
  )}
    </section>
  );
}