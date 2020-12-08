import React from 'react';

class PicOfDay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: getInitialDate()
        }
        this.handleDate = this.handleDate.bind(this);
        this.getFormatedDate = this.getFormatedDate.bind(this);
    }

    getFormatedDate() {
        var today = new Date(),
        formatedDate = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate();
        return formatedDate;
    }

    handleDate(dateCall) {
        var newDate = dateCall;
        this.setState({
            date: newDate
        });
    }

    subDateCall() {
        var updatedDate = today.getDate()-1;
        date = updatedDate.getFullYear() + '-' + (updatedDate.getMonth()) + '-' + updatedDate.getDate();
        return date;
    }

    addDateCall() {
        var updatedDate = today.getDate()+1;
        date = updatedDate.getFullYear() + '-' + (updatedDate.getMonth()) + '-' + updatedDate.getDate();
        return date;
    }

    componentDidMount(fetchedDate) {
        const apiUrl = 'https://api.nasa.gov/planetary/apod?'+fetchedDate+'api_key=HcGWTXWUhVT7HsEI9OkttaomUjyHHGP6ChRGUCne';
        var data = fetch(apiUrl).then((response) => response.json());

        return data;
    }
    
}



export default PicOfDay;