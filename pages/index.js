
import {
  Row, Col
} from 'reactstrap';
import config from '../services/config';
import Layout from '../components/Layout.js'
import Jumbotron from '../components/Jumbotron';
import FileUpload from '../components/FileUpload';

const { title, description, url } = config;

const Index = () => {
  return (
    <Layout title={title} description={description} url={url}>
      <Jumbotron />
      <Row>
        <Col>
          <FileUpload/>
        </Col>
      </Row>
    </Layout>
  )
};

export default Index
