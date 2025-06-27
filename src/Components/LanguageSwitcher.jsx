import React, { useState } from 'react';

const LanguageSwitcher = () => {
        
        const [lang, setLang] = useState('en');
         const toggleLang = () => setLang(lang === 'en' ? 'bn' : 'en');
        return (
                <div >
                          <button
      onClick={toggleLang}
      className="flex items-center gap-2 w-[87px] h-[50px] rounded-[20px] ps-2 border bg-[#1E56F4] text-white "
    >
      <img
        src={lang === 'en' ? 'https://flagcdn.com/w40/us.png' : 'https://flagcdn.com/w40/bd.png'}
        alt="flag"
        className="w-6 h-4"
      />
      <span>{lang === 'en' ? 'Eng' : 'বাংলা'}</span>
    </button>
                </div>
        );
};

export default LanguageSwitcher;