import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import TopicFilter from './TopicFilter';

type HeadingProps = {
  topics: string[] | undefined
  selectedTopics: string[]
  setSelectedTopics : React.Dispatch<React.SetStateAction<string[]>>
}

function Heading({topics, selectedTopics, setSelectedTopics} : HeadingProps) {
  const expand = "sm"

  return (
    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">TechCheck</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              TechCheck
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              
              <TopicFilter topics={topics} selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics}/>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Heading;