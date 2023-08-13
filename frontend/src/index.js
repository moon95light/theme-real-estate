import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";
import ThemeContext from "./context/ThemeContext";
/**
 * start localization
 */
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import LanguageSelector from './jsx/components/Translate';

i18n.init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: require('./lang/eng.json'),
        },
        sv: {
            translation: require('./lang/swe.json'),
        },
    },
});
/**
 * end localization
 */
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SimpleReactLightbox>
                <BrowserRouter basename='/react/demo'>
                    <ThemeContext>
                        <I18nextProvider i18n={i18n}>
                            <App />
                        </I18nextProvider>,
                    </ThemeContext>
                    { /*   <App /> */}
                </BrowserRouter>
            </SimpleReactLightbox>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
