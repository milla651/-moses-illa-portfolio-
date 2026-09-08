import "./skills.scss";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI & Machine Learning",
    skills: ["PyTorch", "Scikit-learn", "XGBoost", "CatBoost", "FAISS", "Pinecone", "MLflow", "Weights & Biases", "Optuna", "SHAP", "SMOTE"],
  },
  {
    category: "RAG & Vector Search",
    skills: ["LangGraph", "Qdrant Cloud", "FAISS", "Pinecone", "Hybrid Dense+Sparse Retrieval", "Query Decomposition", "Session-Isolated Chat Memory"],
  },
  {
    category: "Computer Vision & Document AI",
    skills: ["OpenCV", "CLIP (ViT-B/32)", "DONUT", "MONAI", "TorchXRayVision", "GradCAM", "Tesseract OCR", "PaddleOCR", "DICOM Processing"],
  },
  {
    category: "Frontend",
    skills: ["Vue 3 Composition API", "Vuetify 3", "Pinia", "CASL RBAC", "vue-i18n (RTL)", "WebSockets", "SignalR", "Vite", "Tailwind CSS", "ApexCharts"],
  },
  {
    category: "Backend & APIs",
    skills: ["Python", "FastAPI", "Flask", "Laravel 10", "PHP 8.3", "REST APIs", "Celery", "Redis", "Gunicorn", "Nginx", "JWT Auth", "MinIO / S3"],
  },
  {
    category: "ERP & Enterprise Integration",
    skills: ["SAP Business One (B1)", "FMS Formatted Search", "Document Lifecycle Management", "Multi-Tenant SaaS", "Spatie Multitenancy", "Sanctum Auth"],
  },
  {
    category: "Data & Databases",
    skills: ["PostgreSQL", "MySQL", "BigQuery", "MongoDB", "dbt", "Pandas", "NumPy", "Apache Superset", "Trafilatura"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Docker Compose", "AWS (EC2, S3, Lambda, SageMaker)", "Terraform", "Railway", "DigitalOcean", "GitHub Actions", "CI/CD", "PM2"],
  },
  {
    category: "Payments & Integrations",
    skills: ["M-Pesa Daraja API", "Stripe", "Twilio WhatsApp", "SendGrid", "WeasyPrint", "ReportLab", "WhatsApp Business API"],
  },
  {
    category: "Security & Compliance",
    skills: ["JWT Authentication", "RBAC", "HIPAA-Compliant Audit Logging", "Data Encryption", "DICOM De-identification"],
  },
];

const Skills = () => {
  return (
    <div className="skills">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>
      <div className="groupsContainer">
        {skillGroups.map((group, i) => (
          <motion.div
            className="group"
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3>{group.category}</h3>
            <div className="tags">
              {group.skills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
