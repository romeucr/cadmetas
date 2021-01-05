import React from 'react';
import Menubar from '../components/Menubar';
import {
   Jumbotron, Container, Card, CardHeader, CardFooter, CardBody,
   CardTitle, CardText
} from 'reactstrap';

function Home({ data }) {
   return (
      <>
         <Menubar />
         <Jumbotron fluid className="list">
         <h1 className="index-h1">Minhas metas</h1>

            <Container className="metas-container">
               {data.metas.map(meta => (
                  <Card key={meta._id} className="meta-card">
                     <CardHeader tag="h5" className="meta-card-header">{meta.name}</CardHeader>
                     <CardBody>
                        <CardText>{meta.description}</CardText>
                        <CardFooter>{meta.status}</CardFooter>
                     </CardBody>
                  </Card>
               ))}
            </Container>
         </Jumbotron>
      </>
   )
}

export async function getServerSideProps() {
   const response = await fetch(`http://localhost:8080/metas`)
   const data = await response.json()

   return { props: { data } }
}

export default Home