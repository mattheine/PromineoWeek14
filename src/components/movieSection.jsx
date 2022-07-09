import './section.css'
import { movies } from '../movieData/movies';

export function MovieSection(props) {
    return(
        <div className='movie-info section'>
            <>
            <h5 style={{marginTop: '7px'}}>{props.title}</h5>
            //add row items of title, star review, year, and image
           
            </>
        </div>
    );
}