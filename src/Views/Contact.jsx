import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// FUNCIÓN QUE CREA UN COMPONENTE CONTACT
export const Contact = () => {

    // CREACIÓN DE COMPONENTE CONTACT
    return (
        <div style={{ maxWidth: "1024px", margin: '0 auto', alignItems: "center", justifyContent: "center", marginTop: '20px', marginBottom: '20px' }}>
            <Form >
                <Row className="g-2 text-black py-2">
                    <Col md>
                        <h4>Correo</h4>
                    </Col>
                    <Col md>
                        <Form.Control type="mail" placeholder="example@example.com"
                            name='mail' />
                    </Col>
                </Row>
                <Row className="g-2 text-black py-2">
                    <Col md>
                        <h4>Descripción</h4>
                    </Col>
                    <Col md>
                        <Form.Control as="textarea" rows={3}
                            name='descripcion' />
                    </Col>
                </Row>
                <Row className="g-2 text-black py-2">
                    <Col md>
                    </Col>
                    <Col md>
                        <Button variant="outline-primary" className='center'>ENVIAR</Button>
                    </Col>
                </Row>                
            </Form>
        </div>
    );
};

export default Contact;