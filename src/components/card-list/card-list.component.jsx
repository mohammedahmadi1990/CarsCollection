import { Component } from "react";
import Card from '../card/card-component';
import './card-list.styles.css';

class CardList extends Component{

    render(){
        const {cars} = this.props;
        return ( 
            <div className="card-list">
                { cars.map(car => {
                    return (
                    <Card car={car}/>
                )}) }
            </div>
        )
        
    }
}

export default CardList;