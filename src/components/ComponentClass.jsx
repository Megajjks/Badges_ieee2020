import React from 'react'; //Traemos la libreria de React.js
import './style/components.css'

class ComponentStateful extends React.Component{

    // Método que se encarga de renderizar el JSX pasandolo a html5.
    render(){
        return(
            <h2 className='componenteClass'>Hola soy un componente de clases o Stateful Component</h2>
        )
    }
}

export default ComponentStateful  
/* Los componentes clases o Stateful Component
    -Nos permiten trabajar con los estados que un componente pueda tener
    -Utiliza la encapsulación de clases
    -Nos permite trabajar con todas las funciones del ciclo de vida en Reactjs
        -componentWillMount()
        -componentDidMount()
        -componentWillUpdate()
        -componentWillUnmount()
        -entre otro...
*/