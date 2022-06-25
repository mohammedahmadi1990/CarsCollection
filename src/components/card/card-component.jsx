import './card.styles.css';

const Card =({car})=>{
    const {id, name, email} = car;

    return ( 
    <div className="card-container">
        <img alt={`car: ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h2>{name}</h2>
        <p>{email}</p>  
    </div>
    )        
}

export default Card;