import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function GroupExample() {
  const [mydata, setData] = useState([]);

  const apiGet = () => {
    fetch("https://inshortsapi.vercel.app/news?category=all")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setData(data.data);
      });
  };

  useEffect(() => {
    apiGet();
    const interval = setInterval(() => {
      apiGet();
    }, 50000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid>
      <Row xs={1} md={3} className="g-4">
        {mydata.map((value) => {
          return (
            <>
              <Col className="container-fluid mt-4">
                <CardGroup>
                  <Card>
                    <a href={value.readMoreUrl} target="/">
                      <Card.Img
                        variant="top"
                        src={value.imageUrl}
                        height={300}
                      />
                    </a>
                    <Card.Body>
                      <a href={value.readMoreUrl}>
                        <Card.Title style={{ color: "black" }}>
                          {value.title}
                        </Card.Title>
                      </a>

                      <Card.Text style={{ color: "black" }}>
                        {value.content ? value.content.slice(0, 190) : "..."}
                        ......
                      </Card.Text>
                      <Button className="primary" href={value.readMoreUrl}>
                        Click Me
                      </Button>
                    </Card.Body>
                    <br></br>
                    <footer
                      style={{ textAlign: "right" }}
                      className="blockquote-footer"
                    >
                      Published on {value.date}, {value.time}
                    </footer>
                  </Card>
                </CardGroup>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
}

export default GroupExample;
