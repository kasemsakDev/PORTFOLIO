import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Row, Col } from 'reactstrap';

const Cv = () => {
  return (
    <BaseLayout>
          <BasePage
              title="My Experiences - Kasemsak kanunkhon">
              <Row>
                  <Col md={{ size: 8, offset: 2 }}>
                      <iframe style={{ width: '100%', height: '800px' }} src="/cv.pdf" />
                  </Col>
              </Row>
          </BasePage>
    </BaseLayout >
  )
}

export default Cv;
