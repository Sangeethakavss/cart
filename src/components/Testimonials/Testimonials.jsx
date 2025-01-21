import React, { useRef } from 'react'
import './Testimonials.css'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideFoward = ()=>{
      if(tx > -50){
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }
 const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div className='testimonials'>
            <img src={nextIcon} alt='' className='next-btn' onClick={slideFoward}/>
            <img src={backIcon} alt='' className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt=''/>
                                <div>
                                    <h3>Mercy Snekha</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at edusity was one of the best decisos I have ever made. The Supportive community, state-of-the-art-facilitie, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
    
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt=''/>
                                <div>
                                    <h3>Mercy Snekha</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at edusity was one of the best decisos I have ever made. The Supportive community, state-of-the-art-facilitie, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
    
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt=''/>
                                <div>
                                    <h3>Mercy Snekha</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at edusity was one of the best decisos I have ever made. The Supportive community, state-of-the-art-facilitie, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
    
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt=''/>
                                <div>
                                    <h3>Mercy Snekha</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at edusity was one of the best decisos I have ever made. The Supportive community, state-of-the-art-facilitie, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
    
        </div>
      )
    }
    

 

export default Testimonials