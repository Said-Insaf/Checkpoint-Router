import React from "react";
import { Card, Button } from "react-bootstrap";
import MovieRating from "../Rating/Rating";
import ModalAddMovie from "../ModalAddMovie/ModalAddMovie";
import { Link } from "react-router-dom";

function MovieCard({ movie, isaddMovie, addMovie }) {
  console.log(movie);
  return isaddMovie ? (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <ModalAddMovie addMovie={addMovie} />
      </Card.Body>
    </Card>
  ) : (
    <Card style={{ width: "18rem", margin: "2%" }}>
      <Card.Img variant="top" src={movie.img} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          <MovieRating movieRating={movie.rating} isMovieRating={true} />
          {/* <Link to ={{"/Descriptions" state : {movie : movie} }}> */}
          <Link to="/Descriptions">
            <Button variant="primary">Description</Button>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default MovieCard;
