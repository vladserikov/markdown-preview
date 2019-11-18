import React from 'react'
import styles from './Textarea.module.css';

const Textarea = ({onChange, value}) => {
    const handleTogle = (e) => {
        const wrap = e.target.parentElement.parentElement
        if(wrap.classList.contains(`${styles.close}`)){
            wrap.classList.remove(`${styles.close}`)
        } else {
            wrap.classList.add(`${styles.close}`)
        }
    }
    return(
        <div className={styles.wrap}>
            
            <textarea id='editor' onChange={onChange} value={value} className={styles.text}></textarea>
            <div className={styles.title}>
                edit
                <span onClick={handleTogle} className={styles.width}>X</span>
            </div>
        </div>
    )
}
export default Textarea