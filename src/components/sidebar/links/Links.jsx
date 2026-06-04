import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = [
    { label: "Home", id: "Homepage" },
    { label: "Services", id: "Services" },
    { label: "Skills", id: "Skills" },
    { label: "Portfolio", id: "Portfolio" },
    { label: "Contact", id: "Contact" },
  ];

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.id}`}
          key={item.label}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            handleClick(item.id);
          }}
        >
          {item.label}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
