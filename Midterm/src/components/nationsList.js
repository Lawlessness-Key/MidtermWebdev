import React, { useState, useEffect } from 'react';
import './nationsList.css'; 

// This component is responsible para mo display sa list countries
function NationsList() {
    const [nations, setNations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(''); 

    const filteredNations = nations.filter((nation) =>
      nation.name.toLowerCase().includes(search.toLowerCase())
    );
    
  // Using useEffect to fetch data gikan sa API
    // and store it in the nations state
    useEffect(() => {
        console.log('Fetching data...');
        fetch('https://countries-api-abhishek.vercel.app/countries')
          .then((res) => {
            console.log('Response:', res);
            return res.json(); 
          })
          .then((result) => {
            setNations(result.data);
            setLoading(false);
          })
          .catch((err) => {
            console.error('Error fetching data:', err);
            setLoading(false);
          });
      }, []);
  
  
    if (loading) return <p>Loading nations...</p>;
  
    return (
      <div className="container">
  
        {/* Search bar*/}
        <div className="search-bar">
            <form className="mb-4">
            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            </form>
        </div>

      {/* <select>
          <option value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>Select a country</option>
          {filteredNations.map((nation) => (
            <option key={nation.name} value={nation.name}>
              {nation.name}
            </option>
          ))}
        </select> */}
        
        


        {/* Kani nga part is for the result kong unsa nga country gi search */}
        <ul className = "flex flex-col items-center space-y-4">
          {search && filteredNations.map((nation) => (
            // <div className='country-card'>
            //   <li
            //   key={nation.name}
            //   className="bg-gray-100 p-3 rounded-lg shadow-md"
            // >
            //   <p><strong>{nation.name || 'Unknown Name'}</strong></p>
            //   <img src={nation.flag} alt={`${nation.name} flag`} className="w-5 h-2.5" />
            //   <p>Capital: {nation.capital || 'Unknown Capital'}</p>
            //   <p>Region: {nation.region || 'Unknown Region'}</p> 
            //   <p>Subregion: {nation.subregion || 'Unknown Subregion'}</p>
            //   <p>Population: {nation.population || 'Unknown Population'}</p>
            //   <p>Area: {nation.area || 'Unknown Area'}</p>
            //   <p>Languages: {nation.languages ? nation.languages.join(', ') : 'Unknown Languages'}</p>
            //   <p>Timezones: {nation.timezones ? nation.timezones.join(', ') : 'Unknown Timezones'}</p>
            //   <p>Currency: {nation.currencies ? nation.currencies.join(', ') : 'Unknown Currency'}</p>
            //   <p>Gini: {nation.gini || 'Unknown Gini'}</p>
            //   <p>Independence: {nation.independence || 'Unknown Independence'}</p>
              
            // </li>
            // </div>
            <div className="container mt-3">
              <li>
              <div className="card">
              <h2>{nation.name}</h2>
              <img src={nation.flag}  alt={`${nation.name} flag`} />
                  <div className="card-content">
                      <div className = "card-text">
                      <p><strong>Capital:</strong> {nation.capital || 'Unknown Capital'}</p>
                      <p><strong>Region:</strong> {nation.region || 'Unknown Region'}</p>
                      <p><strong>Subregion:</strong> {nation.subregion || 'Unknown Subregion'}</p>
                      <p><strong>Population:</strong> {nation.population || 'Unknown Population'}</p>
                      <p><strong>Area:</strong> {nation.area || 'Unknown Area'}</p>
                       </div>
                  </div>
              </div>
              </li>
              </div>
          ))}
        </ul>
      </div>
    );
  }

export default NationsList;

