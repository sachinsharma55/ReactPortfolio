import React from 'react';
import Header from '../components/header';
import Headertwo from '../components/headertwo';
import imgOne from '../img/app-development.png';
import imgTwo from '../img/digital-services.png';
import imgThree from '../img/desgin.png'

const About = () => {
  return ( 

    <>    
    <Headertwo/>
    <section>
        <div className='container-fluid'> 
            <div className='row'>
                <div className='col-2 px-0'>
                    <Header/>
                </div>

                <div className='col-10 p-3'>
                    <div className='about_content p-5'>
                            <div className='main_page-heading mb-5' data-aos="fade-down">
                                <h1>ABOUT ME</h1>
                            </div>


                    <div className='row'>
                        <div className='col-12'>

                            <div className='about_cont mb-5'>
                                <h2>I'm <span>Benjamin Smith</span>, Graphic Designer/Photographer</h2>
                                <p>stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letrase try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                            </div>
                           
                        </div>

                        <div className='col-7'>
                            <div className='counter_box' data-aos="fade-left"  data-aos-anchor-placement="right-left">

                                <div className='counterSingle'>
                                   <h1>90+</h1> 
                                   <p>Clients</p>
                                </div>

                                <div className='counterSingle'>
                                   <h1>10+</h1> 
                                   <p>Clients</p>
                                </div>

                                <div className='counterSingle'>
                                   <h1>17+</h1> 
                                   <p>Clients</p>
                                </div>

                                <div className='counterSingle'>
                                   <h1>50+</h1> 
                                   <p>Clients</p>
                                </div>



                            </div>
                        </div>


                        <div className='col-5'>
                            <div className='WWDo_box ' data-aos="fade-left"  data-aos-anchor-placement="right-left">
                                <h2>What I Do?</h2>

                            <div className='wwd_single d-flex align-items-center'>
                                <div className='wwd_img'>
                                        <img src={imgOne} alt='webDesign' />
                                </div>
                                <div className='wwd_content'>
                                    <h4>Web Designing</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                </div>
                            </div> 

                            <div className='wwd_single d-flex align-items-center'>
                                <div className='wwd_img'>
                                        <img src={imgThree} alt='webDesign' />
                                </div>
                                <div className='wwd_content'>
                                    <h4>Graphic Designing</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                </div>
                            </div> 

                            <div className='wwd_single d-flex align-items-center'>
                                <div className='wwd_img'>
                                        <img src={imgTwo} alt='webDesign' />
                                </div>
                                <div className='wwd_content'>
                                    <h4>Web Development</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                </div>
                            </div> 




                            </div>
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

export default About;