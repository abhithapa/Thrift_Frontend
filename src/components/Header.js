import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {
  const logOut=()=>{
    localStorage.clear();
    window.location.replace('/');
  }
  var menu;
  if(localStorage.getItem('token')){
    menu=(
      <div>
      <Container>
        
          <Wrapper>
            
              <Left>
              {/* <Link className="navbar-brand" to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMzUbI9ynwunjpshVHF0PzMzl_MUem3SKNCFwYZblRNaPQIxdQ9BBLgVX6XH1LoTa254&usqp=CAU " alt="logo" width="150" height="50 "></img>
                   <span className="hidden">Thrift Store</span></Link> */}
                 {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button> */}
              
              <Language><Link  to="/"> Home</Link></Language>
                  <SearchContainer className='form-control input-lg'>
                      <Input style={{color:"gray", fontSize:17, width:900}} placeholder="search" />
                      <SearchIcon style={{color:"gray", fontSize:20, width:300}} />
                  </SearchContainer>
              </Left>
              <Center>
                 
              </Center>
              <Right>
              <MenuItem><Link to="/AddProduct"> Add Product</Link></MenuItem>
                  <MenuItem><button onClick={logOut}>Log Out</button></MenuItem>
                  
                  <MenuItem>
                      <Badge  color="primary">
                          {/* <MailIcon color="action" />*/} 
                          <ShoppingCartOutlinedIcon />
                      </Badge>
                  </MenuItem>
              </Right>
          </Wrapper>
      </Container>
      </div>
    )
  }else{
    menu=(
<div>
    <Container>
      
        <Wrapper>
          
            <Left>
            
               {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button> */}
            
            <Language><Link  to="/"> Home</Link></Language>
                <SearchContainer className='form-control input-lg'>
                    <Input style={{color:"gray", fontSize:17, width:900}} placeholder="search" />
                    <SearchIcon style={{color:"gray", fontSize:20, width:300}} />
                </SearchContainer>
            </Left>
            <Center>
            
            </Center>
            <Right>
                <MenuItem><Link to="/Signup"> Register</Link></MenuItem>
                <MenuItem><Link to="/Home"> Login</Link></MenuItem>
                <MenuItem>
                    <Badge  color="primary">
                        {/* <MailIcon color="action" />*/} 
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
    </div>
    )
              }

    return(
      <Container style={{height:"110px", width:"100%"}}>
        <Wrapper >
          
      <Link className="navbar-brand" to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMzUbI9ynwunjpshVHF0PzMzl_MUem3SKNCFwYZblRNaPQIxdQ9BBLgVX6XH1LoTa254&usqp=CAU " alt="logo" width="150" height="50 "></img>
                 <span className="hidden">Thrift Store</span></Link>
                 {menu}
                 
                 </Wrapper>
                 </Container>

    
    )
     
}




const Container=styled.div`
    height:80px;
    position: sticky;
    background: cyan;
    top: 0;
    z-index: 1;
    
    
  
`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    
`
// const input = styled.div`
//     padding:10px 20px;
//     display:flex;
//     justify-content:space-between;
//     width: 800px;
    
// `

const Left=styled.div`
    display:flex;
    flex:5;
    align-items:center
`
const Language=styled.span`
    font-size:14px;
    cursor:pointer;
    text-decoration:none !important;
    color:black;

   
`


const SearchContainer=styled.div`
    border:1px solid lightgrey;
    display:flex;
    align-items:center;
    margin-left:40px;
    padding:20px;
    width: 400px;
    
`
const Input=styled.input`
    border:none;
  
`
const Center=styled.div`
    flex:2;
    text-align:center;
`
const Logo=styled.h1`
    font-weight:bold;
    
`
const Right=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
     
`
const MenuItem=styled.div` 
    font-size:14px;
    cursor:pointer;
    display:flex;
    flex-direction:flex-end;
    margin-left:200px;
    
