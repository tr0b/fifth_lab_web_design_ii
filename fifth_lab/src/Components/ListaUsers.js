function ListaUsers(props){
const mostrarFilas=()=>{
    return props.listaUsuarios.map((usuario,index)=>{
        return <tr key={index}>
	{Object.keys(usuario).map(key => <td>{usuario[key]}</td>)}
        </tr>
    })
}
return <div>
    <table className="table">
        <thead>
            <tr>
                <th>post Id</th>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
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
