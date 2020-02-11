import React,{ Component } from "react";

const Login: React.FC = () => {
    return(
        <div className='login-background'>
            <div className="login-modal">
                <input className='login-textbox' name='' value='' type="text"/>
                <input className='login-textbox' name='' value='' type="text"/>
                
                <button>login</button>
            </div>
        </div>
    )
}

export default Login;