import React, { useState } from 'react'
import {
	Form,
	FormControl,
	Button,
	Stack,
	Row,
	Col,
	Nav,
} from "react-bootstrap"


function EditUser({user}){
  const [username, setUsername] = useState({ username: user.username })
  const [password, setPassword] = useState({password: ""})
  const [image_url, setImage] = useState({image_url: user.image_url})

    function handleChange(e) {
        if (e.target.name === "username") {
            setUsername({ ...username, [e.target.name]: e.target.value })
        } else if ( e.target.name === "password") {
            setPassword({ ...password, [e.target.name]: e.target.value })
        } else if (e.target.name === "image_url"){
    setImage({...image_url,[e.target.name]:e.target.value})
        }
}

   function handleUpdate(obj) {
   fetch(`/users/${user.id}`, {
     method: "PATCH",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(obj),
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data)
       
     })
 }

 return(
  <Form>
    <Form.Group>
        <>
            <Form.Label>Username</Form.Label>
                <FormControl
                    type="text"
                    name="username"
                    value={username.username}
                    onChange={handleChange}
                />
        </>
            <Button variant="secondary" onClick={() => handleUpdate(username)}>
                Change Username
            </Button>
	</Form.Group>
	<>
	<Form.Group>
		<Form.Label>New Password</Form.Label>
			<Form.Control
				type="password"
				name="password"
				onChange={handleChange}
				value={password.password}
			/>
	</Form.Group>
	</>
			<Button variant="secondary" onClick={() => handleUpdate(password)}>
				Change Password
			</Button>
	<Form.Group controlId="formFile" className="mb-3">
		<Form.Label>Profile Picture</Form.Label>
		<Form.Control
			type="text"
			name="image_url"
      value={image_url.image_url}
			onChange={handleChange}
		/>
	</Form.Group>
			<Stack gap={1}>
			<Button variant="secondary" onClick={() => handleUpdate(image_url)}>
				Change profile picture
			</Button>
				<Nav.Link href="/">
			<Button variant="outline-secondary">Cancel</Button>
				</Nav.Link>
                </Stack>
    </Form>
    )
}
export default EditUser
