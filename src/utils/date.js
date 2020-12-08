import React from 'react';


class DateUtils extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         date: getInitialDate()
    //     }
    //     this.handleDate = this.handleDate.bind(this);
    //     this.getFormatedDate = this.getFormatedDate.bind(this);
    // }

    getFormatedDate(today) {
        var formatedDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
        return formatedDate;
    }

    // handleDate(dateCall) {
    //     var newDate = dateCall;
    //     this.setState({
    //         date: newDate
    //     });
    // }

    subDateCall(currentDay) {

           // console.log(currentDay);
      /*  var updatedDate = today.getDate()-1;
        date = updatedDate.getFullYear() + '-' + (updatedDate.getMonth()) + '-' + updatedDate.getDate();
        return date;*/
    }

    // addDateCall() {
    //     var updatedDate = today.getDate()+1;
    //     date = updatedDate.getFullYear() + '-' + (updatedDate.getMonth()) + '-' + updatedDate.getDate();
    //     return date;
    // }

  
    
}
export default DateUtils;