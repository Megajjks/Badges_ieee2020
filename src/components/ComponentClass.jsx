import React from 'react'; //Traemos la libreria de React.js
import './style/components.css'

class ComponentStateful extends React.Component{

    //Declaramos el estado
    state = {
        nombre: 'Jayro Salazar',
        edad: '22',
        profesion: 'frontend Developer'
    }

    // Método que se encarga de renderizar el JSX pasandolo a html5.
    render(){
        // return(
        //     <h2 className='componenteClass'>Hola soy un componente de clases o Stateful Component</h2>
        // )

        return(
            <div className='componenteClass'>
                <h1>Descripción personal</h1>
                <p>Nombre:  {this.state.nombre} </p>
                <p>edad:  {this.state.edad} </p>
                <p>profesión:  {this.state.profesion} </p>
                <p>{this.props.bio}</p>
            </div>
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