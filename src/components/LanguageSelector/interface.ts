import { Language } from 'store/interface';

export interface LanguageSelectorProps {
    language: Language;
    setLanguage: (language: Language) => void;
}