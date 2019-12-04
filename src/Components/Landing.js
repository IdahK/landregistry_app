import React from "react";
// import { Image } from 'react-bootstrap';
export class Landing extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (
        <div className="text-center landing">
            <img src={require("../img/image2vector.svg")} alt="242x200" />
            <h3>Private Land Registry</h3>
            <p>Login or Sign up to continue</p>
        </div>
        );
    }
}


  export default Landing;