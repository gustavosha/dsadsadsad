import { useState } from 'react';
import Nome from './componenets/Nome';



 function App(){
  
    const[tarefa,setTarefa]=useState(['Cortar o baralho','Distribuir as cartas'])
    const[input,setInput]=useState('')
    

    function acionaRegistro(e){
    e.preventDefault()
    setTarefa([...tarefa,input])
    setInput('')
     }
   

return(
     <div>
        

<h1>Cadastrando Usuário</h1>
<form onSubmit={acionaRegistro}>
  <label>Nome da tarefa:</label>
  <br/>
  <input placeholder='Digite uma tarefa' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
  <button type='submit'onClick={()=>setInput(input)}>Registrar</button>
  <br/>
  <ul>
    {tarefa.map(tarefa=>(
      <li key={tarefa}>{tarefa}</li>
    ))}
  </ul>
</form>
<br/>

    </div>
    )
 }

 export default App;

