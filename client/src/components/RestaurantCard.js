
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBCardGroup,
  MDBCol
} from 'mdb-react-ui-kit';


const RestaurantCard = ({ restaurant }) => {



    return (
        <div className="carder">
            

                <MDBCardGroup>
            <MDBCol sm='4'>
                    <MDBCard className='align-items-center' shadow='0' border='dark' background='secondary'>
        <Link className="link" to={`/restaurants/${restaurant.id}`}>
        <MDBCardImage src={restaurant.image_url} alt='...' position='top' />
     <MDBCardBody>
          <MDBCardTitle>{restaurant.name}</MDBCardTitle>
          <MDBCardText>
            {restaurant.review}
          </MDBCardText>
                        </MDBCardBody>
                        </Link>
             </MDBCard>
        </MDBCol>
        </MDBCardGroup>
            
        </div>

    )
}

export default RestaurantCard;