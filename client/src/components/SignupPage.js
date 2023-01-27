import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
}
from 'mdb-react-ui-kit'

function Signup({ user, setUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [name, setName] = useState('')
    const [image_url, setImage] = useState('')

    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        if (password === passwordConfirmation){
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
              username,
              password,
              password_confirmation: passwordConfirmation,
              name,
              image_url}),
        })
            .then(res => {
              if (res.ok) {
                res.json().then(newUser => {
                  setUser(newUser)
                })
              }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
          })
        }else setErrors(['Passwords must match!'])
}

    return (
        <div>
            {user ? (
                <div>
                    <p>You are logged in as {user.name}</p>
                </div>
            )
                : (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: '#B2EBF2',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Create Account</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput  onChange={(e) => setName(e.target.value)}
                                value={name} wrapperClass='mb-4' label='name' id='name' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput onChange={(e) => setUsername(e.target.value)}
                                value={username} wrapperClass='mb-4' label='username' id='username'/>
              <MDBInput onChange={(e) => setPassword(e.target.value)}
                                                    value={password} wrapperClass='mb-4' label='password' id='password' type='password' />
              <MDBInput onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                    value={passwordConfirmation} wrapperClass='mb-4' label='password confirmation' id='password_confirmation' type='password' />
             <MDBInput onChange={(e) => setImage(e.target.value)}
                                value={image_url} wrapperClass='mb-4' label='Profile Picture URL' id='image_url' type='text'/>

              

              <MDBBtn type="submit" className='w-100 mb-4' size='md'>Signup</MDBBtn>

              <div className="text-center">


              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
                        </form>
                    </div>)
            }</div>
    )
}
export default Signup;