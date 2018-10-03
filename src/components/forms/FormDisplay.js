import React from 'react'

const FormDisplay  = ({onSubmit, onChange}) => {
    return(
        <div>
            <h2>Alta de produto</h2>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} placeholder="Nombre del produto" name="name" type="text" />
                <br/>
                <input onChange={onChange} placeholder="Precio del produto" name="price" type="number" />
                <br/>
                <input onChange={onChange} placeholder="Link del produto" name="pic" type="text" />
                <br/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormDisplay