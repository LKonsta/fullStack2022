import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]) 

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <CountryFilter handleFilter={handleFilterChange}/>
      <Countries countries={countries} filter={newFilter} />
    </div>
  )
}

const CountryFilter = (props) => {
  return (
    <div>
      <form>
        find countries <input onChange={props.handleFilter}/>
      </form>
    </div>
  )
}

const Countries = (props) => {
  const filtered = props.countries.filter(function (country) {
    return country.name.common.toUpperCase().includes(props.filter.toUpperCase())
  })

  var exactCountry

  
  filtered.map(function (country, i) {
    if (country.name.common.toUpperCase() === props.filter.toUpperCase()) {
      exactCountry = country
    }
  })

  if (filtered.length === 1) {
    return (
      <div>
        <SingleCountry country={filtered[0]} />
      </div>
    )
  } else if (exactCountry !== undefined) {
    return (
      <div>
        <SingleCountry country={exactCountry} />
      </div>
    )
  } else if (filtered.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  } else {
    return (
      <div>
        {filtered.map(country =>
          <div key={country.name.common}>
            {country.name.common}
          </div>
        )}
      </div>
    )
  }
}

const SingleCountry = (props) => {
  const country = props.country
  return (
    <div>
      <h1>{country.name.common}</h1>

      <div>
        Capital: {country.capital}
        <div></div>
        Area: {country.area} km²
      </div>

      <Languages languages={country.languages} />
      <div>
        <img src={country.flags.png} alt={country.name.common + " flag"}/>
      </div>
    </div>
  )
}

const Languages = (props) => {
  var languages = []
  for (const [key, language] of Object.entries(props.languages)) {
    languages.push([language])
  }
  return (
    <div>
      <h4>Languages:</h4>
      <ul>
      {languages.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    </div>
  )
}

export default App
