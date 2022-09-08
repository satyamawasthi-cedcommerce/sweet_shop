import React from 'react'

export default function Contact() {
  return (
    <div>
        <h1 className='contactHead'>Get in touch</h1>
        <div className='contactDiv'>
            <div style={{width:"40%"}}>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ee5502149164353.62e25f51f0e8b.jpg" alt="..." style={{width:"100%" , borderRadius:"10px"}}/>
            </div>
            <div style={{width:"40%"}}>
                <h1 className='conatctContent'> Reach out to us<br/></h1>
                <input type="text" className='conatctInput' placeholder='Enter E-Mail'/>
                <input type="text" className='conatctInput' placeholder='Provide your query' /><br/>
                <button className='contactBtn'>Submit</button><br/><br/>
                <i className="fa-brands fa-instagram" style={{fontSize:"25px" , color:"white"}}></i> &nbsp; <i className="fa-brands fa-facebook" style={{fontSize:"25px" , color:"white"}}></i> &nbsp;<i className="fa-brands fa-youtube"  style={{fontSize:"25px" , color:"white"}}></i>
            </div>
        </div>
    </div>
  )
}
