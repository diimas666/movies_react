function Movie(props) {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;
  return (
    <div className="card movie">
        <div id={id} className="card-image waves-effect waves-block waves-light">
            {
                poster  === 'N/A' ? (<img className="activator" src={poster} />)  : (<img className="activator" src={poster} />)
            }
            
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title} <i className="material-icons right">more_vert</i></span>
            <p>{year}<span className="right">{type}</span></p>
        </div>
    </div>
  )
}
export { Movie };
