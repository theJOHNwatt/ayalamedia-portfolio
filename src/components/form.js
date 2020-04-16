import React, { Component } from 'react';





class Form extends Component {


    constructor(props) {
        super(props);
        this.state = {
            //in here put the userID you got from emailjs 
            REACT_APP_EMAILJS_USERID: ' user_xa3zAGUXkOUzusVlZP5xw',
            //the template ID of the template you created in the emailjs
            templateId: 'ayalamedia',
            formSubmitted: false,
            feedback: 'Test'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
    }


    onSubmit(event) {
    event.preventDefault();
        const { templateId } = this.state;
        //Getting the variables from the forms
        this.sendFeedback(
            templateId,
            this.sender,
            this.refs.email.value,
            this.state.feedback,
            this.refs.lastname.value,
            this.refs.firstname.value,
            this.refs.phone.value,
            this.refs.message.value,
        );
        this.setState({
            formSubmitted: true
        });
    }

    //In here the data is send to the mailgun server with the correct templateID


    sendFeedback(templateId, senderEmail, receiverEmail, feedback, lastname, firstname, phone, message, email) {

        window.emailjs
            .send('mailgun', templateId, {
                senderEmail,
                receiverEmail,
                feedback,
                lastname,
                firstname,
                phone, 
                message,
                email
            })
            .then(res => {
                console.log('MAIL SENT!')
                alert("Mail Sent")
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors if the mail didnt passed 
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }
    render() {


        return (
            <div>
                <div className="row">
                    <form id="myform" className="col s12" onSubmit={this.onSubmit}>
                        <ul className="collection">
                            <li className="collection-item">Enter User Details</li>
                            <li className="collection-item">
                                <div className="input-field col s6">
                                    <p>first name</p>
                                    <input id="firstname" type="text" className="validate" ref="firstname" required />
                                </div>
                                <div className="input-field col s6">
                                <p>last name</p>
                                    <input id="lastname" type="text" className="validate" ref="lastname" name="lname" required />
                                </div>
                                <div className="input-field">
                                <p>email name</p>
                                    <input id="email" type="email" className="validate" ref="email" required />
                                </div>
                                <div className="input-field col s6">
                                <p>phone name</p>
                                    <input id="phone" type="text" className="validate" ref="phone" />
                                </div>
                                <div className="input-field col s6">
                                <p>message</p>
                                    <input id="message" type="text" className="validate" ref="message" />
                                </div>
                            </li>
                        </ul>
                        <input type="submit" className="btn green" value="Confrim" />
                    </form>
                </div>
            </div>
        )
    }
}


export default Form;