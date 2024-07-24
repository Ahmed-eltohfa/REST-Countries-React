import React, { useEffect, useState } from 'react'
import Country from './Country';
import './country.css';
import { MdSearch } from 'react-icons/md';

function CountryList() {
    const [finData, setFinData] = useState([]);
    const [region, setRegion] = useState('All');
    const [searchTxt, setSearchTxt] = useState('');
    const [finArr, setFinArr] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setFinData(data));
    }, [])

    useEffect(() => {
        const arrOcountries = finData.map((country, index) => {
            if (searchTxt) {
                if (country.name.common.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()) && (region === country.region || region === 'All')) {
                    return (
                        <Country country={country} key={index} id={index} />
                    )
                }
            }
            else if (region === country.region || region === 'All') {
                return (
                    <Country country={country} key={index} id={index} />
                )
            }
            return null;
        })
        setFinArr(arrOcountries);
    }, [region, searchTxt, finData])

    return (
        <>
            <div className='countryList'>
                <div className="filter">
                    <div className="input" >
                        <MdSearch fill='var(--txt-color)' size={'22px'} />
                        <input type="text" placeholder='Search For a Country...' onChange={(e) => { setSearchTxt(e.target.value) }} />
                    </div>
                    <div className="select">
                        <select className='options' name="region" id="selection" onChange={(e) => { setRegion(e.target.value) }}>
                            <option value="" disabled selected hidden>Filter By Region</option>
                            <option value="All">All</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Europe">Europe</option>
                            <option value="Americas">America</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>
                <div className="container">
                    {finArr}
                </div>
            </div>
        </>
    )
}

export default CountryList;