import React, { FC, useState, useEffect } from 'react'
import './country.css';

export interface CounrtyProps {
    name: string
    slug: string
}

export interface CounrtyComponentProps extends CounrtyProps {
    removeCountryBySlug(slug: string): void
    date: Date
}

const Country = ({name, slug, date, removeCountryBySlug}: CounrtyComponentProps) => {

    const [value, setState] = useState(0); 
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(() => {
        
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);

        setIsLoading(true);

        fetch(`https://api.covid19api.com/total/country/${slug}/status/confirmed?from=${date.toISOString()}&to=${nextDay.toISOString()}`)
        .then((response) => response.json())
        .then((data) => {
            setState(data[0].Cases);
            setIsLoading(false);
        });

    }, [date])

    return (
      <div className="country">
        
        <div className="country-total">
          {isLoading ? "?" : value}
        </div>

        <h1>{name}</h1>

      </div>
    );
  }
  
  export default Country;