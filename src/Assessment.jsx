import React from "react";
const cssSty ={
    backgroundColor : 'white'
}
const Assessment = () => {
    return (
        <>
            <h1>View Assessment</h1>
            <div className="col-sm-6 offset-sm-3" style={cssSty}>
                Enter your name : <input type="text" placeholder="name" /><br></br><br></br>
                Enter your class : <input type="text" placeholder="class" /><br></br><br></br>
                Enter your email : <input type="email" placeholder="mail" /><br></br><br></br>
                <a class="btn btn-dark" href="student" role="button">Back</a>
            </div>
            
        </>
    );
};
export default Assessment;