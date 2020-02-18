import React, { Component } from "react";


class Contact extends Component {
render() {
    return (
        <div>
                 <h1>Contact</h1>
                <form>
                    <div className="form-group">
                        <label for="text">Name</label>
                        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
                    </div>

                    <div className="form-group">
                        <label for="text">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    <div className="form-group">
                        <label for="text">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
                <button type="button" className="btn btn-primary">Submit</button>
        </div>
    )
}
}
                              
export default Contact;
                              
                              
