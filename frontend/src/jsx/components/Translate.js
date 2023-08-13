import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../css/localization.css'
function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select className='localization btn-outline-info btn-xs ml-4' onChange={changeLanguage}>
      <option value="en">{t('English')}</option>
      <option value="sv">{t('Swedish')}</option>
    </select>
  );
}

export default LanguageSelector;
