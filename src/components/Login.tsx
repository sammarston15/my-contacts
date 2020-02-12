import React,{ Component, ChangeEvent } from "react";

const Login: React.FC = () => {

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        
    }

    return(
        <div className='login-background'>
            <div className="login-modal">
                <input className='login-textbox' name='' value='' type="text" onChange={handleChange}/>
                <input className='login-textbox' name='' value='' type="text" onChange={handleChange}/>
                
                <button>login</button>
            </div>
        </div>
    )
}

export default Login;