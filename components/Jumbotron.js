import {
  Row,
  Col,
  Jumbotron
} from 'reactstrap';
import config from '../services/config';


export default (props) => (
  <div>
    <a href={config.photosGallery} style={{ textDecoration: 'none' }}>
    <Jumbotron>
      <Row>
        <Col>
          <h1>The Heading.</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>A short description</p>
        </Col>
      </Row>
    </Jumbotron>
    <style jsx>{`
          @media (min-width: 767px) {
            h1 {
              font-size: 4rem
            }
            p {
              font-size: 1.5rem;
              margin-bottom: 0;
            }
            :global(.jumbotron) {
              margin-bottom: 2rem;
            }
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 3rem
            }
            p {
              font-size: 1rem;
              margin-bottom: 0;
            }
            :global(.jumbotron) {
              margin-bottom: 0.5rem;
            }
          }
        `}</style>
      </a>
  </div>

)
