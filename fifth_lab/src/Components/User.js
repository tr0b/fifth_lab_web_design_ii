import React, { useState } from 'react';
function User(props) {
    const [user, setUser] = useState({
        userId: 0,
        id: 0,
        title: "",
        body: ""
    })

    const cambiarValor = (e) => {
        const { name, value, type } = e.target;
        setUser({ ...user, [name]: (type === 'number') ? parseInt(value) : value });
        //limpiar();
    }

    const limpiar = () => {
        setUser({
            userId: 0,
            id: 0,
            title: "",
            body: ""
        })
    }
    return <div>
        <div className="card">
            <div className="card-header">Datos Usuario</div>
            <div className="card-body">


                <input type="number"
                    name="userId"
                    id="userId"
                    placeholder="Digite el User Id"
                    onChange={cambiarValor}
                    value={user.userId} />
                <input
                    type="number"
                    name="id"
                    id="id"
                    placeholder="Digite el Id"
                    onChange={cambiarValor}
                    value={user.id} />
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Digite el titulo"
                    onChange={cambiarValor}
                    value={user.title} />
                <input
                    type="text"
                    name="body"
                    id="body"
                    placeholder="Digite el texto"
                    onChange={cambiarValor}
                    value={user.body} />
            </div>
            <div className="card-footer">
                <button
                    className="btn btn-primary"
                    onClick={() => { props.agregarUsuarios(user) }}
                >Guardar</button>
                <button
                    className="btn btn-default"
                    onClick={limpiar}
                >Cancelar</button>
            </div>
        </div>
    </div>
}
export default User;