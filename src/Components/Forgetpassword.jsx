import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Spinner, Form } from "react-bootstrap";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3002/forgot-password", { email });
      if (response.status === 200) {
        toast.success("Password reset email sent", { autoClose: 1000 });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Forgot Password</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <br />
                <Button style={{width:"250px"}} variant="danger" type="submit" block disabled={isLoading}>
                  {isLoading ? <Spinner animation="border" size="sm" /> : "Reset Password"}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
