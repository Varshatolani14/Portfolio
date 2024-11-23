import profilepic from "./profilepic.jpg"
import arduino from "./arduino.webp"
import roboflow from "./roboflow.webp"
import ai_assistent from "./ai_assistent.webp"
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ExternalLinkIcon,
  ArrowUpIcon,
  Menu,
  X, 
} from "lucide-react";
import { render } from "react-dom";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypewriterComponent from "typewriter-effect";
export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const FadeInSection = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
    return (
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: 20,
              }
        }
        transition={{
          duration: 0.1,
        }}
      >
        {children}
      </motion.div>
    );
  };
  const navItems = ["About", "Projects", "Experience", "Skills", "Contact"];
  return (
    <div className="w-full relative">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="md:hidden"
              >
                <ul className="flex flex-col space-y-4 py-4">
                  {navItems.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="block text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <ul className="hidden md:flex justify-center space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <header className="bg-gray-900 text-white py-20 px-4 sm:px-6 text-center relative min-h-screen flex items-center justify-center">
        <div className="relative z-10">
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 0.1,
            }}
            className="mb-8"
          >
           <img
  src = {profilepic}
  alt="Varsha Tolani"
  className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto object-cover border-4 border-white shadow-xl transform hover:scale-110 transition-transform duration-300"
/>

          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
          >
            Varsha Tolani
          </motion.h1>
          <div className="text-lg sm:text-xl md:text-2xl mb-8 h-12">
            <TypewriterComponent
              options={{
                strings: [
                  "Aspiring AIML & Data Science Professional with a Heart for Frontend Elegance",
                  "Where Innovation Meets Intelligence and Aesthetic",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com"
              className="hover:text-teal-300 transform hover:scale-110 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/varsha-tolani-771610251/"
              className="hover:text-teal-300 transform hover:scale-110 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="mailto:varshatolani14@gmail.com"
              className="hover:text-teal-300 transform hover:scale-110 transition-all"
              aria-label="Email Contact"
            >
              <MailIcon size={24} />
            </a>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-20">
        <FadeInSection>
          <section id="about" className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <p className="text-base sm:text-lg mb-6">
                  Currently pursuing dual degrees in technology and data
                  science:
                </p>
                <ul className="space-y-4">
                  <li>• B.Tech in AIML (2023-2027) at BMSCE, Bangalore</li>
                  <li>
                    • B.S. in Data Science, IIT Madras (September Batch 2023)
                  </li>
                </ul>
              </div>
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 sm:p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="flex items-center">
                  <MapPinIcon className="mr-2" /> Jaipur, India
                </p>
              </motion.div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="projects" className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                
                  {
                    title: "Arduino Gesture-Controlled Chrome Game",
                    description: "Interactive gaming experience using Arduino and gesture recognition",
                    image: arduino,
                    tags: ["Arduino", "C++", "Sensors"],
                  },
                {
                  title: "Emotion Detection Project",
                  description:
                    "Built with Roboflow for real-time emotion recognition",
                  image: roboflow,
                  tags: ["Python", "Roboflow", "OpenCV"],
                },
                {
                  title: "AI Assistant",
                  description: "Custom AI assistant developed using Python",
                  image: ai_assistent,
                  tags: ["Python", "NLP", "AI"],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                  }}
                  className="border rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all bg-white"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    href="#"
                  >
                    View Project <ExternalLinkIcon size={16} className="ml-2" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="experience" className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Experience & Memberships
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Tech Team Member - Augment AI",
                  period: "Sept 2024 - Sept 2027",
                },
                {
                  title: "Tech Team Member - Code Locked",
                  period: "Sept 2024 - Sept 2027",
                },
                {
                  title: "Junior Core - Singularity",
                  period: "Nov 2024 - Nov 2025",
                },
                {
                  title: "International Member of IEEE (CS branch)",
                  period: "Nov 2024 - Nov 2027",
                },
                {
                  title: "Global Member of ACM club",
                  period: "Nov 2024 - Nov 2027",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 10,
                  }}
                  className="border-l-4 border-gray-200 pl-4 hover:border-teal-500 transition-colors"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="skills" className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Programming Languages",
                  skills: [
                    "Python",
                    "Java",
                    "C",
                    "C++",
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                  ],
                },
                {
                  title: "Libraries & Frameworks",
                  skills: [
                    "React",
                    "OpenCV",
                    "Pandas",
                    "NumPy",
                    "scipy",
                    "seaborn",
                    "Matplotlib",
                    "PyTorch",
                  ],
                },
                {
                  title: "Tools",
                  skills: ["Git", "Figma", "Canva", "Arduino", "Roboflow"],
                },
                {
                  title: "Soft Skills",
                  skills: ["Problem Solving", "Communication"],
                },
              ].map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          scale: 1.1,
                        }}
                        className="bg-gradient-to-r from-blue-100 to-teal-100 text-gray-800 px-3 py-1 rounded-full shadow-sm border border-blue-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="contact" className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Contact Me</h2>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="flex flex-col items-center space-y-4"
            >
              <p className="flex items-center">
                <PhoneIcon className="mr-2" /> +91 6377900277
              </p>
              <p className="flex items-center">
                <MailIcon className="mr-2" /> varshatolani14@gmail.com
              </p>
              <div className="flex gap-4 mt-4">
                <motion.a
                  whileHover={{
                    scale: 1.2,
                  }}
                  href="https://www.linkedin.com/in/varsha-tolani-771610251/"
                  className="hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={24} />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.2,
                  }}
                  href="https://github.com"
                  className="hover:text-gray-600 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={24} />
                </motion.a>
              </div>
            </motion.div>
          </section>
        </FadeInSection>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-4 text-center mt-20">
        <p>© 2024 Varsha Tolani. All rights reserved.</p>
      </footer>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
render(<Portfolio />, document.getElementById("root"));

