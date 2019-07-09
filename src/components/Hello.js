import React from 'react'

const Hello =() =>{
    // return(
    //     <div>
    //         <h1>Hellow Ivisual animation</h1> 
    //     </div>
    // )

    return React.createElement('div',{id:'hellow',className:'dummy content' }, React.createElement('h1',null,'Hello world'))
}


export default Hello