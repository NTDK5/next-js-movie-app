import React from 'react'
import style from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faInstagram, faLinkedinIn,} from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';

const Footer = () => {
    const [Active, setActive] = useState(false)
    const github = <FontAwesomeIcon icon={faGithub} />;
    const Twitter= <FontAwesomeIcon icon={faTwitter} />;
    const instagram = <FontAwesomeIcon icon ={faInstagram} />
    const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />
    const toggle = () =>{
        setActive(true)
    }
    
    window.addEventListener('mouseup',function(event){
        var pol = document.getElementById('pol');
        if(event.target != pol && event.target.parentNode != pol ){
            // pol.style.display = 'none';
            setActive(false);
        }
  });  

  return (
    <>
    <div className={style.top}> <h1>About</h1> <button onClick={()=> toggle()}>i</button></div>
    <section id="pol"  className={Active ? style.active : style.footer} >
        
            {/* <div > */}
                <div className={style.about}>
                    <div className={style.img}></div>
                    <h2>Natan Tamiru</h2>
                    <p >I'm a software engineer specializing in building (and occasionally designing) exceptional degital experience. currently, i'm focused on building accessible, human centred products at Upstatment. </p>
                
                    <div className={style.social_links}>
                        <a href="">{instagram}
                        </a>
                        <a href="#">
                            {github} 
                        </a>
                        <a href="#">
                            {Twitter}
                        </a>
                        <a href="#">
                            {linkedin}
                        </a> 
                    </div>

                 </div>


                <div className={style.input}>
                    <div className={style.email}>
                        <input type="email" id={style.inputs} placeholder='Email' />
                    </div>
                    <div className={style.email}>
                        <input type="email" id={style.inputs} placeholder='Name'/>
                    </div>
                    <div className={style.email}>
                        <textarea id={style.message} placeholder='type your message here' ></textarea>
                        <button>send</button>
                    </div>
                </div>
            {/* </div> */}
        </section>
</>  )
}

export default Footer