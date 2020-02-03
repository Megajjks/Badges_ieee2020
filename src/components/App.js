import React from 'react';
import ComponentStateful from './ComponentClass'
import ComponentStateless from './ComponentFunction'

function App(){
    return(
        <div>
            <h1>Componentes</h1>
            <ComponentStateful bio='Para más info puedes contactarme en twitter como @sr_ku'/>
            <ComponentStateless
                nombre='Jayro Salazar'
                edad='22'
                profesion='frontend developer'
                bio='Para más info puedes contactarme en email como megajjks@gmail.com'
            />
        </div>
    )
}

export default App;