"use client"
import { useEffect, useState } from 'react';

const useCityAutocomplete = () => {
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      const autocompleteService = new window.google.maps.places.AutocompleteService();

      autocompleteService.getPlacePredictions(
        { input: query, types: ['(cities)'] },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setAutocompleteResults(predictions);
          } else {
            setAutocompleteResults([]);
          }
        }
      );
    } else {
      setAutocompleteResults([]);
    }
  }, [query]);

  return { query, setQuery, autocompleteResults };
};

export default useCityAutocomplete;
