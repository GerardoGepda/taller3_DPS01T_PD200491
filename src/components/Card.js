import React from "react";
import './../styles/Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                {this.props.children}
            </div>
        );
    }
}

export default Card;