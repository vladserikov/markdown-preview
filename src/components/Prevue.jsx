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
        <div className={styles.mark}>
            <div className={styles.text}>Prevue</div>
            <div id='preview' className={styles.prevue}></div>
        </div>
    )
}

export default Prevue