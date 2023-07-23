import React from "react";

const ClientCard = ({ img, title, dis, star }) => {
  return (
    <>
       <div className="client_box" >
            <div className="client_left">
              <div className="cilent_slider">
                <img src={img} alt="vages Web" />
              </div>
            </div>
            <div className="client_right">
              <div className="client_right_title">
                <h5 className="section_title5">{title}</h5>
                <p>{dis}</p>
                <div className="client-star-con">
                  <span>
                    <img src={star} alt="" />
                  </span>
                  <span>
                  
                    <img src={star} alt="" />
                  </span>
                  <span>

                    <img src={star} alt="" />
                  </span>
                  <span>

                    <img src={star} alt="" />
                  </span>
                  <span>
                    <img src={star} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default ClientCard;
