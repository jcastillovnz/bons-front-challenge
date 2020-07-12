import React from 'react';
import './styles.css'
const Modal =({ handleClose, show, children }): JSX.Element =>{
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div style={{textAlign:'center', marginTop:'20%'}}>
         
          {children}
         
          </div>
          <div style={{position: 'absolute', right: 10,  display:'block', bottom:10}}>
          <button onClick={handleClose}>close</button>
          </div>
        </section>
      </div>
    );
    }


export default Modal;