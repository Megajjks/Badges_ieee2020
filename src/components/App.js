import React from 'react';
import ComponentStateful from './ComponentClass'
import ComponentStateless from './ComponentFunction'

function App(){
    return(
        <div>
            <h1>Componentes</h1>
            <ComponentStateful/>
            <ComponentStateless/>
        </div>
    )
}

export default App;