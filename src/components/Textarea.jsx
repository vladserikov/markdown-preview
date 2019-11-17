import React, { useEffect } from 'react'
import styles from './Textarea.module.css';

const Textarea = ({onChange, value}) => {
    const toggle = document.querySelector('span')
    // const wrap = document.querySelector(`.${styles.wrap}`)
    // const text = document.querySelector(`.${styles.text}`)
    
    // toggle.addEventListener('click', (e) => {
    //     console.log('test')
    //     if(!toggle.classList.contains('close')){
    //         toggle.classList.add('close')
    //         wrap.style.width = '90vw';
    //         text.style.height = '85vh'
    //     } else {
    //         toggle.classList.remove('close')
    //         wrap.style.width = '55vw';
    //         text.style.height = '200px'
    //     }
    // })
    const handleTogle = (e) => {
        // console.log(e.target.parentElement.parentElement)
        const wrap = e.target.parentElement.parentElement
        if(wrap.classList.contains(`${styles.close}`)){
            wrap.classList.remove(`${styles.close}`)
        } else {
            wrap.classList.add(`${styles.close}`)
        }
    }
    return(
        <div className={styles.wrap}>
            
            <textarea onChange={onChange} value={value} className={styles.text}></textarea>
            <div className={styles.title}>
                edit
                <span onClick={handleTogle} className={styles.width}>X</span>
            </div>
        </div>
    )
}
export default Textarea