import './section.css'
export function ReviewSection(props) {
    console.log(props.title);
    return(
        <div className='section'>
            <>
            <h5 style={{marginTop: '7px'}}>{props.title}</h5>
            //add in reviews 
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