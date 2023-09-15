import React from "react";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="rect">
        <div className="circle"></div>
        <div className="circle-1"></div>

      </div>

      <div className="rect2">
        <div className="rect3"></div>
        <div className="rect4"></div>
        {/* Row 1 small lines */}
        <div className="grp_of_small_rect">
          <div className="smallrect-1"></div>
          <div className="verysmallrect-2"></div>
          <div className="verysmallrect-2"></div>
          <div className="verysmallrect-3"></div>
        </div>
        {/* Row 2 small lines */}
        <div className="grp_of_small_rect_2">
          <div className="smallrect-1_2"></div>
          <div className="verysmallrect-2_2"></div>
          <div className="verysmallrect-02_2"></div>
          <div className="verysmallrect-3_2"></div>
        </div>
        {/* Row 2 small lines */}
        <div className="grp_of_small_rect_3">
          <div className="smallrect-1_3"></div>
          <div className="verysmallrect-2_3"></div>
          <div className="verysmallrect-02_3"></div>
          <div className="verysmallrect-3_3"></div>
        </div>
      </div>
    </>
  );
}

export default Card;
