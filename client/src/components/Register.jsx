import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    Lname: "",
    Fname: "",
    phone: "",
    city: "",
    email: "",
    password: "",
  });

  const addUserName = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData({ ...userData, [name]: value });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const { Fname, Lname, city, phone, email, password } = userData;
    const result = await fetch("http://localhost:8000/insert-register-data", {
      method: "Post",
      body: JSON.stringify({
        st_fname: Fname,
        st_lname: Lname,
        st_city: city,
        st_phone: phone,
        st_email: email,
        st_password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/login")
  };

  return (
    <div className="register">
     <h3>Hello User's this is Registration Page</h3>
      <Form noValidate validated={validated} method="post">
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="Fname"
              onChange={addUserName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a First name.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="Lname"
              onChange={addUserName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Last name.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Phone.no</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="number"
                placeholder="+91"
                required
                name="phone"
                onChange={addUserName}
              />
              <Form.Control.Feedback type="invalid">
                Please write a Phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              required
              name="city"
              onChange={addUserName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder=".........@gmail.com"
              required
              name="email"
              onChange={addUserName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              name="password"
              onChange={addUserName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Password.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Submit form
        </Button>
      </Form>
    </div>
  );
};

export default Register;