`
export default Navbar




// import './Css/Navbar.css'
// import { Link } from "react-router-dom";

// // import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// // import React from "react";
// // import { render } from '@testing-library/react';

// const Header = () => {

//   const logOut = () => {
//     localStorage.clear();
//     window.location.replace('/Home');
//   }
//   var menu;
//   if (localStorage.getItem('token')) {
//     menu = (
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav text-center">
//           <li className="nav-item">
//             <Link className="nav-link" to="/Myproduct">My Donation</Link>
//           </li>
//           {JSON.parse(localStorage.getItem('user')).role == 'doner' &&
//             <>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Addproduct">AddDonation</Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/Blog">UploadBlog</Link>
//               </li>
//         // </>
//           }
//           <li className="nav-item">
//             <Link className="nav-link" to="/Myblog">MyBlog</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/Myprofile"> MyProfile</Link>
//           </li>
//           <div className='log'>
//             <li className='nav-item'>
//               <button className='logged btn btn-danger' onClick={logOut}>Log Out</button>
//             </li>
//           </div>

//         </ul>
//       </div>
//     );
//   } else {
//     menu = (

//       <div>
//         <header className="header clearfix">

        
          
//             {/* <div className="navbar-top bg-success pt-2 pb-2">
//               <div className="container-fluid">
//                 <div className="row">
//                   <div className="col-lg-12 text-center">
//                     <a href="/" className="mb-0 text-white">
//                       20% cashback for new users | Code: <strong><span className="text-light">OGOFERS13 <span className="mdi mdi-tag-faces" /></span> </strong>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//             {/* <div className='container-fluid'> */}

            
//             <div className="collapse navbar-collapse" id="navbarNav">
//             <div className="my-2 my-lg-0">
//               <ul className="list-inline main-nav-right" />
//               <li className="list-inline-item" />
//               <a data-target="#bd-example-modal" data-toggle="modal" className="btn btn-link" ><i className="mdi mdi-account-circle" /> <Link className="nav-link" to="/"> Home</Link></a>

//             </div>
//             <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
//               <div className="top-categories-search" >
//                 <div className="input-group">
//                   <input className="form-control search-sea" placeholder="Search products in Your City" aria-label="Search products in Your City" type="text" name="searchtxt" />
//                   <span className="input-group-btn">
//                     <button className="btn btn-secondary" type="submit" ><i className="mdi mdi-file-find" /> Search</button>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="my-2 my-lg-0">
//               <ul className="list-inline main-nav-right" />
//               <li className="list-inline-item" />
//               <a data-target="#bd-example-modal" data-toggle="modal" className="btn btn-link" ><i className="mdi mdi-account-circle" /> <Link className="nav-link" to="/Home"> Login/Signup</Link></a>

//             </div>
//             <ul className="navbar-nav text-center">
//               {/* <li className="nav-item">
//           <Link className="nav-link" to="/Home"> Home</Link>
//         </li> */}
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/"> Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/Myblog">Blogs</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className=" log nav-link" to="/Signup"> SignUp</Link>
//               </li> */}

//             </ul>
//           </div>
//           {/* </div> */}
//           </header>
//           </div>

//           );

        
//   }
//           return (

//           <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//               <Link className="navbar-brand" to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMzUbI9ynwunjpshVHF0PzMzl_MUem3SKNCFwYZblRNaPQIxdQ9BBLgVX6XH1LoTa254&usqp=CAU " alt="logo" width="150" height="50 "></img>
//                 <span className="hidden">Thrift Store</span></Link>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               {menu}
//             </div>
//           </nav>

//           )
// }

// // const Header=()=>{


// //   var menu;
// //   if(localStorage.getItem('token')){
// //     menu=(
// //       <div className="collapse navbar-collapse" id="navbarNav">
// //       <ul className="navbar-nav text-center">
// //         <li className="nav-item">
// //           <Link className="nav-link" to="/Myproduct">Home</Link>
// //         </li>
// //        {JSON.parse(localStorage.getItem('user')).role === 'doner' &&
// //        <>
// //        <li className="nav-item">
// //           <Link className="nav-link" to="/Addproduct">User</Link>
// //         </li>

// //         <li className="nav-item">
// //           <Link className="nav-link" to="/Blog">Vendor</Link>
// //         </li>
// //          </>
// //       }

// //         <li className="nav-item">
// //           <Link className="nav-link" to="/Myprofile"> About</Link>
// //         </li>

// //         <div style={{ display: "block", padding: 10, marginRight: 100 }}>
// //       {/* <ShoppingCartIcon />{" "} */}
// //       </div>

// //       </ul>
// //     </div>

// //   );

// //   }else{
// //     menu=(

// //       <div className="collapse navbar-collapse" id="navbarNav">
// //       <ul className="navbar-nav text-center">
// //       <li className="nav-item">
// //           <Link className="nav-link" to="/Home"> Home</Link>
// //         </li>
// //         <li className="nav-item">

// //           <Link className="nav-link" to="/"> User Account</Link>
// //         </li>
// //         <li className="nav-item">
// //           <Link className="nav-link" to="/Myblog">Vendor Account</Link>
// //         </li>


// //       <li className="nav-item">
// //           <Link className=" log nav-link" to="/Signup"> SignUp</Link>
// //         </li>
// //         <li className="nav-item">
// //           <Link className="nav-link" to="/Myproduct">About</Link>
// //         </li>





// //       </ul>


// //     </div>
// //     );


// //   }


// //     return(

// //       <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
// //   <div className="container-fluid">
// //     <Link className="navbar-brand" to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMzUbI9ynwunjpshVHF0PzMzl_MUem3SKNCFwYZblRNaPQIxdQ9BBLgVX6XH1LoTa254&usqp=CAU " alt="logo" width="150" height="50 "></img>
// //     <span className="hidden">Thrift Store</span></Link>
// //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     {menu}
// // </div>
// // </nav>

// //     )

// // }
// export default Header;