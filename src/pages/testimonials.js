import React from 'react';
import Header from '../components/header';
import Headertwo from '../components/headertwo';
import imgOne from '../img/one.jpg';
import imgTwo from '../img/two.jpg';
import imgThree from '../img/three.jpg';
import imgFour from '../img/four.jpg';

const Testimonials = () => {

    

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
                                <h1>TESTIMONIALS</h1>
                            </div>

                        <div className='row'>
                           
                            <div className='col-12 col-md-6'>
                                <div className='testi_main d-flex text-white'>
                                    <div className='test_img'><img src={imgOne} alt='imgOne' /></div>
                                    <div className='test_content'>
                                        <h6>HAILEY D'eONA</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <p className='starsReview'><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-6'>
                                <div className='testi_main d-flex text-white'>
                                    <div className='test_img'><img src={imgTwo} alt='imgOne' /></div>
                                    <div className='test_content'>
                                        <h6>ELIANA SARCO</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typeset the industry's standard dummy</p>
                                        <p className='starsReview'><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-6'>
                                <div className='testi_main d-flex text-white' >
                                    <div className='test_img'><img src={imgThree} alt='imgOne' /></div>
                                    <div className='test_content'>
                                        <h6>BELLAMY LEO</h6>
                                        <p>The printing and typesett Lorem Ipsum is simply dummy text of ing industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <p className='starsReview'><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-md-6' >
                                <div className='testi_main d-flex text-white'>
                                    <div className='test_img'><img src={imgFour} alt='imgOne' /></div>
                                    <div className='test_content'>
                                        <h6>J. JOHN THOMAS</h6>
                                        <p>simply dummy text of the printing and tyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                                        <p className='starsReview'><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
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

export default Testimonials;