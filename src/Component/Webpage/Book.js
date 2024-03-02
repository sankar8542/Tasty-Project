import React,{useState} from "react";
import './Book.css';
import { useNavigate } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Book=()=>{


        let arrs=["https://png.pngtree.com/thumb_back/fh260/background/20230110/pngtree-green-background-photos-download-free-images-hd-image_1538578.jpg",
        "https://media.istockphoto.com/id/1322376077/photo/abstract-white-studio-background-for-product-presentation-empty-room-with-shadows-of-window.webp?b=1&s=612x612&w=0&k=20&c=ocB4cN3X-udri8foZPzHog-0lUO7IKPk_OAB3d9qv0o=",
        "https://marketplace.canva.com/EAFuKIbGJJg/1/0/900w/canva-green-watercolor-instagram-story-background-MpipxzoqTl0.jpg"
        ] 
            const settings = {
            dots: false,
            autoplay:true,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow:1,
            slidesToScroll: 1
            };    

    
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("") 
    const [check,setCheck]=useState(false)
    
    let obj=[
          {Booking:'12',quantity:1},
          {Booking:'13',quantity:2},
          {Booking:'14',quantity:3},
          {Booking:'15',quantity:4},
          {Booking:'16',quantity:5},
          {Booking:'17',quantity:6}
      ]
    

    const hand=(a)=>{
        setUser(a.target.value)
         
     }
     const hand1=(a)=>{
         setPass(a.target.value)   
     }
     console.log(user,pass)
     let x=useNavigate()
      const submit=(e)=>{
      
           e.preventDefault()


        if(user==""||pass==""){
              setCheck(true)
        }
         
            let a=obj.some((e)=>{
                return e.Booking==user&&e.quantity==pass
            })
     
            if(a){
                      x('/')
            }
            else{
                alert('please check wrong password');
            }
        

      }
    return(
        <div>
            

            <div className="carousel">
           <Slider {...settings}>
          {arrs.map((a)=>{
             return <div>
                <img src={a}/>
             </div>

          })}
                 </Slider>
           </div>
            

            <div className="login1"> 
                  
                  <div>
                    <h1>Welcome to Bigbasket!</h1>
                  </div>
            
               <div className="login2">
                    <form >
                <label>BOOKING Table</label><br/>
                <input type='text' value={user} name='name1' onChange={hand}/><br/>
                {user==""&&check?<p>please fill user name</p> : ""}
               
                <label>Quantity</label><br/>
                <input type='password' value={pass} name='name2' onChange={hand1}/><br/>
                {pass==""&&check?<p>please fill  password</p> :""}
                 
                 <button onClick={submit}>Submit</button>
                
                </form>

                </div> 
            </div>

        </div>
    )
}
export default Book;