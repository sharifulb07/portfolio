import React from "react"
import "./Home.css"
import hero from "../pic/photo.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Shariful Islam</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Frontend Developer.", " React Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I am an experienced front-end web developer and professional React Developer with a number of Projects experience working with a large variety
               of technologies—over half of that working remotely. He has an abundance of experience in web development with a focus on JavaScript.
                I feel equally comfortable collaborating with a team of developers or only flying solo.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <a href="https://github.com/sharifulb07"><i class="fa-brands fa-github"></i></a>
                  </button>
                  <button className='btn_shadow'>
                   <a href="https://www.instagram.com/adiyat5511/"><i class='fab fa-instagram'></i>   </a> 
                  </button>
                  <button className='btn_shadow'>
                  <a href="https://www.linkedin.com/in/shariful-islam-663a02152/"><i class='fab fa-linkedin-in'></i>   </a>  
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                <i class="fa-brands fa-react"></i>
                </button>
                <button className='btn_shadow'>
                <i class="fa-brands fa-unity"></i>
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <div className="myStyle">

              <img src={hero} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
