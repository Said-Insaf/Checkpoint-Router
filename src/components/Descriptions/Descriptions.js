import React from "react";
import { Link } from "react-router-dom";
const Descriptions = () => {
  // Normalment si je travaille go Back par la méthode history, il faut mettre un props dans les parentheses de const descriptions
  // const movie = props.location.state.movie ;
  // const history = props.history;
  return (
    <div>
      {/* {console.log("hello")} */}
      <h2>
        Présentation générale du film Date de sortie. Réalisateur, producteur,
        acteurs principaux .Lieu et époque où se déroule l'histoire. Succès et
        critiques.
      </h2>
      <Link to="/"> Go Back </Link>
      {/* <button onClick={() => history.goBack()}>Go Back</button> */}
    </div>
  );
};

export default Descriptions;
