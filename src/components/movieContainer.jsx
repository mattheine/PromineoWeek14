import { MovieSection } from './movieSection';
import {ReviewSection} from './reviewSection';
import {AddReview} from './addReview';
import './movieContainer.css'


export function MovieContainer(props){
    console.log(props);
    return (
        <div className= 'container'>
            <MovieSection title='Movie' data={props.value.movies} />
            <ReviewSection title= 'Reviews'/>
            <AddReview title = 'Add Review'/>
        </div>
    )
}