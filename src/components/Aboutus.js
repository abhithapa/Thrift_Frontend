import './Css/Navbar.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import"./Home.css"
import SliderHome from './MainPage/Slider';
import Product from './ProductContainer/Product';


const Aboutus=()=>{    
    const [isAuth, setAuth] = useState(false)
    let token = localStorage.getItem('token');
    console.log()
    useEffect(() => {
        if(token){
            setAuth(true)
        }
        else{
            setAuth(false)
        }
    }, [token])
    
    return(
        <div className='ASS'>
        <div className='About'>
        {/* <section class="header-section">
        <div class="center-div font-weight-bold">
            <h1 class="font-weight-bold">Welcome To The Donation Club </h1>
            <p class="font-weight-bold">We are for each other</p>
            {!isAuth && <div class="header-buttons">
                <Link class="font-weight-bold" to="/Home">Login</Link>
                <Link class="font-weight-bold" to="/Signup">SignUp</Link>
            </div>}
        </div>
    </section> */}
     <>
      <section className='home'>
        <div className='container d_flex'>
          {/* <Categories /> */}
          <SliderHome />
        </div>
      </section>
    </>
    <>
    <section className='body'>
        <div className = 'container f_flex'>

<Product/>
        

        </div>


    </section>
    </>
   
    

  

</div>
<>
<section class="header-extradiv">
    <div class="container">
        <div class="row">
            <div class="extra-div col-lg-4 col-md-4 col-12">
                <a href="#"><i class="fa-3x fa fa-truck" aria-hidden="true"></i></a>

                <h2>Delivery</h2>
                <p class="font-weight-bold">We offer competitive prices on our 100 million plus product any range. A delivery service provides fast, often same-day delivery, within a particular area. A service may specialize in a specific type of delivery, such as delivering food, or it might deliver all kinds of packages</p>
            </div>
            <div class="extra-div col-lg-4 col-md-4 col-12">
                <a href="#"><i class="fa-3x fa fa-money-check" aria-hidden="true"></i></a>
                <h2>Safe Payment</h2>
                <p class="font-weight-bold">Payment service providers (PSPs) are third-party companies that help business owners accept online payment methods, such as online banking, credit cards, debit cards, and electronic wallet applications. PSPs ensure that transactions are delivered safely and reliably.</p>
            </div>
            <div class="extra-div col-lg-4 col-md-4 col-12">
                <a href="#"><i class="fa-3x fa fa-shield" aria-hidden="true"></i></a>
                
                <h2>Shop with confidence</h2>
                <p class="font-weight-bold">you can be confident that when using our service, you can expect the highest level of service and that if any problems should arise, we'll deal with them promptly and fairly and if we don't, Trading Standards will hold us to account.</p>
            </div>
        </div>
    </div>
</section>


</>

</div>

    )
}
export default Aboutus;