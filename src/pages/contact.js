import React from 'react';
import Header from '../components/header';
import Headertwo from '../components/headertwo';
import pc from '../img/monitor.png';
import call from '../img/call.png';

const Contact = () => {
  return (

    <>    
    <Headertwo/>
    <section>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2 px-0'>
                    <Header/>
                </div>

                <div className='col-10 p-3 '>
                    <div className='about_content p-5'>
                            <div className='main_page-heading mb-5' data-aos="fade-down">
                                <h1>CONTACT US</h1>
                            </div>

                        <div className='row'>
                            <div className='col-12'>
                                    <div className='about_cont mb-5'>
                                            <h2>Feel <span>free</span> to contact me!</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                    </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 col-md-6'>

                                <div className='webmail d-flex align-items-center m-auto'  data-aos="zoom-out-right">
                                      <img src={pc} alt='pc' />
                                      
                                      <p>www.yourwebsite.com <br/>
                                            yourmail@gmail.com
                                      </p>
                                       
                                </div>

                            </div>
                            <div className='col-12 col-md-6'>

                                <div className='webmail d-flex align-items-center'  data-aos="zoom-out-left">
                                        <img src={call} alt='call' />
                                        <p>+91 78676 76545<br/>+91 67890 87890</p>
                                        
                                </div>

                            </div>

                            <div className='patience mt-4 pt-5 text-center' data-aos="fade-up" data-aos-duration="3000"> 
                                <h1>THANKS FOR <span>PATIENCE!</span></h1> 
                            </div>


                        </div>





                    </div>
                </div>


            </div>
        </div>
    </section>
    


    </>

    
  )
}

export default Contact;