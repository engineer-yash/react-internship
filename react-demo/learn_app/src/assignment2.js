import {Button,Row,Col,Card,CardGroup,Container} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

import {useState,useEffect} from "react";

function Demo(){
    const [mydata,setData] = useState([]);

    const apiFetching=()=>{
        fetch("https://inshorts.me/news/topics/science")
        .then((response)=>response.json())
        .then((data)=>{
            setData(data.data.articles);
            
        })
    }

    useEffect(()=>{
        apiFetching();
        const interval = setInterval(()=>{apiFetching()},50000);
        return () => clearInterval(interval);
    },[]);

    return(
        <Container fluid>
            <Row xs={1} md={3} className="g-4">
                {
                    mydata.map((value)=>{
                        return(
                            <>
                            <Col className="container-fluid mt-4">
                <CardGroup>
                <Card style={{ width: '18rem' }}>
                <a href={value.shortenedUrl} target="/">
      <Card.Img variant="top" src={value.imageUrl}  height={280}/></a>
      <Card.Body>
        <Card.Title>{value.title}</Card.Title>
        <Card.Text>
          {value.content.slice(0, 190)}.....
        </Card.Text>
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

                            </>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Demo;