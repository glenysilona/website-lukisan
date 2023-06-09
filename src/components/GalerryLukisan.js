import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import poto1 from '../assets/gallery/poto1.jpg';
import poto2 from '../assets/gallery/poto2.jpg';
import poto3 from '../assets/gallery/poto3.jpg';


const GalerryLukisan = () => {
  return (
    <div className="d-flex justify-content-around" id='gallery'>
      <Card style={{ width: '18rem' }}>
      <img src={poto1} alt='lukisan.com' className="w-100"></img>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Guernica Karya Pablo Picasso</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
          <Button variant="primary">Lihat Selengkapnya</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <img src={poto2} alt='lukisan.com' className="w-100"></img>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
          <Button variant="primary">Lihat Selengkapnya</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <img src={poto3} alt='lukisan.com' className="w-100"></img>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>The Starry Night Karya Vincent van Gogh</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
          <Button variant="primary">Lihat Selengkapnya</Button>
        </Card.Body>
      </Card>

     
    </div>
  )
}

export default GalerryLukisan; 