import React from 'react';
import './ChooseLang.css'

interface ChooseLangProps {
  selectedLang: string;
  onLangChange: (lang: string) => void;
}

export default function ChooseLang({ selectedLang, onLangChange }: ChooseLangProps) {
  const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onLangChange(event.target.value)
  };

  return (
    <div className='ChooseLang'>
      <label htmlFor="language-select">Choose a programming language:</label>
      <select id="language-select" value={selectedLang} onChange={handleLangChange}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
    </div>
  );
}
