import Explore from "@/components/home/home-v2/Explore";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import About from "@/components/home/home-v2/about";

// import WhyUs from "@/components/home/home-v1/whyus";
import Sell from "@/components/home/home-v1/Sell"; 
import ApartmentType from "@/components/home/home-v1/ApartmentType";
import CallToActions from "@/components/common/CallToActions";
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
import Header from "@/components/home/home-v1/Header";
import Partner from "@/components/common/Partner";
import PopularListings from "@/components/home/home-v1/PopularListings";
import Features from "@/components/home/home-v4/Features";
import PropertiesByCities from "@/components/home/home-v1/PropertiesByCities";
import Testimonial from "@/components/home/home-v1/Testimonial";
import Hero from "@/components/home/home-v1/hero";
import Image from "next/image";
import Blog from "@/components/common/Blog";
import Link from "next/link";
import PopulerProperty from "@/components/home/home-v1/PopulerProperty";
import Service from "@/components/home/home-v8/Service";
import CitySearch from "@/components/CitySearch";
import DashboardHome from "@/app/(property)/(dashboard)/dashboard-client/page";
import CustomerHome from "@/app/(property)/(dashboards)/dashboard-customer/dashboard-home/page";




export const metadata = {
  title: "Platinum Circle",
};

const Home_V1 = () => {
  const logIn=false;
  return (
    <>
     {  logIn?<CustomerHome/>:

    <div>
      
      {/* Main Header Nav */}
      
      <Header />
      {/* End Main Header Nav */}
     {/* <CitySearch/> */}
      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
    
      {/* Home Banner Style V1 */}
      <section className="home-banner-style1 p0">
      
        <div className="home-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <Hero />

                
              </div>
            </div>
          </div>
          {/* End .container */}
          
          <a href="#explore-property">
            <div className="mouse_scroll animate-up-4">
              
              <Image
                width={20}
                height={105}
                src="/images/about/home-scroll.png"
                alt="scroll image"
              />
            </div> 
          </a>
        </div>
      </section>
      {/* End Home Banner Style V1 */}
{/* video section */}
<section className="about-us">
        <div className="container1">
          <About />
        </div>
      </section>
      {/* video section */}
      <section className="pt30 pb-0">
        <div className="cta-banner3 bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-lg-8 pl30-md pl15-xs"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30">
                  <h2 className="title text-capitalize">
                    Why <br className="d-none d-md-block" />{" "}
                    Platinum Circle
                  </h2>
                </div>
                <div className="why-chose-list style2">
                  <Features />
                </div>
                <Link href="#" className="ud-btn btn-dark">
                  Learn More
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* parental care */}
      <section className="p-0">
        <div className="how-we-help position-relative mx-auto bgc-thm-light maxw1600 pt120 pt60-md pb90 pb30-md bdrs12 mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 m-auto wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="main-title text-center">
                  <h2 className="title">Parental Support</h2>
                  <p className="paragraph">
                  Parental support in realty by Platinum Circle offers a comprehensive and personalized real estate concierge service for elderly individuals in India and their families abroad. This includes assisting with real estate acquisition, customizing property searches, providing support for families living abroad, facilitating old age home placements, offering legal and financial guidance, being culturally sensitive, coordinating healthcare services, and maintaining regular communication to ensure the well-being of elderly loved ones.
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <Explore />
            </div>
          </div>
        </div>
      </section>
      {/* parental care */}

      {/* BUY Explore Apartment */}
      <section id="explore-property" className="pb90 pb30-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">Buy Property with Platinum Circle</h2>
                <p className="paragraph">
                  Get some Inspirations from 1800+ skills
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="explore-apartment-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <ApartmentType />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BUY End Explore Apartment */}

      <section className="about-us">
        <div className="container">
          <Sell />
        </div>
      </section>

      <section className="pt30 pb-0">
        <div className="cta-banner5 bgc-f7 ms-auto maxw1850 pt100 pt60-lg pb90 pb30-lg position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-11 wow fadeInUp" data-aos-delay="100">
                <div className="main-title">
                  <h2 className="title text-capitalize">
                    Rental Services{" "}
                    <br className="d-none d-md-block" /> by Platinum Circle
                  </h2>
                  <p className="text">
                    handholding by our expert agents
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row" data-aos="fade-up" data-aos-delay="200">
              <Service />
            </div>
          </div>
        </div>
      </section>




      {/* Featured Listings */}
      {/* <section className="bgc-f7">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Discover Our Featured Listings</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-full-3-col">
                  See All Properties
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Featured Listings */}


      {/* Explore Blog */}
      {/* <section className="pb90 pb20-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">From Our Blog</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>

        </div>
      </section> */}
      {/* Explore Blog */}

      {/* Our Partners */}
      {/* <section className="our-partners pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Our Partners */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </div>
     }
    </>
  );
};

export default Home_V1;
