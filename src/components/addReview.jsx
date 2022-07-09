import './section.css'
export function AddReview(props) {
  return (
    <div className="section">
      <>
      <h5 style={{marginTop: '7px'}}>{props.title}</h5>
        <div>
            <span>How was the movie?</span>
        <select>
          <option value="fruit">Not Worth Watching</option>
          <option value="vegetable">Watch It!</option>
          <option value="meat">Cancel Plans, Watch Now!</option>
        </select>
        </div>
        {/* TODO: this value should only be a number */}
        <div>
            <span>Leave your opinion here</span>
        <input placeholder="Personal Review" />
        </div>
        <button>Submit</button>
      </>
    </div>
  );
}
