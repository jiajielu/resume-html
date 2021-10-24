import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row className="main-row">
            <Col sm={4} className="main-col bg-dark" >
              <Container className="ml-2 mt-5">
                <Row className="mt-2"><p className="h3">Contact</p></Row>
                <Row className="m-1"><p className="h6">jj.lyn.loo@gmail.com</p></Row>
                <Row className="m-1"><a href="https://www.linkedin.com/in/jiajie-lu-b9772b177/?jobid=1234" className="h6 link-light" target="_blank" rel="noopener noreferrer">LinkedIn</a></Row>
                <Row className="m-1"><a href="https://github.com/jiajielu/resume-html" className="h6 link-light" target="_blank" rel="noopener noreferrer">Github</a></Row>
              </Container>
              <Container className="ml-2 mt-3">
                <Row className="mt-2"><p className="h3">Top skills</p></Row>
                <Row className="m-1"><p className="h6">microservices</p></Row>
                <Row className="m-1"><p className="h6">cloud computing</p></Row>
                <Row className="m-1"><p className="h6">web application</p></Row>
                <Row className="m-1"><p className="h6">python</p></Row>
                <Row className="m-1"><p className="h6">reactJS</p></Row>
              </Container>
              <Container className="ml-2 mt-3">
                <Row className="mt-2"><p className="h3">Certifications</p></Row>
                <Row className="m-1"><a href="https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/" className="h6 link-light" target="_blank" rel="noopener noreferrer">Microsoft Certified: Azure Fundamentals</a></Row>
                <Row className="m-1"><a href="https://neo4j.com/graphacademy/neo4j-certification/" className="h6 link-light" target="_blank" rel="noopener noreferrer">Neo4j Certified Professional</a></Row>
              </Container>               
            </Col>
            <Col sm={8} className="main-col bg-white" >
              <Container className="ml-2 mt-5">
                <Row className="mt-2"><p className="h1">JIAJIE LU - 陆佳杰</p></Row>
                <Row className="mt-1 mb-1"><p className="h4">Assistant Manager at KPMG Singapore</p></Row>
              </Container>
              <Container className="ml-2 mt-5">
                <Row className="mt-2 mb-2"><p className="h3">Project Experience</p></Row>
                <Row className="mt-1 mb-1"><p className="h6"> - Build scalable web application with <b>microservice</b> architecture</p></Row>
                <Row className="mt-1 mb-1"><p className="h6"> - Build business intelligence visualization projects for <b>payment analytics</b></p></Row>
                <Row className="mt-1 mb-1"><p className="h6"> - Migrate from on-premise audit system to commercial <b>Cloud</b> platform </p></Row>
                <Row className="mt-1 mb-1"><p className="h6"> - Automate <b>service monitoring</b> by implementing logs monitoring and notification monitoring</p></Row>
                <Row className="mt-1 mb-1"><p className="h6"> - Enhance authentication process by integrating with <b>Windows Active Directory Single-Sign-On</b> (SSO)</p></Row>
                <Row className="mt-1 mb-1"><p className="h6"> - Design, customize and develop role-based access workflow for <b>government agencies</b></p></Row>
              </Container>              
              <Container className="ml-2 mt-5">
                <Row className="mt-2 mb-2"><p className="h3">Working Experience</p></Row>
                <Row className="mt-1 mb-1"><p className="h5">KPMG SINGAPORE · July 2018 - Present (3 years 4 months)</p><p className="h6"></p></Row>
                <Row className="mt-1 mb-1"><p className="h5">Anacle Systems Limited · July 2017 - June 2018 (1 year)</p></Row>
              </Container>
              <Container className="ml-2 mt-5">
                <Row className="mt-2 mb-2"><p className="h3">Education</p></Row>
                <Row className="mt-1 mb-1"><p className="h5">National University of Singapore</p></Row>
                <Row className="mt-1 mb-1"><p className="h6">Bachelor's degree with honors, Computer Engineering · (2013 - 2017)</p></Row>
                <Row className="mt-1 mb-1"><p className="h6">Network Specialization</p></Row>
              </Container> 
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
