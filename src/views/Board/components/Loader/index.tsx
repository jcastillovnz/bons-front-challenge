import React from 'react';
import './styles.css'
const IconManager =({type}:{type:string}): JSX.Element =>{
return (
<div className="loader-container" >
<div className={type}></div>
</div>
)
    }




export default IconManager;