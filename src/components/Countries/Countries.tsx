import React, { useState, useEffect } from 'react'
import Country, { CounrtyProps } from '../Country/Country'
import CountryInput from '../CountryInput/CountryInput'
import './countries.css'


const COUNTRIES_SEED: CounrtyProps[] = [
    { name: "Australia", slug: "australia"},
    { name: "Vietnam", slug: "vietnam"},
    { name: "United Kingdom", slug: "united-kingdom"},
    { name: "Canada", slug: "canada"},
    { name: "United States of Americ", slug: "united-states"}
]

function Countries() {

    const [date, setDate] = useState(new Date('2020-11-08T00:00:00'));
    const [countries, setCountries] = useState(COUNTRIES_SEED);

    const handleDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setDate(evt.target.valueAsDate ?? new Date())
    }

    const addCountry = (country: CounrtyProps) => {
        setCountries([...countries, country])
    }

    const removeCountryBySlug = (slug: string) => {
        setCountries([...countries].filter(c => c.slug !== slug))
    }

    return (
        <div className="countries">

            <div className="countries-controls">

                <div className="countries-control">
                    <label>Date: </label>
                    <input type="date" onChange={handleDateChange} value={date.toISOString().substring(0,10)} min="1" max={countries.length} />
                </div>

                <h2>Add Country</h2>

                <CountryInput addCountry={addCountry}/>

            </div>

            {countries.map(({name, slug}, index) => <Country key={index} name={name} slug={slug} date={date} removeCountryBySlug={removeCountryBySlug}/>)}

        </div>
    );
}
  
export default Countries;