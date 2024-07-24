import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Country(props) {
    const { country } = props;

    const navigate = useNavigate();
    const [dawla, setDawla] = useState("");

    let newCountryName = country.name.common.split("").filter(char => /[a-zA-Z]/.test(char)).join("");

    useEffect(() => {
        if (dawla) {
            navigate(`/REST-Countries-React/${newCountryName}`, { state: { dawla } });
        }
    }, [dawla, newCountryName, navigate])
    return (
        <div className='country' onClick={() => {
            setDawla(country);
        }}>
            <div className="img">
                <img src={country.flags.png} alt={`${country.name.common} Flag`} />
            </div>
            <div className="info">
                <h2>{country.name.common}</h2>
                <span className="inf">Population : <span className='finInf'>{country.population.toLocaleString()}</span></span>
                <span className="inf">Region : <span className='finInf'>{country.region}</span></span>
                <span className="inf">Capital : <span className='finInf'>{country.capital ? country.capital : "none"}</span></span>
            </div>
        </div>
    )
}

export default Country;