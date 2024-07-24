import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import './countryDetails.css'

function CountryDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [country] = useState(location.state.dawla);

    return (
        <div className='countryDetails'>
            <div className="btn" onClick={() => { navigate(-1) }}><IoMdArrowBack />back</div>
            <div className="content">
                <div className="image">
                    <img src={country.flags.png} alt={`${country.demonyms.eng.f ? country.demonyms.eng.f : "country"} flag`} />
                </div>
                <div className="info">
                    <h2 className="title">{country.name.common}</h2>
                    <div className="pecies">
                        <span className="smallInfo">Native Name : <span className='diff'>
                            {
                                Object.entries(country.name.nativeName)[0][1].common ?
                                    Object.entries(country.name.nativeName)[0][1].common
                                    : "none"
                            } </span> </span>
                        <span className="smallInfo">Population : <span className='diff'>
                            {
                                country ?
                                    country.population.toLocaleString()
                                    : "none"
                            } </span> </span>
                        <span className="smallInfo">Region : <span className='diff'>
                            {
                                country ?
                                    country.region
                                    : "none"
                            }</span> </span>
                        <span className="smallInfo">Sub Region : <span className='diff'>
                            {
                                country ?
                                    country.subregion
                                    : "none"
                            } </span> </span>
                        <span className="smallInfo">Capital : <span className='diff'>
                            {
                                country.capital ?
                                    Object.values(country.capital).map((c, i) => `${c}${Object.values(country.capital)[i + 1] ? ', ' : ''}`)
                                    : "none"
                            } </span> </span>
                        <span className="smallInfo">Currencies : <span className='diff'>
                            {
                                country.currencies ?
                                    Object.entries(country.currencies)[0][1].name
                                    : "none"
                            }</span> </span>
                        <span className="smallInfo">area : <span className='diff'>
                            {
                                country.area ?
                                    country.area.toLocaleString()
                                    : "none"
                            } Km<sup>2</sup></span> </span>
                        <span className="smallInfo">Languages : <span className='diff'>
                            {country.languages ?
                                Object.values(country.languages).map((l, index) => {
                                    return (
                                        <span key={index}>{l}{Object.values(country.languages)[index + 1] ? "," : ""} </span>
                                    );
                                }) : "none"
                            }</span></span>
                    </div>
                    <div className="border">
                        <span className="txt">Border Countries : </span>
                        <div className="bord-countries">
                            {country.borders ?
                                Object.values(country.borders).map((b, index) => {
                                    return (
                                        <span className='bord' key={index}> {b} </span>
                                    );
                                }) : <span className='diff'>none</span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;