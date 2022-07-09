import { MovieSection } from './movieSection';
import {ReviewSection} from './reviewSection';
import {AddReview} from './addReview';
import { movies } from '../movieData/movies';
import './movieContainer.css'


export function MovieContainer(props){
    console.log(props.value.year)
    return (
        <div className= 'container'>
            <MovieSection name='Movie' title={props.value.title} year={props.value.year} image= {props.value.image} rating= {props.value.rating}/>
            <ReviewSection name= 'Reviews'reviews= {props.value.reviews}/>
            <AddReview name = 'Add Review'/>
        </div>
    )
}