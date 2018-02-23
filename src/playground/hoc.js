//Higher order component

import React from "react";
import ReactDOM from "react-dom";


const Info = (props)=>(
    <div>
        <h1>Inform</h1>
        <p>info: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) =>{

    return (props)=>(
        <div>
            
            {props.isAdmin && <p> Danger keep away </p>}

            <WrappedComponent {...props}/>
        </div>
    )

};

const requireAuthenticate = (WrappedComponent) =>{

    return (props)=>(
        <div>
            
            {!props.isAuth && <p> pls login </p>}

            {props.isAuth && <WrappedComponent {...props}/>}
        </div>
    )

};

const AuthInfo = requireAuthenticate(Info)
const AdminInfo = withAdminWarning(Info) 
var appRoot = document.getElementById("app");
//ReactDOM.render(<AdminInfo info="hello world" isAdmin={true} />,appRoot);
ReactDOM.render(<AuthInfo info="hello world" isAuth={false} />,appRoot);

