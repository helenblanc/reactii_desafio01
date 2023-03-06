import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

// FUNCIÓN QUE CREA UN COMPONENTE HOME
export const Home = () => {

  // CREACIÓN DE COMPONENTE HOME
  return (
    <div style={{ maxWidth: "1024px", margin: '0 auto', alignItems: "center", justifyContent: "center", marginTop: '20px', marginBottom: '20px' }}>

      <Image fluid='true' src='github.gif'></Image>
    </div>
  );
};

export default Home;