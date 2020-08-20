import React, { Component } from 'react';

class ClassComp extends Component {
    state = {
        isLoading: false,
        count: 0,
        member: {
            firstName: "Anass",
            lastName: "Superman",
            age: 22,
            isLoggedIn: false
        }
    }
    logIn = () => {
        // this.setState({ member: { isLoggedIn: true } });
        this.setState(prevState => {
            return { member: { ...prevState.member, isLoggedIn: true } };
        });
        this.setState(prevState => {
            return { member: { ...prevState.member, firstName: "Sergio", job: "Chef" } };
        });
    }
    ageDown = () => {
    this.setState(prevState => {
        return {
            member: { ...prevState.member, age: this.state.member.age - 1 }
        };
    });
    }
    ageUp = () => {
        this.setState(prevState => {
            return {
                member: { ...prevState.member, age: this.state.member.age + 1 }
            };
        });
    }

    
    render() {
        return (
            <div style={{ textAlign: "center" }}>
            <button onClick={this.logIn}>Log Me In</button>
            <div>
                <button onClick={this.ageDown}>Age Down</button>
                <button onClick={this.ageUp}>Age Up</button>
            </div>
        </div>
        );
    }
}

export default ClassComp;