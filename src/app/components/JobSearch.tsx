"use client";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

export const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("Florence, Italy");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchTerm, "in", location);
  };

  return (
    <div className="flex flex-col gap-4">
      <SearchInputs/>
      <div className="text-[#202430] text-base opacity-70 mt-12 md:mt-0">
        <span>Popular : </span>
        <span>UI Designer, UX Researcher, Android, Admin</span>
      </div>
    </div>
  );
};

const SearchInputs = () => {
  const [location, setLocation] = useState('Florence, Italy');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const locations = [
      'Florence, Italy',
      'Rome, Italy',
      'Milan, Italy',
      'New York, USA',
      'London, UK',
      'Berlin, Germany'
  ];

  return (
      <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row w-[75vw] lg:w-[870px] h-[90px]">
          <div className="flex w-3/5 items-center px-4 py-2 md:w-2/5 border-b md:border-b-0 md:border-r border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input 
                  type="text" 
                  placeholder="Job title or keyword" 
                  className="w-full focus:outline-none text-gray-600" 
              />
          </div>
          
          <div className="flex items-center px-4 py-2 md:w-2/5 border-b md:border-b-0 md:border-r border-gray-200 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div 
                  className="w-full text-gray-600 flex items-center justify-between cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                  <input 
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full focus:outline-none text-gray-600"
                      placeholder="Select location"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
              </div>
              
              {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      {locations.map((loc, index) => (
                          <div 
                              key={index} 
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                  setLocation(loc);
                                  setIsDropdownOpen(false);
                              }}
                          >
                              {loc}
                          </div>
                      ))}
                  </div>
              )}
          </div>
          
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium mt-2 md:mt-0 md:ml-2 w-[200px] cursor-grab">
              Search my job
          </button>
      </div>
  );
};