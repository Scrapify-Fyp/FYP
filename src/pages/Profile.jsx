import React from "react";
import profileCSS from "./Profile.module.css";
import Sidebar from "../Components/sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import { useEffect } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import { auth } from "../hooks/auth";
export default function Profile() {
  const Reduxuser = useSelector(selectUser);
  // console.log("🚀 ~ Profile ~ Reduxuser:", Reduxuser);
  const authUser = auth();

  const [user, setUser] = useState(authUser);
  const navigate = useNavigate();
  const starCounts = {
    1: 50,
    2: 30,
    3: 20,
    4: 30,
    5: 60,
  };
  let totalscore =
    starCounts[1] * 1 +
    starCounts[2] * 2 +
    starCounts[3] * 3 +
    starCounts[4] * 4 +
    starCounts[5] * 5;
  let totalrispose =
    starCounts[1] +
    starCounts[2] +
    starCounts[3] +
    starCounts[4] +
    starCounts[5];
  let rating = totalscore / totalrispose;

  let discription =
    "Scrapify Market is a modern online platform merging physical and digital goods, promoting sustainability and creativity. It connects buyers with sellers, offering unique products while prioritizing user safety and community engagement.";
  const productsData = [
    { id: 1, name: "product 1", description: "i am Product 1" },
    { id: 2, name: "product 2", description: "i am Product 2" },
    { id: 3, name: "product 3", description: "i am Product 3" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  const fun = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/users/${user?._id}`
      );
      setUser(response.data);
      // console.log("🚀 ~ fun ~ response.data:", response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fun();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [Reduxuser]);

  return (
    <>
      <div
        className="container"
        style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}
      >
        <Sidebar />
        <main style={{}}>
          <div className={profileCSS.profilepage}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: "linear-gradient(to right, #6c63ff, #4a47a3)",
                    padding: "20px",
                    borderRadius: "10px",
                    flex: 1,
                    color: "#fff",
                    minWidth: "300px",
                    boxSizing: "border-box",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "24px",
                        margin: "0",
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {user?.firstName.toUpperCase()}
                    </h2>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "10px 0",
                      }}
                    >
                      <div
                        style={{
                          marginRight: "10px",
                        }}
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                            fill="white"
                          ></path>
                          <path
                            d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                            fill="#EA4335"
                          ></path>
                          <path
                            d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                            fill="#C5221F"
                          ></path>
                          <path
                            d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                            fill="#C5221F"
                          ></path>
                          <path
                            d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                            fill="#4285F4"
                          ></path>
                        </svg>
                      </div>
                      {user?.email || <span>Email will be provided soon!</span>}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "10px 0",
                      }}
                    >
                      <div
                        style={{
                          marginRight: "10px",
                        }}
                      >
                        <svg
                          fill="#ffffff"
                          width="24px"
                          height="24px"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#000000"
                          strokeWidth="0.001"
                        >
                          <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z"></path>
                        </svg>
                      </div>
                      {user?.address || <span>No address found</span>}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "10px 0",
                      }}
                    >
                      <div
                        style={{
                          marginRight: "10px",
                        }}
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="#ffffff"
                        >
                          <path
                            stroke="#ffffff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6.515 4.621 9 4l2 3.5L9.5 9c1 2 3.5 4.5 5.5 5.5l1.5-1.5 3.5 2-.621 2.485c-.223.89-1.029 1.534-1.928 1.351-5.213-1.06-11.228-7.074-12.287-12.287-.183-.9.46-1.705 1.35-1.928Z"
                          ></path>
                        </svg>
                      </div>
                      {user?.phone}
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                      }}
                    >
                      {user?.bio}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "linear-gradient(to right, #00695c, #004d40)",
                      padding: "20px",
                      borderRadius: "10px",
                      flex: 1,
                      color: "#fff",
                      minWidth: "200px",
                      boxSizing: "border-box",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "20px",
                          margin: "0",
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="bi bi-bag"
                          style={{ marginRight: "10px", fontSize: "24px" }}
                        ></i>
                        Running Orders
                      </h2>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "16px",
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        {user?.runningOrders || "20"}
                      </span>
                    </div>
                    <i
                      className="bi bi-arrow-right"
                      style={{
                        marginRight: "10px",
                        fontSize: "30px",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    ></i>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "linear-gradient(to right, #00695c, #004d40)",
                      padding: "20px",
                      borderRadius: "10px",
                      flex: 1,
                      color: "#fff",
                      minWidth: "200px",
                      boxSizing: "border-box",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "20px",
                          margin: "0",
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="bi bi-check-circle"
                          style={{ marginRight: "10px", fontSize: "24px" }}
                        ></i>
                        Completed Orders
                      </h2>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "16px",
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        {user?.completedOrders || "50"}
                      </span>
                    </div>
                    <i
                      className="bi bi-arrow-right"
                      style={{
                        marginRight: "10px",
                        fontSize: "30px",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    ></i>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "linear-gradient(to right, #00695c, #004d40)",
                      padding: "20px",
                      borderRadius: "10px",
                      flex: 1,
                      color: "#fff",
                      minWidth: "200px",
                      boxSizing: "border-box",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "20px",
                          margin: "0",
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="bi bi-arrow-counterclockwise"
                          style={{ marginRight: "10px", fontSize: "24px" }}
                        ></i>
                        Returned Orders
                      </h2>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "16px",
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        {user?.returnedOrders || "0"}
                      </span>
                    </div>
                    <i
                      className="bi bi-arrow-right"
                      style={{
                        marginRight: "10px",
                        fontSize: "30px",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            <div className={profileCSS.profilesection}>
              <div className={profileCSS.box}>
                <div className={profileCSS.boxdiv}>
                  <div className={profileCSS.boxheadersvg}>
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                      stroke="#ffffff"
                      strokeWidth="0.00024000000000000003"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                          <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 10.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272L18 21.5z"></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <h3>Ratings & Stars</h3>
                </div>
                <div className={profileCSS.starratingwithprogress}>
                  <div className={profileCSS.starrating}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= rating
                            ? profileCSS.starfilled
                            : profileCSS.starempty
                        }
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>

                  <div className={profileCSS.progressbars}>
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <div
                        key={star}
                        className={profileCSS.progressbarcontainer}
                      >
                        {star === 1 ? (
                          <span key={star} className={profileCSS.starfilled}>
                            &#9733;
                          </span>
                        ) : star === 2 ? (
                          <span key={star} className={profileCSS.starfilled}>
                            &#9733;&#9733;
                          </span>
                        ) : star === 3 ? (
                          <span key={star} className={profileCSS.starfilled}>
                            &#9733;&#9733;&#9733;
                          </span>
                        ) : star === 4 ? (
                          <span key={star} className={profileCSS.starfilled}>
                            &#9733;&#9733;&#9733;&#9733;
                          </span>
                        ) : (
                          <span key={star} className={profileCSS.starfilled}>
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                          </span>
                        )}
                        <div className={profileCSS.progressbar}>
                          <div
                            className={profileCSS.progressbarfill}
                            style={{
                              width: `${
                                (starCounts && starCounts[star]) || 0
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={profileCSS.box}>
                <div className={profileCSS.boxdiv}>
                  <div className={profileCSS.boxheadersvg}>
                    <svg
                      fill="#ffffff"
                      height="64px"
                      width="64px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.37 512.37"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M475.524,72.933c-33.872-36.293-72.122-56.78-115.583-56.78c-42.308,0-79.083,19.333-103.742,52.277 c-24.591-32.968-61.208-52.277-103.49-52.277c-43.164,0-80.774,20.275-115.429,56.616 c-51.87,54.357-52.062,155.013,14.925,221.999c13.003,13.003,45.393,46.322,91.094,93.615 c21.934,22.7,44.674,46.277,67.387,69.854c7.95,8.252,15.328,15.915,21.947,22.792c6.806,7.073,6.806,7.073,8.317,8.643 c8.393,8.726,22.357,8.726,30.751,0c1.51-1.57,1.51-1.57,8.316-8.643c6.619-6.877,13.997-14.539,21.947-22.792 c22.713-23.577,45.453-47.154,66.715-69.158c46.373-47.99,78.763-81.308,91.766-94.312 C527.176,228.038,526.702,127.752,475.524,72.933z M430.275,264.599c-13.253,13.253-45.689,46.619-91.606,94.137 c-21.952,22.718-44.706,46.31-67.433,69.902c-5.236,5.435-10.224,10.615-14.91,15.482c-4.687-4.868-9.675-10.047-14.911-15.482 c-22.727-23.592-45.482-47.184-66.76-69.205c-46.591-48.215-79.026-81.58-92.279-94.833C31.961,214.185,32.102,140,68.154,102.22 c27.31-28.64,54.69-43.4,84.555-43.4c37.759,0,68.431,22.518,83.608,61.191c7.085,18.053,32.633,18.053,39.718,0 c15.143-38.586,46.063-61.191,83.907-61.191c30.166,0,57.925,14.868,84.393,43.228 C480.097,140.355,480.447,214.426,430.275,264.599z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <h3>Favourite Products</h3>
                </div>
                <div className={profileCSS.productslider}>
                  <button
                    onClick={handlePrevClick}
                    className={profileCSS.arrowbutton}
                  >
                    {"<"}
                  </button>
                  <div className={profileCSS.productbox}>
                    <h2>{productsData[currentIndex].name}</h2>
                    <p>{productsData[currentIndex].description}</p>
                  </div>
                  <button
                    onClick={handleNextClick}
                    className={profileCSS.arrowbutton}
                  >
                    {">"}
                  </button>
                </div>
                <NavLink className={profileCSS.viewprobtn}>View all</NavLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
