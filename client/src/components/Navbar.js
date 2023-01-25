import {Container, Navbar, Nav} from 'react-bootstrap';


const Navigation = ({ user, onLogout, onLogin }) => {
  
  function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then((user) => onLogout(user))
    }



    return (

        <>
      <Navbar bg="dark" variant="dark">
        <Container>
           <Navbar.Brand className="chinchorro" href="/">Chinchorro</Navbar.Brand>
           <Nav className="me-auto">
           <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/restaurants">Restaurants</Nav.Link>
              {user ?
                <Nav.Link className="user-nav" href="/Login" onClick={handleLogout} >Logout</Nav.Link> : 
                <Nav.Link className="user-nav" href="/Login" >Login</Nav.Link>
                } 
              <Nav.Link href="/signup">Signup</Nav.Link>
           <Nav.Link className="user-nae" href="/User">User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
    )
}
export default Navigation;