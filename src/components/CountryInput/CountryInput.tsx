import React, { FC, useState, useEffect } from 'react'
import {CounrtyProps} from '../Country/Country'

export interface CountryInputProps {
    addCountry(country: CounrtyProps): void
}

export interface ApiResponseCountryInputProps {
    Country: string
    Slug: string
    ISO2: string
}

const CountryInput = ({addCountry}: CountryInputProps) => {

    const [name, setName] = useState(""); 
    const [slug, setSlug] = useState("");  

    const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setName(evt.target.value)
    }

    const handleSlugChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSlug(evt.target.value)
    }

    const handleSubmit = () => {
        if(slug) {
            const country:CounrtyProps = {name: name, slug: slug} 
            addCountry(country)
        }
    }

    return (
      <div className="countries-control">
        
        <label>Name: </label><input type="text" value={name} onChange={handleNameChange}/>
        <label>Slug: </label><input type="text" value={slug} onChange={handleSlugChange}/>

        <button type="button" onClick={handleSubmit}>Add</button>

      </div>
    );
  }
  
  export default CountryInput;