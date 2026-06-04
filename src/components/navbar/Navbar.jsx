import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Moses Illa
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/moses-illa-602759298/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/milla651/"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <img src="/dribbble.png" alt="GitHub" />
          </a>
          <a
            href="mailto:mosesilla651@gmail.com"
            title="Email"
          >
            <img src="/instagram.png" alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
