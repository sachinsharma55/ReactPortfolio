import React from 'react';
import { Link } from 'react-router-dom';
import Headertwo from '../components/headertwo';


const Home = () => {
  return (
    
    <>
        
        <Headertwo/>
 
        <section>
              <div className='container-fluid '> 

                    <div className='row align-items-center'>
                        <div className='col-12 col-md-6 '>
                           <div className='home_para px-4 ' data-aos="fade-up" data-aos-duration="2500">
                                <h3>HI THERE!</h3>
                                <h1>I'M <span className='name'>BENJAMIN</span></h1>

                                <div className='designation'>
                                    <p>GRAPHIC DESIGNER AND PHOTOGRAPHER</p>
                                </div>

                                <p><b>Lorem</b> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.</p>

                                <Link to='/about' >KNOW MORE ABOUT ME</Link>

                           </div>
                        </div>

                        <div className='col-12 col-md-6'>
                            <div className='main_img' data-aos="fade-down" data-aos-duration="2500">
                                
                            </div>
                            
                        </div>   

                       

                    </div>

              </div>      
        </section>
        
    </>
    

  )
}

export default Home;