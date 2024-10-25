import { useState } from 'react';
import Nome from './componenets/Nome';

// function App() {
//   return (
//     <div className="App">
//       <h1>Testando o REACT!</h1>
//     </div>
//   );
// }

// export default App;


 function App(){
  //const[pessoa,setPessoa]=useState('Diego')
  //function trocarNome(pessoa){
    //alert("Teste")
     //setPessoa(pessoa);
    const[nome,setNome]=useState('')
    const[Email,setEmail]=useState('')
    const[idade,setIdade]=useState('')
    const[Usuario,setUsuario]=useState({})
    function acionaRegistro(e){
    e.preventDefault()
    alert("Registro feito com sucesso!")
    setUsuario({
      nome:nome,idade:idade,email:Email
    })
     }
   //}

return(
     <div>
        {/* <h1>Nosso primeiro app em React</h1>
        <h2>Olá {pessoa}</h2>
        <h3>Usando Componentes</h3>
        
        <br/>
        <button onClick={()=>trocarNome('Bem vindo caminhoneiro')}>
          Mudar o Nome
        </button>
        <br/>
        <Nome pessoa="Gustavo" idade={17}/>    */}

<h1>Cadastrando Usuário</h1>
<form onSubmit={acionaRegistro}>
  <label>Nome:</label>
  <br/>
  <input placeholder='Digite seu nome' value={nome} onChange={(e)=>{setNome(e.target.value)}}></input>
  <br/>
  <label>Email:</label><br/>
  <input placeholder='Digite seu Email'value={Email} onChange={(e)=>{setEmail(e.target.value)}}></input>
  <br/>
  <label>Idade:</label><br/>
  <input placeholder='Digite sua idade'value={idade} onChange={(e)=>{setIdade(e.target.value)}}></input>
  <br/><br/>
  <button type='submit'onClick={()=>setNome(nome)}>Registrar</button>
  <br/>
</form>
<br/>

<div>
  <span>Bem Vindo: {Usuario.nome}</span><br/>
  <span>Idade: {Usuario.idade}</span><br/>
  <span>Email: {Usuario.email}</span><br/>
</div>
    </div>
    )
 }

 export default App;

