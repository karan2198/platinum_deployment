import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";
import FilterWithProperties from "@/components/home/home-v5/filter-with-property";
const Hero = () => {
  return (
    <>
      <div className="inner-banner-style1 text-center">
        <h6 className="hero-sub-title animate-up-1">Welcome to</h6>
        <h2 className="hero-title animate-up-2">Platinum Circle</h2>
        <p className="hero-text fz15 animate-up-3">
        Real estate concierge services
        </p>
        {/* <HeroContent /> */}
        <FilterWithProperties/>
      </div>
      {/* End Hero content */}

      {/* <!-- Advance Feature Modal Start --> */}
      {/* <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal />
        </div>
      </div> */}
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
