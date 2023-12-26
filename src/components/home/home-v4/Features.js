const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "AI-Powered Property Selection:",
      description:
        "Our cutting-edge AI technology precisely matches properties to your requirements, all managed through our user-friendly app."
    },
    {
      icon: "flaticon-keywording",
      title: "Expert Market Advisory:",
      description:
        "Benefit from our team's market expertise, ensuring you choose the right residential, land, or commercial property.",
    },
    {
      icon: "flaticon-investment",
      title: "Dedicated Relationship Manager:",
      description:
        "Enjoy a personal touch with a dedicated manager guiding you through the entire process, understanding your unique needs.",
    },
    {
      icon: "flaticon-investment",
      title: "Informed Decision-Making:",
      description:
        " We provide detailed market insights, property trends, and area feedback, empowering you to make informed choices.",
    },
    {
      icon: "flaticon-investment",
      title: "Neighborhood Insights:",
      description:
        "Gain valuable knowledge about neighboring properties, assessing their impact on your investment.",
    },
    {
      icon: "flaticon-investment",
      title: "Seamless Legal Handling:",
      description:
        "We handle all legal aspects, ensuring your interests are protected through thorough diligence and documentation.",
    },
    {
      icon: "flaticon-investment",
      title: "Stress-Free Experience:",
      description:
        "Let us manage the complexities, reducing your stress and allowing you to focus on your daily life.",
    },
    {
      icon: "flaticon-investment",
      title: "Time-Efficient Solutions:",
      description:
        "Save time with our precise property search based on your checklist.",
    },
    {
      icon: "flaticon-investment",
      title: "Negotiation Savvy:",
      description:
        "We secure favorable terms through bulk deals, resulting in cost savings for you.",
    },
    {
      icon: "flaticon-investment",
      title: "Financial Ease:",
      description:
        "Access bank partnerships for term deposits and simplified mortgage processes for hassle-free financial planning.",
    },
    {
      icon: "flaticon-investment",
      title: "Ongoing Support:",
      description:
        "Even after your purchase, our relationship manager remains by your side, assisting with leasing, maintenance, and resale.",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1">{feature.title}</h6>
            <p className="text mb-0 fz15">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
