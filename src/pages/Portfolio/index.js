import React, { Component } from "react";

class Portfolio extends Component {
    render() {
        return (

            <div>
                <h1>Portfolio</h1>
                <hr />
                <div class="container">
                    <div className="row">
                        <div className="card col-lg-6 col-sm-12" style={{ width: '18rem' }}>
                            <img src={require("../../links/bookworm.png")} class="card-img-top" alt="bookworm" />
                            <div className="card-body">
                                <p className="card-text">The BookWorm App allows a user to search for a book and add it to "Read
                                    Later" library. When they click on it a modal appears on screen that displays information
                                    about that book's most relevant NYTimes book review, if available, as well as a link to the
                                    full review on the NYTimes website. After exploring the review, the user has the option to
                                    'save' the book to their library and add it to a stockpile of other saved books to either
                                    read later or give someone a "reading mixtape."
                                <hr />
                                    <a href="https://llkaplan.github.io/BookWorm/">See it in action</a>
                                    <hr />
                                    <a href="https://github.com/llkaplan/BookWorm">Also the github</a>
                                </p>
                            </div>
                        </div>
                        <div className="card col-lg-6 col-sm-12" style={{ width: '18rem' }}>
                            <img src={require("../../links/passwordgenerator.png")} class="card-img-top" alt="password generator" />
                            <div className="card-body">
                                <p className="card-text">This is a password generator. It takes a few steps to go through the entire
                                    process, which includes getting inputs from the user for things like number of special
                                    characters, lowercase characters, uppercase characters and numbers that they want. Lastly,
                                    after getting all the user's input, it randomizes their selection and outputs a password on
                                    the text input. You can also copy the password onto your clipboard.
                                <hr />
                                    <a href="https://llkaplan.github.io/Password-Generator/">See it in action</a>
                                    <hr />
                                    <a href="https://github.com/llkaplan/Password-Generator">Also the github</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="card col-lg-6 col-sm-12" style={{ width: '18rem' }}>
                            <img src={require("../../links/codingquiz.png")} class="card-img-top" alt="coding quiz" />
                            <div className="card-body">
                                <p className="card-text">A basic coding quiz to test html/css/javascript knowledge. It's multiple
                                    choice.
                                <hr />
                                    <a href="https://llkaplan.github.io/coding-quiz/">See it in action</a>
                                    <hr />
                                    <a href="https://github.com/llkaplan/coding-quiz">Also the github</a>
                                </p>
                            </div>
                        </div>
                        <div className="card col-lg-6 col-sm-12" style={{ width: '18rem' }}>
                            <img src={require("../../links/project2.png")} class="card-img-top" alt="shopping app" />
                            <div className="card-body">
                                <p className="card-text">A shopping app where users can navigate between items page, shopping cart and single item page. Includes backend functions including a database.
                            <hr />
                                    <a href="https://rocky-earth-80086.herokuapp.com/">See it in action</a>
                                    <hr />
                                    <a href="https://github.com/llkaplan/project-2">Also the github</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card col-lg-6 col-sm-12" style={{ width: '18rem' }}>
                            <img src={require("../../links/employeeapp.png")} class="card-img-top" alt="database" />
                            <div className="card-body">
                                <p className="card-text">An app using the terminal to create an database of all employees.
                            <hr />
                                    <a href="https://github.com/llkaplan/employee-html">The github</a>
                                </p>
                            </div>
                        </div>
                        <div className="card col-lg-6 col-sm-12" style={{ width: '18rem' }}>
                            <img src={require("../../links/employeemanagement.png")} class="card-img-top" alt="updating employees" />
                            <div className="card-body">
                                <p className="card-text">A terminal application where users can update databases with employees and view them as well. Includes backend functions including a database.
                        <hr />
                                    <a href="https://github.com/llkaplan/employee-managment">The github</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card col-lg-6 col-sm-12" style={{ width: '18rem' }}>
                            <img src={require("../../links/Github.png")} class="card-img-top" alt="github" />
                            <div className="card-body">
                                <p className="card-text">An app using the terminal to get information on applicant through their github profile.
                        <hr />
                                    <a href="https://github.com/llkaplan/Github-User-Info">The github</a>
                                </p>
                            </div>
                        </div>
                        <div className="card col-lg-6 col-sm-12" style={{ width: '18rem' }}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;


