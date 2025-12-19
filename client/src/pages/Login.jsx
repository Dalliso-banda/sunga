import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card, Col, Row } from "react-bootstrap";
import FormPageStyles from "../styles/FormPage.jsx";
import axios from "axios";
import { useUser } from "../contexts/UserAuthContext.jsx";

const styles = FormPageStyles();

const isValidIdentifier = (value) => {
  const emailRegex = /^\S+@\S+\.\S+$/;

  const phoneRegex = /^\+?[\d\s-]{8,20}$/;

  if (emailRegex.test(value) || phoneRegex.test(value)) {
    return true;
  }
  return "Please enter a valid email address or phone number.";
};

export default function Login() {
  const [serverResponse, setServerResponse] = React.useState("");
  const { login } = useUser();

  useEffect(() => {
    document.title = "Login - Sunga";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("/api/auth/login", data)
      .then((response) => {
        console.log("hit");
        login(response.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setServerResponse("Invalid credentials");
        } else {
          setServerResponse("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <div style={styles.pageBackground}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card className="shadow-lg">
              <Card.Header className="text-center">
                <h2 style={styles.logoText}>SUNGA</h2>
                <p className="text-muted mb-0">Lender Login</p>
              </Card.Header>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Card.Body>
                  <Form.Group className="mb-3" controlId="formIdentifier">
                    <Form.Label>Email or Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter email or phone number"
                      {...register("identifier", {
                        required: "Email or Phone Number is required.",

                        validate: isValidIdentifier,
                      })}
                      isInvalid={!!errors.identifier}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.identifier?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required.",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters.",
                        },
                      })}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <p className=" text-danger">{serverResponse}</p>
                  <Button
                    className="w-100"
                    type="submit"
                    style={styles.primaryButton}
                  >
                    Log In
                  </Button>
                </Card.Body>
              </Form>

              <Card.Footer className="text-center text-muted">
                <a
                  href="/signup"
                  style={{
                    textDecoration: "none",
                    color: styles.logoText.color,
                  }}
                >
                  do not have an account ? create one
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
