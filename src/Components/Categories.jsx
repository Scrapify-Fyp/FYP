import React, { useState, useEffect } from "react";

const Categories = () => {
  const categories = [
    {
      name: "Physical Products",
      subcategories: [
        "Home Appliances", "Electronics", "Furniture", "Clothing", "Footwear",
        "Kitchenware", "Toys", "Sports Equipment", "Books", "Stationery",
        "Beauty Products", "Jewelry", "Gardening Tools", "Automobile Parts", "Pet Supplies"
      ],
    },
    {
      name: "Digital Assets",
      subcategories: [
        "Assignments", "Projects", "E-books", "Software", "Courses", "Templates", "Graphics",
        "Photography", "Virtual Reality", "Websites", "Mobile Apps", "Games"
      ],
    },
    {
      name: "Scraps",
      subcategories: [
        "Wall Hangings", "Decoration Pieces", "Metal Scraps", "Wood Scraps", "Plastic Scraps",
        "Paper Scraps", "Fabric Scraps", "Glass Scraps", "E-waste", "Batteries",
        "Old Furniture", "Used Appliances", "Tires", "Clothing Scraps", "Miscellaneous"
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState(0); // Default to first category open

  const handleOnClickCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index); // Toggle category
  };

  const [screensize, setScreensize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreensize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount

  return (
    <div>
      <h4 style={{ paddingTop: "20px" }}>Classification</h4>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="list-group-item" style={{ paddingTop: "10px" }}>
            <div className="d-flex justify-content-between">
              <a href="#" style={{ textDecoration: "none", color: "black", paddingTop: "8px" }}>
                {category.name}
              </a>
              <button
                className="btn  text-dark"
                type="button"
                onClick={() => handleOnClickCategory(index)}
              >
                {openCategory === index ? "▼" : "▶"}
              </button>
            </div>
            <div
              className={`collapse ${openCategory === index ? "show" : ""}`}
              id={`subcategories${index}`}
            >
              <div className="list-group-item">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} style={{ listStyle: "none" }}>
                    <a
                      className="me-2"
                      href="#"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {subcategory}
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
