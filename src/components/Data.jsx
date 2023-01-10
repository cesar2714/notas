
export default function Data({title, content, id, deleteNota, getNota}) {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{title}</div>
          {content}
        </div>
        <button onClick={(e)=>getNota(id)} className="btn btn-info btn-sm">Editar</button>
        <button onClick={(e)=>deleteNota(id)} className="btn btn-outline-danger btn-sm">Eliminar</button>
      </li>
    </div>
  );
}
