import { Button, Row, Col, Card, CardGroup, Container, ListGroup } from "react-bootstrap";

import { useState, useEffect } from "react";

function Demo() {
  const [mydata, setData] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const apiFetching = () => {
    fetch(`https://inshorts.me/news/topics/${selectedCategory}`)
  .then((response) => response.json())
      .then((data) => {
        setData(data.data.articles);
      });
  };
      useEffect(() => {
        apiFetching();
        const interval = setInterval(() => {
          apiFetching();
        }, 50000); // 50 seconds
        return () => clearInterval(interval);
            }, [selectedCategory]);

      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      };
  return (
    <Container fluid>
      <div className="mb-3">
      <center>
      <Button variant="primary" onClick={() => handleCategoryChange("all")}>
          All
        </Button>{" "}
        <Button variant="primary" onClick={() => handleCategoryChange("science")}>
          Science
        </Button>{" "}
        <Button variant="primary" onClick={() => handleCategoryChange("sports")}>
          Sports
        </Button>{" "}
        <Button variant="primary" onClick={() => handleCategoryChange("world")}>
          Global
        </Button>{" "}
        </center>
      </div>
      <Row xs={1} md={3} className="g-4">
        {mydata.map((value) => (
          <Col className="container-fluid mt-4" key={value.id}>
            <CardGroup>
              <Card style={{ width: '18rem' }}>
                <a href={value.shortenedUrl} target="/">
                  <Card.Img variant="top" src={value.imageUrl} height={280} />
                </a>
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.content.slice(0, 190)}.....</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Author: {value.authorName}</ListGroup.Item>
                  <ListGroup.Item>Category: {value.categoryNames}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button className="primary" href={value.sourceUrl} target="/">Read More</Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Demo;
