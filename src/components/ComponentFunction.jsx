import React from 'react'

//Función flecha o arrow
/* Función normal
    
    function ComponentStateless (parametros) {
        sentencias
    }
    
    esto es lo mismo que 

    const ComponentStateless = (parametros) =>{
        sentencias
    }

*/
const ComponentStateless = (props) =>{
    return(
       <div className='componenteFunction'>
           <h1>Descripción personal</h1>
            <p>Nombre: {props.nombre} </p>
            <p>edad: {props.edad} </p>
            <p>profesión: {props.profesion} </p>
            <p> {props.bio} </p>
       </div>
    )
}

export default ComponentStateless

/* Los componentes de función o Stateless Component
    -Son usados comunmenta para casos donde no se necesita manipular el estate
     solo mostrar algún dato
    -Aquí no se puede declarar un estado del componente y modificar sus métodos en su ciclo de vida
    -Es más legible además de que ahorra codigo
    -spoiler alert, se le puede dotar de otras funcionalidades con reactHooks(Pero eso te lo comento después ya que puede hacerte explotar la cabeza)
*/