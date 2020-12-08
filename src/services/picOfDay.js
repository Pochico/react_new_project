import React from 'react';

class PicOfDay extends React.Component {
   

    fetchDate(date) {
        const apiUrl = 'https://api.nasa.gov/planetary/apod?date='+date+'&api_key=HcGWTXWUhVT7HsEI9OkttaomUjyHHGP6ChRGUCne';
        var data = fetch(apiUrl).then((response) => response.json());

        return data;
    }
    
}



export default PicOfDay;