import Image from "next/image";
import Link from "next/link";

const Sell = () => {
  const featureList = [
    "Find excellent deals",
    "Friendly host & Fast support",
    "List your own property",
  ];
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-xl-4">
          <div
            className="about-box-1 pe-4 mt100 mt0-lg mb30-lg "
            data-aos="fade-left"
          >
            <h2 className="title mb30">
            Exclusive Access to Local Experts</h2>
            <p className="text mb25 fz15">
            At Platinum Circle you gain access to local real estate professionals who offer expert guidance, helping them make well-informed decisions. You also enjoy exclusive opportunities, including early access to off-market properties, giving them a competitive edge. Tailored recommendations cater to their unique goals, while market insights and risk mitigation strategies assist in making strategic investment choices. The service ensures efficiency with time-saving processes and streamlined transactions, tapping into a network of local connections for various property needs. A focus on long-term relationships means ongoing support for current and future investments, all while maintaining confidentiality and offering customized investment strategies.
            </p>
            <div className="list-style1 mb50">
              <ul>
                {featureList.map((list, index) => (
                  <li key={index}>
                    <i className="far fa-check text-white bgc-dark fz15"></i>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/grid-gull-3-col" className="ud-btn btn-white2">
              Learn More<i className="fal fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-lg-9 col-xl-8 col-xxl-7 offset-xxl-1">
          <div className="position-relative mb35 mb0-sm" data-aos="fade-right">
            <div className="img-box-1 list-inline-item me-0">
              <Image
                width={270}
                height={350}
                className="img-1"
                src="/images/about/about-1.jpg"
                alt="about"
              />
            </div>
            <div className="img-box-2 list-inline-item me-0">
              <Image
                width={370}
                height={520}
                className="img-1"
                src="/images/about/about-2.jpg"
                alt="about"
              />
            </div>
            <div className="img-box-3">
              <Image
                width={276}
                height={146}
                className="img-1 bounce-y"
                src="/images/about/about-1.png"
                alt="about"
              />
            </div>
            <div className="img-box-4">
              <Image
                width={193}
                height={193}
                className="img-1 spin-right"
                src="/images/about/element-1.png"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sell;
