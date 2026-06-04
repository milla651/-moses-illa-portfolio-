import "./skills.scss";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI & Machine Learning",
    skills: ["PyTorch", "Scikit-learn", "XGBoost", "CatBoost", "FAISS", "MLflow", "Weights & Biases"],
  },
  {
    category: "Computer Vision & NLP",
    skills: ["OpenCV", "CLIP (ViT-B/32)", "DONUT", "Tesseract OCR", "Transformers", "HuggingFace"],
  },
  {
    category: "Backend & APIs",
    skills: ["Python", "Flask", "REST APIs", "Celery", "Redis", "JWT Auth", "MinIO / S3"],
  },
  {
    category: "Data & Databases",
    skills: ["PostgreSQL", "MongoDB", "dbt", "Pandas", "NumPy", "Apache Superset"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "AWS (EC2, S3, Lambda)", "GitHub Actions", "CI/CD", "DigitalOcean", "Nginx"],
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
