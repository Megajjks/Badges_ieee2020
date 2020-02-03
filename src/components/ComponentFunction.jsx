import React from 'react'

const ComponentStateless = (props) =>{
    return(
        <h2 className='componenteFunction'>Hola soy un componente de función o Stateless Component</h2>
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