import React, { useEffect } from 'react'
import marked from 'marked';


const Prevue = ({text}) => {
    useEffect(() => {
        document.getElementById('mark').innerHTML = marked(text)
    })
    return(
        <div id='mark'>
            
        </div>
    )
}

export default Prevue