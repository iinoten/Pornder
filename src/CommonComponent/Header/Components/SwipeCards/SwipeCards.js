import React, {Component} from 'react';
import Swipeable from "react-swipy"
import './SwipeCards.css'
import Card from '../Card/Card';

const wrapperStyles = {position: "relative", width: "250px", height: "250px"};
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
};

class SwipeCards extends Component{
  constructor(){
    super();
    this.state = {
      cards: [
        'one', 'two', 'three'
      ]
    }
  }
  remove = () =>
    this.setState(({cards}) => ({
      cards: cards.slice(1, cards.length),
    }));
  render(){
    const {cards} = this.state;
    return(
      <div>
        <div style={wrapperStyles}>
          {this.state.cards.length > 0 ? (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({left, right}) => (
                  <div style={actionsStyles}>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <div className="Swipe-card"><Card img_src='https://ci.phncdn.com/videos/201509/07/56826471/original/(m=eGNdHgaaaa)(mh=UkbvhbbsBP4jLw54)6.jpg'>{cards[0]}</Card></div>
              </Swipeable>
              { this.state.cards.length > 1 && cards[1]} }
            </div>
          ) : (
            <div className="Swipe-card"><Card>No more cards</Card></div>
          )}
        </div>
      </div>
    );
  }
}

export default SwipeCards;