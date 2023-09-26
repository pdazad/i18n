import React from "react";
import { useState, useEffect } from "react";
import {FormattedDate, FormattedNumber, IntlProvider, FormattedMessage} from 'react-intl';

const Job = (props) => {

  const [locale, setLocale] = useState(navigator.language || 'en');
  useEffect(() => {
    setLocale(navigator.language || 'en');
  }, []);

  console.log(locale);

  const formatSalary = (salary, locale) => {
    if (locale === 'es' || locale === 'es-ES') {
      if (salary <= 1) {
        return (
          <span>
          <FormattedNumber
            value={salary}
            minimumFractionDigits={2} 
          />{" "}
          millón
        </span>
        ); 
      }
      else {
        return (
          <span>
          <FormattedNumber
            value={salary}
            minimumFractionDigits={2} 
          />{" "}
          millones
        </span>
        ); 
      }
    } else {
      return (
        <span>
        <FormattedNumber
          value={salary}
          minimumFractionDigits={2} 
        />{" "}
        <FormattedMessage id="Million" />
      </span>
      ); 
    }
  };

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{formatSalary(props.offer.salary, locale)}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
      <FormattedNumber
          value={props.offer.views}
          style="decimal"
          minimumFractionDigits={2}
        />
      </td>
    </tr>
  );
};

export default Job;
