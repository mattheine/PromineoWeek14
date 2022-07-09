import './section.css'
import { movies } from '../movieData/movies';

export function MovieSection(props) {
    console.log(props.year)
    return(
        <div className='movie-info section'>
            <>
            <h5 style={{marginTop: '7px'}}>{props.name}</h5>
            <ul>
                <li>{props.image}</li>
                <li>Title: {props.title}</li>
                <li>Year: {props.year}</li>
                <li>Rating: {props.rating}</li>
            </ul>
            </>
        </div>
    );
}