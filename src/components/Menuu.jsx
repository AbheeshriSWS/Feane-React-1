import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
import f4 from "../assets/images/f4.png";
import f5 from "../assets/images/f5.png";
import f6 from "../assets/images/f6.png";
import f7 from "../assets/images/f7.png";
import f8 from "../assets/images/f8.png";
import f9 from "../assets/images/f9.png";

import { useState } from "react";

function Menuu(){
  const [activeTab, setActiveTab] = useState("all");
    return(
        <>
            {/* food section */}

  <section className="food_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container heading_center" style = {{paddingTop: "80px"}}>
        <h2>
          Our Menu
        </h2>
      </div>

      <ul className="filters_menu">
        <li className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>All</li>
        <li className={activeTab === "burger" ? "active" : ""} onClick={() => setActiveTab("burger")}>Burger</li>
        <li className={activeTab === "pizza" ? "active" : ""} onClick={() => setActiveTab("pizza")}>Pizza</li>
        <li className={activeTab === "pasta" ? "active" : ""} onClick={() => setActiveTab("pasta")}>Pasta</li>
        <li className={activeTab === "fries" ? "active" : ""} onClick={() => setActiveTab("fries")}>Fries</li>
      </ul>

      <div className="filters-content">
        <div className="row grid">
          <div className="col-sm-6 col-lg-4 all pizza">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={f1} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Delicious Pizza
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $20
                    </h6>
                    <a href="">
                          <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 456.029 456.029"
      style={{ enableBackground: "new 0 0 456.029 456.029" }}
    >
      <g>
        <g>
          <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
          c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
        </g>
      </g>

      <g>
        <g>
          <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
          C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
          c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
          C457.728,97.71,450.56,86.958,439.296,84.91z" />
        </g>
      </g>

      <g>
        <g>
          <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
          c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
        </g>
      </g>
    </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {(activeTab === "all" || activeTab === "all") && (
            <div className="col-sm-6 col-lg-4 all burger">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={f2} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Delicious Burger
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $15
                    </h6>
                    <a href="">
                     <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 456.029 456.029"
      style={{ enableBackground: "new 0 0 456.029 456.029" }}
    >
      <g>
        <g>
          <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
          c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
        </g>
      </g>

      <g>
        <g>
          <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
          C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
          c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
          C457.728,97.71,450.56,86.958,439.296,84.91z" />
        </g>
      </g>

      <g>
        <g>
          <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
          c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
        </g>
      </g>
                    </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
          
          {(activeTab === "all" || activeTab === "burger") && (
            <div className="col-sm-6 col-lg-4 all pizza">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={f3} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Delicious Pizza
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $17
                    </h6>
                    <a href="">
                      <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 456.029 456.029"
      style={{ enableBackground: "new 0 0 456.029 456.029" }}
    >
      <g>
        <g>
          <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
          c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
        </g>
      </g>

      <g>
        <g>
          <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
          C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
          c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
          C457.728,97.71,450.56,86.958,439.296,84.91z" />
        </g>
      </g>

      <g>
        <g>
          <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
          c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
        </g>
      </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
          
          {(activeTab === "all" || activeTab === "pizza") && (
            <div className="col-sm-6 col-lg-4 all pasta">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={f4} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Delicious Pasta
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $18
                    </h6>
                    <a href="">
                      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 456.029 456.029"
  style={{ enableBackground: "new 0 0 456.029 456.029" }}
>
  <g>
    <g>
      <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
      c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
    </g>
  </g>

  <g>
    <g>
      <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
      C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
      c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
      C457.728,97.71,450.56,86.958,439.296,84.91z" />
    </g>
  </g>

  <g>
    <g>
      <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
      c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
    </g>
  </g>
</svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
          
          {(activeTab === "all" || activeTab === "pasta") && (
            <div className="col-sm-6 col-lg-4 all fries">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={f5} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    French Fries
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $10
                    </h6>
                    <a href="">
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}

          {(activeTab === "all" || activeTab === "fries") && (
            <div className="col-sm-6 col-lg-4 all pizza">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={f6} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Delicious Pizza
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $15
                    </h6>
                    <a href="">

                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
          
          {(activeTab === "all" || activeTab === "pizza") && (
             <div className="col-sm-6 col-lg-4 all burger">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={f7} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Tasty Burger
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $12
                    </h6>
                    <a href="">
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}

          
          {(activeTab === "all" || activeTab === "pizza") && (
            <div className="col-sm-6 col-lg-4 all burger">
            <div className="box">
              <div>
                <div className="img-box">
                 <img src={f8} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Tasty Burger
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $14
                    </h6>
                    <a href="">
                      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 456.029 456.029"
    >
      <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
      c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />

      <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
      C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
      c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
      C457.728,97.71,450.56,86.958,439.296,84.91z" />

      <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
      c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
    </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
          
          {(activeTab === "all" || activeTab === "pizza") && (
            <div className="col-sm-6 col-lg-4 all pasta">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={f9} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Delicious Pasta
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $10
                    </h6>
                    <a href="">
                      <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 456.029 456.029"
      style={{ enableBackground: "new 0 0 456.029 456.029" }}
    >
      <g>
        <g>
          <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
          c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
        </g>
      </g>

      <g>
        <g>
          <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
          C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
          c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
          C457.728,97.71,450.56,86.958,439.296,84.91z" />
        </g>
      </g>

      <g>
        <g>
          <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
          c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
        </g>
      </g>
    </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

        </div>
      </div>
      <div className="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>

  {/* end food section */}
        </>
    );
}

export default Menuu;