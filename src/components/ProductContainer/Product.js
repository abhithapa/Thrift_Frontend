import "./Product.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Product = () => {
    const [pdata, setPdata] = useState([]);
    const filterResult=(catItems)=>{
        const result=[].filter((curData)=>{
            return curData.Product===catItems;
        });
        setPdata(result);
    }

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')

        }
    }

    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('user')).role)
        if (JSON.parse(localStorage.getItem('user')).role == "doner") {
            axios.get("http://localhost:90/product/myproduct", config)
                .then(result => {
                    setPdata(result.data)
                    // console.log(data)
                }).catch((e) => {
                    alert("something went wrong")
                });
        } else {
            axios.get("http://localhost:90/product/allproducts")
                .then(result => {
                    setPdata(result.data)
                    // console.log(data)
                }).catch((e) => {
                    alert("something went wrong")
                });
        }


    }, []);



    //to delete product
    const deleteProduct = (pid) => {

        // console.log(pid)
        axios.delete("http://localhost:90/product/delete/" + pid, config)

            .then((result) => {
                if (result.status === 200) {
                    toast.success(result.data.msg)
                    setPdata(pdata.filter(donation => donation._id !== pid))
                    //    alert("sucessfully deleted")
                    // toast.error(result.data.msg)
                }
            }).catch((e) => {
                alert("unable to delete")
            })
    }

    return (
        <div className="App">

            {/* 1st Container */}
            <section class="section-pagetop bg">
                <div class="container">
                    <h2 class="title-page">New Arrivals</h2>

                </div>
            </section>

            <section class="section-content padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-md-3">

                            <div class="card">
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                                            <i class="icon-control fa fa-chevron-down"></i>
                                            <h6 class="title">Product type</h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_1">
                                        <div class="card-body">
                                            <form class="pb-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </form>

                                            <ul class="list-menu">
                                                <li><a href="#" >Men  </a></li>
                                                <li><button class="btn btn-light" type="button" onClick={()=>
                                        filterResult('New Arrivals')}>New Arrivals</button></li>
                                                <li><a href="#">Child</a></li>
                                                
                                            </ul>

                                        </div>
                                    </div>
                                </article>



                            </div>
                        </aside>
                        <main class="col-md-9">

                            <header class="border-bottom mb-4 pb-3">
                                <div class="form-inline">
                                    <span class="mr-md-auto">Latest Clothes </span>
                                    <select class="mr-2 form-control">
                                        <option>Latest items</option>
                                        <option>Trending</option>
                                        <option>Most Popular</option>
                                        <option onClick={()=>
                                        filterResult('New Arrivals')}>New Arrivals</option>
                                    </select>
                                    <div class="btn-group">
                                        <a href="#" class="btn btn-outline-secondary" data-toggle="tooltip" title="List view">
                                            <i class="fa fa-bars"></i></a>
                                        <a href="#" class="btn  btn-outline-secondary active" data-toggle="tooltip" title="Grid view">
                                            <i class="fa fa-th"></i></a>
                                    </div>
                                </div>
                            </header>


                            {/* return( */}
                            <div className="MyP">
                                <ToastContainer />
                                <div className="container">
                                    <div className="row">
                                        {pdata.map(mydata => {
                                            return (

                                                <div className="row">
                                                <div class="col-md-4">
                                                    <figure class="card card-product-grid">


                                                        <div class="img-wrap">
                                                            <p><img src={'http://localhost:90/' + mydata.pimage} className="pro_image" alt="donation"></img></p>
                                                            {/* <a class="btn-overlay"><i class="fa fa-search-plus"><Link to={"/product/single/" +mydata._id}></Link></i> Quick view</a> */}
                                                            <p><Link to={"/product/single/" + mydata._id}>Read More</Link></p>
                                                        </div>
                                                        <figcaption class="info-wrap">
                                                            <div class="fix-height">
                                                                <h3>{mydata.productName}</h3>
                                                                <p className="namm"><b className="Damm"></b>{mydata.desc} </p>
                                                                {/* <p><b>Doner</b>:{mydata.donerName} </p> */}
                                                                {/* <p>
                                                                    {JSON.parse(localStorage.getItem('user')).role == 'doner' ?
                                                                        <>
                                                                            <button className=" hoho btn btn-danger" onClick={() => { deleteProduct(mydata._id) }}>Delete</button>
                                                                            <Link to={"/product/update/" + mydata._id}><button className="hoho btn btn-secondary">Update</button></Link></> :
                                                                        <button className=" hoho btn btn-success" onClick={() => { alert('Request  sent successfully') }}>Request</button>}
                                                                </p> */}
                                                            </div>
                                                            <div class="price-wrap mt-2">
                                                                <span class="price">$1280</span>
                                                                {/* <del class="price-old">$1980</del> */}
                                                            </div>
                                                            {/* <p><Link to={"/product/single/" +mydata._id}>Read More</Link></p> */}
                                                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                                </div>

                                            )
                                        })}


                                    </div>
                                </div>
                            </div>
                            {/* ) */}

                            {/* <div class="row">
                            <div class="col-md-4">
                                <figure class="card card-product-grid">
                                    <div class="img-wrap">
                                        <span class="badge badge-danger"> NEW </span>
                                        <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cotton-short-sleeve-t-shirt-png-image_2453590.jpg" />
                                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                    </div>
                                    <figcaption class="info-wrap">
                                        <div class="fix-height">
                                            <a href="#" class="title">Great item name goes here</a>
                                            <div class="price-wrap mt-2">
                                                <span class="price">$1280</span>
                                                <del class="price-old">$1980</del>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                    </figcaption>
                                </figure>
                            </div>
                            </div> */}

                        </main>

                    </div>
                </div>


            </section>


            {/* 2nd Container */}
            <section class="section-pagetop bg">
                <div class="container">
                    <h2 class="title-page">New Arrivals</h2>

                </div>
            </section>
            <section class="section-content padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-md-3">

                            <div class="card">
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                                            <i class="icon-control fa fa-chevron-down"></i>
                                            <h6 class="title">Product type</h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_1">
                                        <div class="card-body">
                                            <form class="pb-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </form>

                                            <ul class="list-menu">
                                                <li><a href="#">People  </a></li>
                                                <li><a href="#">Watches </a></li>
                                                <li><a href="#">Cinema  </a></li>
                                                <li><a href="#">Clothes  </a></li>
                                                <li><a href="#">Home items </a></li>
                                                <li><a href="#">Animals</a></li>
                                                <li><a href="#">People </a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </article>

                            </div>
                        </aside>
                    </div>
                </div>


            </section>

            {/* 3rd Container */}
            <section class="section-pagetop bg">
                <div class="container">
                    <h2 class="title-page">New Arrivals</h2>

                </div>
            </section>
            <section class="section-content padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-md-3">

                            <div class="card">
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                                            <i class="icon-control fa fa-chevron-down"></i>
                                            <h6 class="title">Product type</h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_1">
                                        <div class="card-body">
                                            <form class="pb-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </form>

                                            <ul class="list-menu">
                                                <li><a href="#">People  </a></li>
                                                <li><a href="#">Watches </a></li>
                                                <li><a href="#">Cinema  </a></li>
                                                <li><a href="#">Clothes  </a></li>
                                                <li><a href="#">Home items </a></li>
                                                <li><a href="#">Animals</a></li>
                                                <li><a href="#">People </a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </article>

                            </div>
                        </aside>
                    </div>
                </div>
            </section>






            {/* <section class="section-content padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-md-3">

                            <div class="card">
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                                            <i class="icon-control fa fa-chevron-down"></i>
                                            <h6 class="title">Product type</h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_1">
                                        <div class="card-body">
                                            <form class="pb-3">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </form>

                                            <ul class="list-menu">
                                                <li><a href="#">People  </a></li>
                                                <li><a href="#">Watches </a></li>
                                                <li><a href="#">Cinema  </a></li>
                                                <li><a href="#">Clothes  </a></li>
                                                <li><a href="#">Home items </a></li>
                                                <li><a href="#">Animals</a></li>
                                                <li><a href="#">People </a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </article>




                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                                            <i class="icon-control fa fa-chevron-down"></i>
                                            <h6 class="title">Price range </h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_3">
                                        <div class="card-body">
                                            <input type="range" class="custom-range" min="0" max="100" name="" />
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label>Min</label>
                                                    <input class="form-control" placeholder="$0" type="number" />
                                                </div>
                                                <div class="form-group text-right col-md-6">
                                                    <label>Max</label>
                                                    <input class="form-control" placeholder="$1,0000" type="number" />
                                                </div>
                                            </div>
                                            <button class="btn btn-block btn-primary">Apply</button>
                                        </div>
                                    </div>
                                </article>
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
                                            <i class="icon-control fa fa-chevron-down"></i>
                                            <h6 class="title">Sizes </h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse show" id="collapse_4">
                                        <div class="card-body">
                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> XS </span>
                                            </label>

                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> SM </span>
                                            </label>

                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> LG </span>
                                            </label>

                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> XXL </span>
                                            </label>
                                        </div>
                                    </div>
                                </article>
                                <article class="filter-group">
                                    <header class="card-header">
                                        <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" class="">
                                            <i class="icon-control fa fa-chevron-down"></i>
                                            <h6 class="title">More filter </h6>
                                        </a>
                                    </header>
                                    <div class="filter-content collapse in" id="collapse_5">
                                        <div class="card-body">
                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" checked="" class="custom-control-input" />
                                                <div class="custom-control-label">Any condition</div>
                                            </label>

                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                                <div class="custom-control-label">Brand new </div>
                                            </label>

                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                                <div class="custom-control-label">Used items</div>
                                            </label>

                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                                <div class="custom-control-label">Very old</div>
                                            </label>
                                        </div>
                                    </div>
                                </article>
                            </div>

                        </aside>
                        <main class="col-md-9">

                            <header class="border-bottom mb-4 pb-3">
                                <div class="form-inline">
                                    <span class="mr-md-auto">32 Items found </span>
                                    <select class="mr-2 form-control">
                                        <option>Latest items</option>
                                        <option>Trending</option>
                                        <option>Most Popular</option>
                                        <option>Cheapest</option>
                                    </select>
                                    <div class="btn-group">
                                        <a href="#" class="btn btn-outline-secondary" data-toggle="tooltip" title="List view">
                                            <i class="fa fa-bars"></i></a>
                                        <a href="#" class="btn  btn-outline-secondary active" data-toggle="tooltip" title="Grid view">
                                            <i class="fa fa-th"></i></a>
                                    </div>
                                </div>
                            </header>

                            <div class="row">
                                <div class="col-md-4">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> NEW </span>
                                            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cotton-short-sleeve-t-shirt-png-image_2453590.jpg" />
                                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                        </div>
                                        <figcaption class="info-wrap">
                                            <div class="fix-height">
                                                <a href="#" class="title">Great item name goes here</a>
                                                <div class="price-wrap mt-2">
                                                    <span class="price">$1280</span>
                                                    <del class="price-old">$1980</del>
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-4">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">

                                            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cotton-short-sleeve-t-shirt-png-image_2453590.jpg" />
                                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                        </div>
                                        <figcaption class="info-wrap">
                                            <div class="fix-height">
                                                <a href="#" class="title">Product name goes here just for demo item</a>
                                                <div class="price-wrap mt-2">
                                                    <span class="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-4">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cotton-short-sleeve-t-shirt-png-image_2453590.jpg" />
                                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                        </div>
                                        <figcaption class="info-wrap">
                                            <div class="fix-height">
                                                <a href="#" class="title">Product name goes here just for demo item</a>
                                                <div class="price-wrap mt-2">
                                                    <span class="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-4">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cotton-short-sleeve-t-shirt-png-image_2453590.jpg" />
                                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                        </div>
                                        <figcaption class="info-wrap">
                                            <div class="fix-height">
                                                <a href="#" class="title">Product name goes here just for demo item</a>
                                                <div class="price-wrap mt-2">
                                                    <span class="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-4">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cotton-short-sleeve-t-shirt-png-image_2453590.jpg" />
                                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                        </div>
                                        <figcaption class="info-wrap">
                                            <div class="fix-height">
                                                <a href="#" class="title">Product name goes here just for demo item</a>
                                                <div class="price-wrap mt-2">
                                                    <span class="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-4">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cotton-short-sleeve-t-shirt-png-image_2453590.jpg" />
                                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                        </div>
                                        <figcaption class="info-wrap">
                                            <div class="fix-height">
                                                <a href="#" class="title">Product name goes here just for demo item</a>
                                                <div class="price-wrap mt-2">
                                                    <span class="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-4">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cotton-short-sleeve-t-shirt-png-image_2453590.jpg" />
                                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                        </div>
                                        <figcaption class="info-wrap">
                                            <div class="fix-height">
                                                <a href="#" class="title">Product name goes here just for demo item</a>
                                                <div class="price-wrap mt-2">
                                                    <span class="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="col-md-4">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <img src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cotton-short-sleeve-t-shirt-png-image_2453590.jpg" />
                                            <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                        </div>
                                        <figcaption class="info-wrap">
                                            <div class="fix-height">
                                                <a href="#" class="title">Product name goes here just for demo item</a>
                                                <div class="price-wrap mt-2">
                                                    <span class="price">$1280</span>
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>


                            <nav class="mt-4" aria-label="Page navigation sample">
                                <ul class="pagination">
                                    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>

                        </main>

                    </div>

                </div>
            </section> */}





        </div>
    )
}

export default Product;
