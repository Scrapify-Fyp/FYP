import React, { useState, useEffect } from "react";

const Categories = () => {
  const categories = [
    {
      name: "Technologies",
      subcategories: ["Subcategory 1.1", "Subcategory 1.2", "Subcategory 1.3"],
    },
    {
      name: "Scrapyard",
      subcategories: ["Subcategory 2.1", "Subcategory 2.2", "Subcategory 2.3"],
    },
    {
      name: "Find Projects / Ideas",
      subcategories: ["Subcategory 3.1", "Subcategory 3.2", "Subcategory 3.3"],
    },
    {
      name: "Home and Gardern",
      subcategories: ["Subcategory 4.1", "Subcategory 4.2", "Subcategory 4.3"],
    },
    {
      name: "Books / Gifts / Crafts",
      subcategories: ["Subcategory 5.1", "Subcategory 5.2", "Subcategory 5.3"],
    },
    {
      name: "Music and Photography",
      subcategories: ["Subcategory 6.1", "Subcategory 6.2", "Subcategory 6.3"],
    },
    {
      name: "Tech Gadgets",
      subcategories: ["Subcategory 7.1", "Subcategory 7.2", "Subcategory 7.3"],
    },
    {
      name: "Design",
      subcategories: ["Subcategory 8.1", "Subcategory 8.2", "Subcategory 8.3"],
    },
  ];

  // const sliderItems = [
  //   {
  //     //   image: "https://placehold.it/1200x400",
  //     image:
  //       "https://images.unsplash.com/photo-1554517222-e8b264ce5a35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "First Slide Title",
  //     text: "Some text related to the first slide.",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1530736563750-5705fa77c26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDEyMDAlMjB4JTIwNDAwfGVufDB8MHwwfHx8Mg%3D%3D",
  //     title: "Second Slide Title",
  //     text: "Some text related to the second slide.",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Third Slide Title",
  //     text: "Some text related to the second slide.",
  //   },
  //   {
  //     image:
  //       "https://images.pexels.com/photos/8355599/pexels-photo-8355599.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Fourth Slide Title",
  //     text: "Some text related to the second slide.",
  //   },
  // ];
  const [openCategory, setOpenCategory] = useState(null);

  const handleOnClickCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const [screensize, setScreensize] = useState(window.innerWidth);
  const comparison = 900;
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
      <>
      <h4 style={{ paddingTop: "20px" }}>
    Classification
    </h4>
        <ul className="list-group">
          {categories.map((category, index) => (
            <li key={index} className="list-group-item" style={{ paddingTop: "10px" }}>
              <div className="d-flex justify-content-between">
                <a href="#" style={{ textDecoration: "none", color: "black", paddingTop:"8px" }}>
                  {category.name}
                </a>
                <button
                  style={{ textDecoration: "none" }}
                  //   className="btn btn-link text-dark p-0"
                  //   type="button"
                  //   data-bs-toggle="collapse"
                  //   data-bs-target={`#subcategories${index}`}
                  //   aria-expanded="false"
                  //   aria-controls={`subcategories${index}`}
                  //   onClick={handleOnClickCategory}
                  className="btn btn-link text-dark"
                  type="button"
                  onClick={() => {
                    handleOnClickCategory(index);
                  }}
                >
                  {/* <i className="bi bi-chevron-down" style={{ color: '#6c757d' }}></i> */}
                  {/* &#9654; */}
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
      </>
    </div>
  );
};

export default Categories;
