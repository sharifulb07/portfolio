import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return (
                <div className='box btn_shadow '>
                <div className='img'>
                    <img src={value.icon} alt='' />
                </div>
                <div className='category d_flex'>
                    <span>{value.title}</span>
                    <label>
                      <i className='far fa-heart'></i> {value.totalLike}
                    </label>
                </div>
                <div className='title'>
                    <h2>Mobile app landing design & Services</h2>
                  <a href='' className='arrow'>
                    <i class='fas fa-arrow-right'></i>
                  </a>
                </div>
              </div>
                )
            })}

           
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
