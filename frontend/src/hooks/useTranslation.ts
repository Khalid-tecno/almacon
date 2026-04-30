import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/dictionary';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return getTranslation(key, language);
  };

  return { t, language };
};
