import React, { useState } from 'react'
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'
import Menubar from '../components/Menubar'

function Cadastrar() {

   const [meta, setMeta] = useState({
      name: '',
      description: '',
      status: ''
   })

   const [response, setResponse] = useState({
      formSave: false,
      type: '',
      message: ''
   })

   //pega o que já estava anteriormente preenchido e atualiza. Utiliza o name e o value do input
   const onChangeInput = e => setMeta({ ...meta, [e.target.name]: e.target.value })

   const sendMeta = async e => {
      e.preventDefault()

      setResponse({ formSave: true })

      try {
         const res = await fetch('http://localhost:8080/metas', {
            method: 'POST',
            body: JSON.stringify(meta),
            headers: {
               'Content-type': 'application/json'
            }
         })

         const responseEnv = await res.json()

         if (responseEnv.error) {
            setResponse({
               formSave: false,
               type: 'error',
               message: responseEnv.message
            })
         } else {
            setResponse({
               formSave: false,
               type: 'success',
               message: responseEnv.message
            })
         }
      } catch (err) {
         setResponse({
            formSave: false,
            type: 'error',
            message: 'ERROR - Não foi possível conectar a API. Meta não cadastrada!'
         })
      }
   }

   return (
      <>
      <Menubar />
         <Jumbotron fluid className="form">
            <style >
               {`.form{
                  padding-top: 30px;
                  padding-bottom: 150px;
                  margin-bottom: 0 !important;
               }`}
            </style>
            <Container>
               <h1 className="display-4 text-center">Cadastrar Meta</h1>
               <hr />
               {/* mensagens de sucesso ou de erro o gravar a meta */}
               {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
               {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}

               <Form onSubmit={sendMeta}>
                  <FormGroup>
                     <Label for="name">Nome</Label>
                     <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome da meta"
                        onChange={onChangeInput}>
                     </Input>
                  </FormGroup>
                  <FormGroup>
                     <Label for="description">Descrição</Label>
                     <Input
                        type="textarea"
                        name="description"
                        id="description"
                        placeholder="Descrição da meta"
                        onChange={onChangeInput}>
                     </Input>
                  </FormGroup>
                  <FormGroup>
                     <Label for="status">Status</Label>
                     <Input
                        type="select"
                        name="status"
                        id="status"
                        placeholder="Status da meta"
                        onChange={onChangeInput}
                     >
                        <option>Pendente</option>
                        <option>Cancelada</option>
                        <option>Concluída</option>
                        <option>Em andamento</option>
                     </Input>
                  </FormGroup>
                  {/* bloqueando o botão até que a API responda. Para evitar reenvios do formulário em caso de demora na resposata */}
                  {response.formSave ? <Button type="submit" disabled>Enviando...</Button> : <Button type="submit">Cadastrar</Button>}
               </Form>
            </Container>
         </Jumbotron>
      </>
   )
}

export default Cadastrar