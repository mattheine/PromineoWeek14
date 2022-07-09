import './section.css'
export function ReviewSection(props) {
    return(
        <div className='section'>
            <>
            <h5 style={{marginTop: '7px'}}>{props.name}</h5>
            {props.reviews}
            
            </>
        </div>
    );
}