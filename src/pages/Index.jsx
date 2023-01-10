import Form from "../components/Form";
import ListGroup from "../components/ListGroup";
import {useEffect, useState} from 'react'
import Data from "../components/Data";

export default function Index() {
//GET
    const [notas, setNotas] = useState([])
    
    const getNotas = async ()=>{
        const response = await fetch('http://localhost:5000/api/notas')
        const result = await response.json()
        //console.log(result)
        setNotas(result)
    }
    useEffect(() => {
      getNotas();
    }, [notas])

    //DELETE
    const deleteNota = async (id)=>{
     await fetch('http://localhost:5000/api/notas/'+id,{
      method:'DELETE',
      mode: 'cors',
     })
      //console.log(id)
    }

    //PUT -actualizar-editar
    const [oldNota, setOldNota] = useState([])
    
    const getNota = async (id)=>{
      const nota = await fetch("http://localhost:5000/api/notas/" + id);
      const result = await nota.json()
      setOldNota(result)
      //console.log(result)
    } 
  return (
    <div className="content-app">
      <div className="col-sm-12 col-md-4 py-1">Formulario</div>
      <Form oldNota={oldNota} />
      <div className="col-sm-12 col-md-8 py-1">Notas</div>
      <ListGroup>
        {notas.map((nota, index) => (
          <Data key={index} deleteNota={deleteNota} getNota={getNota} id={nota._id} title={nota.title} content={nota.content} />
        ))}
      </ListGroup>
      
    </div>
  );
}
