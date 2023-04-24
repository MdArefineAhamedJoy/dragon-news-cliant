import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookmark, FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const {
    _id,
    image_url,
    details,
    thumbnail_url,
    author,
    title,
    total_view,
    rating,
    others_info,
  } = news;
  console.log(author);
  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex align-items-center gap-2">
        <Image
          variant="top"
          className=""
          style={{ width: "50px" }}
          src={author?.img}
          roundedCircle
        />
        <div className="flex-grow-1">
          <p className="mb-0">
            <small> {author?.name}</small>
          </p>
          <p>
            {" "}
            <small>
              {" "}
              {moment(author?.published_date).format("l")} {}{" "}
            </small>
          </p>
        </div>
        book shared
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)} ...{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-danger"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span className="ms-1">{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2" />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
