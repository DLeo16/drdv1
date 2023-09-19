import React from 'react'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'
import tiktok from './images/tiktok.png'
import './Demo.css'

export default function MainPage() {
    const MediaData = [
        {
          img:facebook,
          title: "facebook",
          href: "https://www.facebook.com"
        },
        {
          img:instagram,
          title: "instagram",
          href: "https://www.instagram.com"
        },
        {
          img:twitter,
          title: "twitter",
          href: "https://twitter.com"
        },
      
        {
          img:tiktok,
          title: "tiktok",
          href: "https://tiktok.com"
        },
  ]
  return (
    
    <React.Fragment>
    <main>
<div className="c"><h2>Contact Me For Future Work and Partnerships at:</h2></div>
        <div className="demo">
            {
                
                MediaData.map((item, index) => {
                    return(
                        
                        <div key={index}>
                            <a href={item.href} target="_blank">
                            <img src={item.img} alt='media' className="h-28"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>

                        </div>
                    )
                })
            }
        </div>
      
    </main>
  </React.Fragment>
  )
}