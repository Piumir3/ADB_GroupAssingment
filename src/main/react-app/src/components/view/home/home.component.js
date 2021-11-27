import React, { Component } from "react";
import { Row, Button, Col, Container, Card, CardDeck } from "react-bootstrap";
import AuthService from "../../../services/auth.service";
import axios from "axios";
import { withRouter } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
      loading: false,
    };
  }


  componentDidMount() {
    document.title = "Home";
    const currentUser = AuthService.getCurrentUser();

    const userId = currentUser.id;
    if (userId) {
      this.findUserById(userId);
      this.setState({
        currentUser: currentUser,
        showAdminBoard: currentUser.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  findUserById = (userId) => {
    axios
      .get("http://localhost:8080/api/auth/" + userId)
      .then((response) => {
        if (response.data != null) {



          this.setState({ loading: true });
        }
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  };

  render() {
    const { currentUser} = this.state;
    const mTop = {
      marginTop: "40px",
      border: "2px",
    };

    return (
      <div className="container" style={mTop}>
        {this.state.loading ? (
          <Container>
            <Row>
              <Col>
                <Container>
                  <CardDeck>
                    {currentUser && (
                      <Card
                        bg="outline-dark"
                        border="outline-dark"
                        style={{
                          color: "outline-dark"
                        }}
                        className="text-center p-3"
                      >
                        <blockquote className="blockquote mb-0 card-body">
                          <h2>
                            Network Packet Analyzer
                          </h2>
                        </blockquote>
                      </Card>
                    )}
                  </CardDeck>
                </Container>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Container>
                <CardDeck>
                  {currentUser && (
                    <Card
                      style={{
                        border: "1px",
                        borderStyle: "solid",
                        width: "18rem",
                      }}
                    >
                      <Card.Body>
                        <Card.Title> Log Files </Card.Title> <br />
                        <Card.Text>View and Download Log Files</Card.Text> <br />
                        <br />
                        <Button href="/home/backup">
                          Download log files{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  )}
                  {currentUser && (
                      <Card
                          style={{
                            border: "1px",
                            borderStyle: "solid",
                            width: "18rem",
                          }}
                      >
                        <Card.Body>
                          <Card.Title> Logs Visualization </Card.Title> <br />
                          <Card.Text>
                            Analyze and view logs using charts{" "}
                          </Card.Text>
                          <br />
                          <Button href="home/chart">
                            Logs visualization{" "}
                          </Button>
                        </Card.Body>
                      </Card>
                  )}
                  {currentUser && (
                    <Card
                      style={{
                        border: "1px",
                        borderStyle: "solid",
                        width: "18rem",
                      }}
                    >
                      <Card.Body>
                        <Card.Title> Customer Request Form </Card.Title> <br />
                        <Card.Text>
                          Collect customer requests details{" "}
                        </Card.Text>
                        <br /> <br />
                        <Button href="/home/customerform">
                          Request Form{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  )}
                </CardDeck>
              </Container>
            </Row>
            <br /> <br />
            <Row>
              <Container>
                <CardDeck>
                  {currentUser && (
                    <Card
                      style={{
                        border: "1px",
                        borderStyle: "solid",
                        width: "18rem",
                      }}
                    >
                      <Card.Body>
                        <Card.Title> Customer Request Details </Card.Title>
                        <br />
                        <Card.Text>View customer request details </Card.Text>
                        <br /> <br />
                        <Button href="home/request">
                          view request details{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  )}
                  {currentUser && (
                    <Card
                      style={{
                        border: "1px",
                        borderStyle: "solid",
                        width: "18rem",
                      }}
                    >
                      <Card.Body>
                        <Card.Title> User Management </Card.Title>
                        <br />
                        <Card.Text>
                          View users details and manage users{" "}
                        </Card.Text>
                        <br /> <br />
                        <Button href="home/userdetails">
                          view users{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  )}
                  {currentUser && (
                    <Card
                      style={{
                        border: "1px",
                        borderStyle: "solid",
                        width: "18rem",
                      }}
                    >
                      <Card.Body>
                        <Card.Title> View User Login History </Card.Title>{" "}
                        <br />
                        <Card.Text>You can view user login history.</Card.Text>
                        <br /> <br />
                        <Button href="/home/user_history">
                          View Login History{" "}
                        </Button>
                      </Card.Body>
                    </Card>
                  )}
                </CardDeck>
              </Container>
            </Row>
          </Container>
        ) : (
          <div className="text-center" style={{ marginTop: "20%" }}>
            <HashLoader color={"#292b2c"} loading={true} size={150} />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Home);
