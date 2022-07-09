import './section.css'
export function MovieSection(props) {
    console.log(props.title);
    return(
        <div className='movie-info section'>
            <>
            <h5 style={{marginTop: '7px'}}>{props.title}</h5>
            //add row items of title, star review, year, and image
            <ul>
                {
                    props.data && (
                        props.data.map((row, i) =>(
                            <li key={i}>
                            <span>Title: {row.title}</span>
                            </li>
                        ))
                    )
                }
                
            </ul>
            </>
        </div>
    );
}