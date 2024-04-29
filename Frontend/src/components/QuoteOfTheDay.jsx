import React, { useState, useEffect } from 'react';

function QuoteOfTheDay() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch a random quote from an API
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
      })
      .catch(error => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div className="quote-of-the-day">
      <p> ~ {quote} ~ </p>
    </div>
  );
}

export default QuoteOfTheDay;