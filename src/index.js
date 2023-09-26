import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobslist";

// Cargamos los mensajes según el idioma del navegador
const messages = {
  en: require("./locales/en.json"),
  es: require("./locales/es.json"),
};

// Obtenemos el idioma del navegador
const userLanguage = navigator.language.split(/[-_]/)[0]; // Ej: "es-ES" -> "es"
console.log(userLanguage);

ReactDOM.render(
  <IntlProvider locale={userLanguage} messages={messages[userLanguage]}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
