import React, { useState } from 'react';
import './App.css';
import Editor from '@monaco-editor/react';
import ChooseLang from './components/ChooseLang';

const defaultCode: { [key: string]: string } = {
  javascript: `console.log('Hello, World!');`,
  python: `print('Hello, World!')`,
}

function App() {
  const [code, setCode] = useState(defaultCode['javascript'])
  const [compilerRes, setCompilerRes] = useState('')
  const [language, setLanguage] = useState('javascript')

  function handleChange(value: string | undefined) {
    if (value !== undefined) {
      setCode(value)
    }
  }

  function runCode() {
    async function mockFetch() {
      const response: { status: string; output?: string } = await new Promise(resolve => {
        setTimeout(() => {
          resolve({ status: 'success'})
        }, 1000);
      });
      setCompilerRes(response.status)
    }
    mockFetch()
  }

  function handleLangChange(lang: string) {
    setLanguage(lang)
    setCode(defaultCode[lang])
  }

  console.log(code);

  return (
    <div className='App'>
      <header>
        <ChooseLang selectedLang={language} onLangChange={handleLangChange} />
        <button onClick={runCode}>Run</button>
      </header>
      <div className='editor-div'>
        <Editor
          height="100%"
          width='100%'
          defaultLanguage={language}
          value={code}
          onChange={handleChange}
        />
        {compilerRes && <div className='output'>{compilerRes}</div>}
      </div>
      
      
    </div>
  );
}

export default App;
