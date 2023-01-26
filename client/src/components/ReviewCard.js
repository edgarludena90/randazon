import React, { useState } from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const ReviewCard = ({ review, user, onDelete, onUpdate }) => {
  const [editReview, setEditReview] = useState({
    comment: '',
    rating: '',
  });

  const [click, setClick] = useState(false);

  function handleDelete() {
    fetch(`/reviews/${review.id}`, {
      method: 'DELETE',

      headers: { 'Content-Type': 'application/json' },
    }).then(() => onDelete(review));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: 'PATCH',

      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...editReview,
      }),
    })
      .then((r) => r.json())
      .then((updatedReview) => onUpdate(updatedReview));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditReview({ ...editReview, [name]: value });
  };

  function handleClick() {
    setClick(!click);
  }

  if (user) {
    return (
      <MDBCard background="info" className="text-white my-3">
        <MDBListGroup>
          <MDBListGroupItem>{review.user.name}</MDBListGroupItem>
          <MDBListGroupItem>Rating: {review.rating}</MDBListGroupItem>
          <MDBListGroupItem>Comment: {review.comment}</MDBListGroupItem>
        </MDBListGroup>

        {user.id === review.user.id ? (
          <button onClick={handleClick}>Edit Review</button>
        ) : (
          ''
        )}
        {user.id === review.user.id ? (
          <button onClick={handleDelete}>Delete Review</button>
        ) : (
          ''
        )}

        {click ? (
          <form onSubmit={handleSubmit}>
            <label>Comments:</label>
            <input
              type="text"
              name="comment"
              value={editReview.comment}
              placeholder="Leave Comments"
              onChange={handleChange}
            ></input>
            <label>Rating:</label>
            <select
              name="rating"
              value={editReview.rating}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <button>Update Review</button>
          </form>
        ) : (
          ''
        )}
      </MDBCard>
    );
  } else {
    return (
      <MDBCard flush background="info" className="text-body my-3">
        <MDBListGroup>
          <MDBListGroupItem>{review.user.name}</MDBListGroupItem>
          <MDBListGroupItem>Rating: {review.rating}</MDBListGroupItem>
          <MDBListGroupItem>Comment: {review.comment}</MDBListGroupItem>
        </MDBListGroup>
      </MDBCard>
    );
  }
};
export default ReviewCard;
