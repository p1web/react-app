import React from 'react';

class Pawandubey extends React.Component{

    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
        console.log(props);
    }

    render() {
        return (
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
      }
}

export default Pawandubey;