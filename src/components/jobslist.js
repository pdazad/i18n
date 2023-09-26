import { IntlProvider } from 'react-intl';
import React, { useState } from "react";
import Job from "./job";
import {FormattedMessage} from 'react-intl';
import { useEffect } from 'react';

const JobsList = () => {

  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 10000,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 20000,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 30000,
    },
  ]);

  const [locale, setLocale] = useState(navigator.language || 'en');

  const messages = {
    en: require('../locales/en.json'), // Carga mensajes en inglés desde el archivo en.json
    es: require('../locales/es.json'), // Carga mensajes en español desde el archivo es.json
  };

  useEffect(() => {
    setLocale(navigator.language.split(/[-_]/)[0]); // Ej: "es-ES" -> "es"|| 'en');
  }, []);

  const tableHeaderClassName = locale === 'es' ? 'table-light' : 'table-dark';

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
      <table className={`table ${tableHeaderClassName}`}>
          <thead className={tableHeaderClassName}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="Position"/>
              </th>
              <th scope="col">
                <FormattedMessage id="Company" />
              </th>
              <th scope="col">
                <FormattedMessage id="Salary" />
              </th>
              <th scope="col">
                <FormattedMessage id="City" />
              </th>
              <th scope="col">
                <FormattedMessage id="PublicationDate" />
              </th>
              <th scope="col">
                <FormattedMessage id="Views" />
              </th>
            </tr>
          </thead>
          <tbody>
            {offers.map((e, i) => (
              <Job key={i} offer={e} />
            ))}
          </tbody>
        </table>
      </div>
    </IntlProvider>
  );
};

export default JobsList;