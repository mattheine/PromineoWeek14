import { MovieSection } from './movieSection';
import {ReviewSection} from './reviewSection';
import {AddReview} from './addReview';
import { movies } from '../movieData/movies';
import './movieContainer.css'


export function MovieContainer(props){
    console.log(movies)
    return (
        <div className= 'container'>
            <MovieSection title='Movie' data=''/>
            <ReviewSection title= 'Reviews'/>
            <AddReview title = 'Add Review'/>
        </div>
    )
}