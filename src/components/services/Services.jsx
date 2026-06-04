import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I build intelligent systems that solve
          <br /> real-world problems at scale
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Production</motion.b> AI
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Machine Learning</h2>
          <p>
            End-to-end ML pipelines using PyTorch and Scikit-learn - from data
            preprocessing and model training to deployment. Specialised in
            anomaly detection, fraud detection, and classification systems with
            measurable business impact.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Computer Vision</h2>
          <p>
            Building vision pipelines with OpenCV and deep learning - face
            recognition, object detection, document extraction (DONUT), OCR, and
            image quality assessment. Deployed in production with real users and
            real throughput.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend & APIs</h2>
          <p>
            RESTful APIs built with Flask, secured with JWT authentication and
            role-based access control. Async task processing via Celery and
            Redis, file storage with MinIO, and PostgreSQL schemas designed for
            complex relational data.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AI Automation</h2>
          <p>
            Automating workflows with LLM integration, document processing, and
            intelligent data pipelines. From invoice extraction to fraud
            flagging, I turn manual, error-prone processes into reliable
            automated systems.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
