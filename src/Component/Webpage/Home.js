import React from "react";
import"./Home.css"
import { CgPlayButtonO } from "react-icons/cg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaDoorOpen } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { MdDinnerDining } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Home=()=>{

       
     let a= useNavigate();
      const handle =()=>{
          a("/Book")
           
      }
            let array=["gallery-1.jpg",
                       "gallery-2.jpg",
                       "gallery-3.jpg",
                       "gallery-4.jpg",
                       "gallery-5.jpg"
                ] 

        const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        arrows: false,
        speed: 900,
        slidesToShow:1,
        slidesToScroll: 1
        };    
            
      return (
            <div>

                <div>

                     <div className="container">
                       <div className="container1">
                          <h1>Tasty</h1>
                       </div>
                       <div className="container2">
                          
                          <a href="">Home</a>
                          <a href="">About</a>
                          <a href="">Service</a>
                          <a href="">Chefs</a>
                          <a href="">Gallery</a>
                          <a href="">Contact</a>
                       </div>
                       <div className="container3">
                           <button>Get Started</button>
                       </div>

                     </div>


                     <div className="banner">

                         <div></div>
                         
                         <div className="banner2">
                            
                         <div className="banner3">
                             <h1><i>Enjoy Your Healthy Delicious Food</i></h1>
                             <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. 
                                Eum quas beatae cumque eum quaerat.</p>
                         </div>
                         <div className="banner4">

                             <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/hero-img.png"/>
                         </div>

                          
                         </div>
                     </div>
                          <div className="banner5">
                          
                          <div className="banner6">
                             <button onClick={handle}>Book a table</button>
                          </div>
                          
                          <div className="banner7">
                              <a href="https://youtu.be/LXb3EKWsInQ?t=7"><CgPlayButtonO /></a>
                             <button> <p></p>Watch Video</button>
                          </div>

                          </div>


                      <div className="about">
                      <h3>ABOUT US</h3>
                       <h1><i>Learn More <span>ABOUT US</span> </i></h1>
                      </div>

                     <div className="container-about">

                         <div className="container-about1">
                            <img src="about.jpg"/>
                         </div>
                         <div>

                            <div className="container-about2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul>
                                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                </ul>

                                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit 
                                    esse cillum dolore eu fugiat nulla pariatur. </p>

                                    <iframe width="600" height="315" src="https://www.youtube.com/embed/LXb3EKWsInQ?si=U3sjjUBEaLYtB3R2" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" fullscreen></iframe>
                            </div>
                         </div>
                     </div>


                     <div className="container-cards">

                         <div className="container-cards1">
                            <h5></h5>
                            <h1>Why Choose Tasty?</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in 
                                reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore 
                                quibusdam vel necessitatibus optio ad corporis.</p>
                         </div>
                    
                         <div className="container-cards2">
                            <h5><FaBowlFood /></h5>
                            <h1>Corporis voluptates officia eiusmod</h1>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                         </div>

                    

                         <div className="container-cards2">
                            <h5><MdDinnerDining /></h5>
                            <h1>Ullamco laboris ladore pan</h1>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                         </div>
                

                         <div className="container-cards2">
                            <h5><LuChefHat /></h5>
                            <h1>Labore consequatur incidid dolore</h1>
                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                         </div>
            
                     </div>

                     
                     <div className="our-clients">
                          
                       
                        <div className="our-clients1">
                            <h1>120+</h1>
                            <h4>Items</h4>
                        </div>
                        <div className="our-clients1">
                            <h1>65+</h1>
                            <h4>Flavoures</h4>
                        </div>

                        <div className="our-clients1">
                            <h1>100+</h1>
                            <h4>Hotels</h4>
                        </div>

                        <div className="our-clients1">
                            <h1>1Lakhs+</h1>
                            <h4>customer</h4></div>
                     </div>

                      <div className="container-foods2">
                        <h1>Check our <span>Tasty menu</span></h1>
                      </div>
                     <div className="container-foods">

                        <div className="container-foods1">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png"/>
                            <h2>Est Eligendi</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$12.94</h1>
                        </div>

                        <div className="container-foods1">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-2.png"/>
                            <h2>Aut Luia</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$23.98</h1>
                        </div>

                        <div className="container-foods1">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-3.png"/>
                            <h2>Est Eligendi</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$12.78</h1>
                        </div>

                        <div className="container-foods1">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-4.png"/>
                            <h2>Eos Luibusdam</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$22.90</h1>
                        </div>

                        <div className="container-foods1">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-5.png"/>
                            <h2>Eos Luibusdam</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$11.70</h1>
                        </div>

                        <div className="container-foods1">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-6.png"/>
                            <h2>Laboriosam Direva</h2>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                            <h1>$24.89</h1>
                        </div>
                     </div>
                  
                   <div className="container-teams2">
                     <p>CHEFS</p>
                     <h1>Our <span>Proffesional Chefs</span></h1>
                   </div>
                     <div className="container-teams">
                         
                         <div className="container-teams1">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-1.jpg"/>
                         </div>

                         <div className="container-teams1">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-2.jpg"/>
                         </div>

                         <div className="container-teams1">
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-3.jpg"/>
                         </div>

                         <div className="container-teams1">
                            <img src="https://st.depositphotos.com/1518767/4293/i/450/depositphotos_42930411-stock-photo-concentrated-male-chef-garnishing-food.jpg"/>
                         </div>
                     </div>


                     <div>
                        <div className="carousel12">
                            <h1>Our <span> Gallery</span></h1>
                        </div>
                     <div className="carousel">
                    <Slider {...settings}>
                    {array.map((a)=>{
                        return <div>
                            <img src={a}/>
                        </div>

                    })}
                            </Slider>
                    </div>
                                </div>


                     <div className="cont-frame">
                        <h1>Need help you?<span>Contact Us</span></h1>
                     </div>
                     <div className="frame">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.121176995186!2d76.95710774475114!3d11.017584126337601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855910aed83%3A0x80875de5cd370a9d!2sGandhipuram%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1709303977988!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
                     </div>


                     <div className="container-details">

                        <div className="container-details1">
                            <div className="details1">
                                <h1><FaMapMarkedAlt /></h1>
                            </div>
                            <div className="details2">
                                <h2>Our Address</h2>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                        <div className="container-details1">
                           
                           <div className="details1">
                                <h1><IoMdMail /></h1>
                            </div>
                            <div className="details2">
                                <h2>Email Us</h2>
                                <p>contact@example.com</p>
                            </div>
                        </div>

                        <div className="container-details1">
                            
                             <div className="details1">
                                <h1><BiSolidPhoneCall /></h1>
                            </div>
                            <div className="details2">
                                <h2>Call Us</h2>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>

                        <div className="container-details1">
                            
                             <div className="details1">
                                <h1><FaDoorOpen /></h1>
                            </div>
                            <div className="details2">
                                <h2>Opening Hours</h2>
                                <p>Mon-Sat: 11AM - 23PM; Sunday: Closed</p>
                            </div>
                        </div>

                     </div>


                     <div className="container-inform">

                     <form className="infrom">
			      <label for="hello" >yourname </label><br></br>
			      <input id="hello" class='solo' type="text" placeholder="Please enter the name"  rows="1" cols="60"></input><br></br>
				  <label for="hello" >yourEmail </label><br></br>
				  <input id="hello" class='solo' type="text" placeholder="Please enter the Email"  rows="3" cols="60"></input><br></br>
				  <label for="hello" >subject </label><br></br>
				  <input id="hello" type="text" placeholder="Please enter the Subject"  rows="10" cols="60"></input><br></br>
				   <label for="hello" >Message</label><br></br>
				  <textarea id="hello" type="text" placeholder="Enter the Message"  rows="10" cols="60"></textarea>
			   </form>

                    <div className="infrom1">
                    <button>Submit</button>
                    </div>

                     </div>
                       
                    
                     <div className="footer">
                         
                     <div className="footer1">
                                <h2>Our Address</h2>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>

                            <div className="footer1">
                                <h2>Opening Hours</h2>
                                <p>Mon-Sat: 11AM - 23PM; Sunday: Closed</p>
                            </div>

                            <div className="footer1">
                                <h2>Call Us</h2>
                                <p>+1 5589 55488 55</p>
                            </div>
                     </div>
                     <div></div>
                </div>
            </div>
      )
}

export default Home;