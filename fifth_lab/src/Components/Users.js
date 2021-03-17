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
        console.log('Metodo cargando Usuario');
        let datos = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json());
        setListaUsuarios(datos);
        console.log('datos-->',datos)

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