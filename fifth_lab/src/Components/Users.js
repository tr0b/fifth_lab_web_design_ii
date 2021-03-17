import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import User from './User';
import ListaUser from './ListaUsers'
function Users() {
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const agregarUsuarios = (usuario) => {
        setListaUsuarios(listaUsuarios.concat(usuario));
    }

    const cargandoUsuariosWeb = async () => {
        let datos = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json());
        setListaUsuarios(datos);

    }

    useEffect(() => {
        cargandoUsuariosWeb();
    }, []);
    return <div>
        <Menu />
        <div className="row">
            <div className="col-lg-4">
                <User agregarUsuarios={agregarUsuarios} />
            </div>
            <div className="col-lg-8">
                <ListaUser listaUsuarios={listaUsuarios} />
            </div>
        </div>
    </div>
}
export default Users;
