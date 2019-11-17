import React, {useEffect, useState} from 'react';
import './App.css';
import marked from 'marked'
import Textarea from './components/Textarea';
import Prevue from './components/Prevue';

const App = () => {
    const [textarea, setTextarea] = useState('')

    const retStr = (text) => {
        return  marked(text)
    }
    
    useEffect(() => {
        document.getElementById('mark').innerHTML = retStr(textarea)
    }, [textarea])

    const handleText = (e) => {
        setTextarea(e.target.value)
    }
    return(
        <div className='app'>
            <Textarea onChange={handleText} value={textarea} />
            
            <Prevue text={textarea} />
        </div>
    )
}

export default App;
