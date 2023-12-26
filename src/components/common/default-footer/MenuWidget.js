import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "Apartment for Buy", href: "#" },
        { label: "Agricultural Land in Telangana", href: "#" },
        { label: "Commercial Land for Buy", href: "#" },
        { label: "Offices for Rent", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Terms of Use", href: "#" },
        { label: "Privacy Policy", href: "#" },
        // { label: "Pricing Plans", href: "#" },
        { label: "Our Services", href: "#" },
        { label: "Contact Support", href: "#" },
        // { label: "Careers", href: "#" },
        // { label: "FAQs", href: "#" },
      ],
    },
    {
      title: "Discover",
      links: [
        { label: "Hyderabad", href: "#" },
        { label: "Mumbai", href: "#" },
        { label: "Bengaluru", href: "#" },
        { label: "Delhi", href: "#" },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
