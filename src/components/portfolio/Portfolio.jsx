import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "PrideMatch - Face Recognition SaaS",
    img: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A production-ready SaaS platform that uses PyTorch and FAISS for face recognition and zero-shot image classification with OpenAI CLIP. Features JWT authentication, Celery async task queues, MinIO object storage, and a mobile-first interface. Eliminates manual photo sorting for events and organisations.",
  },
  {
    id: 2,
    title: "Fraud Detection - Microfinance AI",
    img: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "End-to-end fraud detection pipeline built for a microfinance company using XGBoost and CatBoost optimised for ROC-AUC. Designed with 13+ relational PostgreSQL models and a Flask REST API for real-time inference. Reduced fraudulent transactions and improved loan approval accuracy.",
  },
  {
    id: 3,
    title: "DONUT Invoice Extraction",
    img: "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Fine-tuned the DONUT (Document Understanding Transformer) model to extract structured data from complex invoice layouts for a property enterprise. Handles scanned PDFs and images with Tesseract OCR fallback. Reduced manual data entry time by automating end-to-end document processing.",
  },
  {
    id: 4,
    title: "Data Warehouse & BI Platform",
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Built a full data warehouse with dbt transformation layers and Apache Superset dashboards on PostgreSQL. Integrated Salesforce CRM data pipelines for a multi-property portfolio management system with automated rent collection tracking and lease analytics.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
