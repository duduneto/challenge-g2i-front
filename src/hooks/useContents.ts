import { useEffect, useState } from 'react';
import { textContents, Screens_Enum, Language_Enum } from '../contents/texts'

function useContents() {
  const [language, setLanguage] = useState<Language_Enum>(Language_Enum.EN);
  const [screen, setScreen] = useState<Screens_Enum>(Screens_Enum.HOME);
  const [content, setContent] = useState<Record<string, string>>({});

    useEffect(() => {
        function getScreenContents() {
            return textContents[screen][language];
        }

        setContent(getScreenContents());
    },[language, screen])

  return {
    content,
    languages: Language_Enum,
    setLanguage,
    screen: Screens_Enum,
    setScreen,
  };
};

export default useContents