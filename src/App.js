import { useState } from "react";
import {Form, Label, Input, Container, Row, Col, CardImg} from 'reactstrap';
import './App.css';
import Icons from './Icons';
import Video from './Video';

function App() {

const [mailerState, setMailerState] = useState({
  email: "",
  name: "",
  tel: "",
  message: "",
});

function handleStateChange(e) {
  setMailerState((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
}

const submitEmail = async (e) => {
   e.preventDefault();
   console.log({ mailerState });
   const response = await fetch(process.env.REACT_APP_API_URL , {
     method: "POST",
     headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
     },
     body: JSON.stringify({ mailerState }),
   })
     .then((res) => res.json())
     .then(async (res) => {
       const resData = await res;
       console.log(resData);
       if (resData.status === "success") {
         alert("Message Sent");
       } else if (resData.status === "fail") {
         alert("Message failed to send");
       }
     })
     .then(() => {
       setMailerState({
         email: "",
         name: "",
         tel: "",
         message: "",
       });
     });
 };





  return (
    <div>
       
       
       <Container className='content' fluid="md">
       <Container className="nav" fluid="md">
          <Row>
            <Col>
              <CardImg className="logo"
                alt="Logo Consertel"
                src="https://consertel.eng.br/wp-content/uploads/2020/07/MARCA-BRANCA_CONSERTEL-VERTICAl-copy.png"
                top
                width="100%"
              />
            </Col>
            <Col>
              <Icons/>
              
            </Col>
            </Row>
        </Container>
      
        
        <Row md="2" sm="1" xs="1">
          <Col>
            <h2>Em Breve</h2>
            <CardImg className='tel'
              alt="Robo Tel"
              src="https://consertel.eng.br/wp-content/uploads/2021/05/MASCOTE-PISCANDO.png"
              top
              width="100%"
            />
          </Col>
          <Col className="form">
          <Form onSubmit={submitEmail}>
              <Label htmlFor="nome">Nome</Label>
              <Input type="text" id="nome" onChange={handleStateChange} name="name" placeholder="Digite Seu Nome..." value={mailerState.name}/>
              <Label htmlFor="telefone">Telefone</Label>
              <Input type="tel" id="telefone" name="tel" onChange={handleStateChange} placeholder="Digite Seu Telefone..."/>
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" id="email" onChange={handleStateChange} name="email" placeholder="Digite Seu E-mail..." value={mailerState.email} />
              <Label htmlFor="mensagem">Mensagem</Label>
              <Input type="textarea" id="mensagem" name="message" onChange={handleStateChange} placeholder="Digite Sua Mensagem..." />
              <Input type="submit" value="Enviar"/>
            </Form>
          </Col>
        </Row> 
        <Container className="texto" fluid="md">
          
          <h3>VISITE NOSSO SHOWROOM E DESCUBRA O FUTURO!</h3>
          <p>Av. La Salle, 1262 - Nossa Sra. Fátima, Xanxerê - SC <br/>Tel.: (49) 3433-1066</p>

        </Container>
        </Container>
        <Video/>
        <div className='fundo'>

        </div>
       
      
    </div>
  );
}

export default App;
