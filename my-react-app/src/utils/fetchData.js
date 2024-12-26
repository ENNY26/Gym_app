export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key':'58fe3b722dmsh1389caffac12c9ap1b2543jsnc082bf59f5ba',  // Assign directly here
  }
};

export const youtubeoptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '58fe3b722dmsh1389caffac12c9ap1b2543jsnc082bf59f5ba',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
