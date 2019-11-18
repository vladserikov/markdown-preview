import React, { useEffect } from 'react'
import marked from 'marked';
import styles from './Prevue.module.css'

const Prevue = ({text}) => {
    marked.setOptions({
        breaks: true
    })
    useEffect(() => {
        document.getElementById('preview').innerHTML = marked(text)
    })
    return(
        <div id='preview' className={styles.mark}>
            
        </div>
    )
}

export default Prevue