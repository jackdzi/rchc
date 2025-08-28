import React, { useRef } from "react";
import "./horizontalscroll.css";
import One from "../../images/poster1.png";
import Two from "../../images/poster2.png";
import Three from "../../images/poster3.png";
import Four from "../../images/poster4.png";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "../ImageContainer/ImageContainer";

const HorizontalScroll = () => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-45%"]);


  return <div className="carousel" ref={targetRef}>
    <div className="contentContainer">
      <motion.div className="images" style={{ x }}>
        <div className="imageItem">
          <ImageContainer
            imageSource={One}
            description={"Thing"}
          />
        </div>
        <div className="imageItem">
          <ImageContainer
            imageSource={Two}
            description={"Thing"}
          />
        </div>
        <div className="imageItem">
          <ImageContainer
            imageSource={Three}
            description={"Thing"}
          />
        </div>
        <div className="imageItem">
          <ImageContainer
            imageSource={Four}
            description={"Thing"}
          />
        </div>
      </motion.div>
    </div>
  </div>;
};

export default HorizontalScroll;
