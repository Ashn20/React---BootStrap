import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image1 from '../images/Snow.jpeg';
import Images2 from '../images/Hill.jpeg';
import Images3 from '../images/sea.jpeg';

function Cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Image1} className='img1' />
        <Card.Body>
          <Card.Title>Snow</Card.Title>
          <Card.Text>
            "Nature is full of genius, full of divinity; so that not a snowflake escapes its fashioning hand."
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Images2} className='img2' />
        <Card.Body>
          <Card.Title>Hill</Card.Title>
          <Card.Text>
            After climbing a great hill, one only finds that there are many more hills to climb.

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Images3} className='img3' />
        <Card.Body>
          <Card.Title>Sea</Card.Title>
          <Card.Text>
            “Smell the sea and feel the sky. Let your soul and spirit fly.”

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;