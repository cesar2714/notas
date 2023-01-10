import { useEffect } from 'react'
import {useState} from 'react'


export default function Form({oldNota}) {
//POST
const [nota, setNota] = useState({
  title:'',
  content:''
})

const handleChange = (e)=>{
  let newNota = {
    [e.target.name]:e.target.value,
    [e.target.name]:e.target.value
  }
  setNota({...nota,...newNota})
  //console.log(nota)
}
  const saveNota = async ()=>{
    let URL = "";
    let params = {};
    if (nota._id) {
      URL = "http://localhost:5000/api/notas/" + nota._id;
      params = {
        method: "PATCH",
        body: JSON.stringify(nota),
        headers: {
          "Content-Type": "application/json",
        },
      };
    } else {
      URL = "http://localhost:5000/api/notas/";
      params = {
        method: "POST",
        body: JSON.stringify(nota),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }
    await fetch(URL,params);

  }
  const onSubmit = (e)=>{
    e.preventDefault();
    saveNota();
    setNota({
      title: "",
      content: "",
    });
  }
  useEffect(()=>{
    setNota({...nota,...oldNota})
  },[oldNota])

  return (
    <div className="card">
      <div className="card-header">Agregar nota</div>
      <div className="card-body">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              onChange={handleChange}
              value={nota.title}
              name="title"
              type="text"
              placeholder="título"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange}
              value={nota.content}
              name="content"
              className="form-control"
              placeholder="descripción"
            ></textarea>
          </div>
          {nota._id ? (
            <button
              type="submit"
              className="btn btn-outline-success btn-sm btn-block"
            >
              Actualizar
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-outline-success btn-sm btn-block"
            >
              Guardar
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
