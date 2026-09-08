import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ERP - SAP B1 Enterprise Platform",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Built a full-stack enterprise ERP integrating directly with SAP Business One across 12+ business modules. Engineered a real-time Formatted Search (FMS) system using WebSockets for live field validation, a document lifecycle engine supporting full SAP workflows, and a multi-tenant Laravel 10 backend with domain-based tenant isolation. Delivered 8,000+ lines of Vue 3 Composition API code.",
  },
  {
    id: 2,
    title: "OpenTrace - African Agricultural Intelligence RAG Platform",
    img: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Production RAG platform deployed on Railway answering natural-language questions about African agriculture and food security. Combines Qdrant Cloud vector search with BigQuery NL-to-SQL, ingests 40+ African RSS feeds via a multi-source pipeline, and stores 15,000+ dense and sparse vector chunks for hybrid semantic search. Orchestrated by LangGraph with parallel retrieval threads and session-isolated chat memory.",
  },
  {
    id: 3,
    title: "PrideMatch - AI-Powered Multi-Tenant Safari Photo SaaS",
    img: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Live at pridematches.online with real paying customers. Fine-tuned a pretrained PyTorch model for face identification achieving 95%+ accuracy across 5,000+ images per trip. Built a FAISS similarity matching engine with dual payment processing via Stripe and M-Pesa, JWT authentication, Celery async task queues, MinIO object storage, and a mobile-first interface.",
  },
  {
    id: 4,
    title: "Medical Imaging AI Platform",
    img: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Full-stack AI-powered medical imaging platform supporting multi-modal analysis across X-ray, CT, and MRI with 18+ pathology detection capabilities. Implemented GradCAM-based explainable AI for clinically interpretable heatmap visualisations. Built on PyTorch, MONAI, TorchXRayVision with a scalable Flask microservices backend, HIPAA-compliant audit logging, and automated DICOM de-identification.",
  },
  {
    id: 5,
    title: "AI Solar Installation Documentation Platform",
    img: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Production AI documentation system using zero-shot CLIP classification across 25+ installation stage categories. Built an OpenCV pre-filtering pipeline for blur detection, brightness assessment, and resolution validation before classification. Async Celery report generation with multi-channel delivery via SendGrid and WhatsApp Business API.",
  },
  {
    id: 6,
    title: "Fraud Detection & Anomaly Detection",
    img: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "End-to-end fraud detection pipeline built for a mid-size microfinance company using XGBoost and CatBoost optimised for ROC-AUC with 13+ relational PostgreSQL models. Also built an unsupervised anomaly detection model using PyTorch. Tracked precision, recall, and F1 benchmarks with MLflow across all experiments.",
  },
  {
    id: 7,
    title: "DONUT Invoice Extraction System",
    img: "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Fine-tuned the DONUT (Document Understanding Transformer) model for complex invoice layouts, extracting structured data across 10+ fields without explicit OCR. Delivered a production pipeline for a property enterprise that eliminated manual data entry across the entire client invoicing workflow.",
  },
  {
    id: 8,
    title: "Estate Management Platform",
    img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Full-stack rental property management SaaS with RBAC, multi-property portfolio management, and automated rent collection via M-Pesa Daraja API. Built on Flask, PostgreSQL with 13+ relational models, MinIO S3-compatible object storage, Celery/Redis async processing, ReportLab document generation, and Twilio WhatsApp notifications.",
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
