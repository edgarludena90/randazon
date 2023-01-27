
import { Link } from "react-router-dom";
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';


const RestaurantCard = ({ restaurant }) => {

  return (
    <MDBCard className='align-items-center' shadow='5' border='dark'>
      <Link className="link" to={`/restaurants/${restaurant.id}`}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='square border border-dark border-3 rounded-4 my-4'src={restaurant.image_url} alt='...' />
        {/* <a>
          <div className='mask' style={{ backgroundColor: '#EA80FC' }}></div>
        </a> */}
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{restaurant.name}</MDBCardTitle>
        <MDBCardText>
        {restaurant.review}
        </MDBCardText>
        <MDBBtn href='#'>Reviews/Ratings</MDBBtn>
      </MDBCardBody>
      </Link>
    </MDBCard>
  );
}

export default RestaurantCard;