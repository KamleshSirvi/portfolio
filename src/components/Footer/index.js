"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/KamleshSirvi" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kamleshkumar099/",
    },
    { icon: Twitter, href: "https://x.com/Kamlesh26478394" },
    { icon: Mail, href: "mailto:kamleshsirvi5841@gmail.com" },
  ];

  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <h2 className="text-2xl font-bold text-primary">Kamlesh Kumar</h2>
            <p className="text-muted-foreground mt-2">Software Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={24} />
                <span className="sr-only">{link.icon.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>&copy; {currentYear} Kamlesh Kumar. All rights reserved.</p>
          {/* <p className="mt-2"></p> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
