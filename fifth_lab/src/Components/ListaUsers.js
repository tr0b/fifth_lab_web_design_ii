function ListaUsers(props){
const mostrarFilas=()=>{
    return props.listaUsuarios.map((usuario,index)=>{
        return <tr key={index}>
            <td>{usuario.userId}</td>
            <td>{usuario.id}</td>
            <td>{usuario.title}</td>
            <td>{usuario.body}</td>
        </tr>
    })
}
return <div>
    <table className="table">
        <thead>
            <tr>
                <th>User id</th>
                <th>ID</th>
                <th>Titulo</th>
                <th>Texto</th>
            </tr>
        </thead>
        <tbody>
            {props.listaUsuarios.length===0?<tr><td colSpan={4}>Cargando...</td></tr>:
            mostrarFilas()}
        </tbody>
    </table>
</div>
}
export default ListaUsers;