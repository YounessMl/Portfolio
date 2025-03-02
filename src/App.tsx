import React, { useState, useEffect } from 'react';
import { 
Github, 
Linkedin, 
Twitter, 
Mail, 
Menu, 
X, 
Code, 
Briefcase, 
User, 
FileText, 
ExternalLink,
MessageSquare,
RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './components/ThemeToggle';
import ParticleBackground from './components/ParticleBackground';
import Scene3D from './components/Scene3D';
import HeroModel from './components/HeroModel';
import IcosahedronModel from './components/IcosahedronModel';
import SkillsModel from './components/SkillsModel';
import ProjectsModel from './components/ProjectsModel';
import ContactModel from './components/ContactModel';

function App() {
const [activeSection, setActiveSection] = useState('home');
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [darkMode, setDarkMode] = useState(false);
const [modelToggle, setModelToggle] = useState(false);

  // Initialize dark mode based on user preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Update document class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

return (
<div className={`min-h-screen bg-gray-50 dark:bg-dark-100 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300`}>
    <ParticleBackground />
      {/* Header */}
      <header className="fixed w-full bg-white dark:bg-dark-200 shadow-sm z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold">Alex Morgan</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section
                    ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                } transition-colors duration-300`}
              >
                {section}
              </button>
            ))}
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <button 
              className="text-gray-600 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-dark-200 border-t border-gray-100 dark:border-dark-300 transition-colors duration-300"
            >
              <div className="container mx-auto px-4 py-2">
                <div className="flex flex-col space-y-3">
                  {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`py-2 capitalize text-left ${
                        activeSection === section
                          ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                          : 'text-gray-600 dark:text-gray-300'
                      } transition-colors duration-300`}
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 dark:bg-dark-100 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Alex Morgan</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                  I build exceptional and accessible digital experiences for the web.
                  Passionate about creating elegant solutions to complex problems.
                </p>
                <div className="flex space-x-4">
                  <motion.button 
                    onClick={() => scrollToSection('projects')}
                    className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Work
                  </motion.button>
                  <motion.button 
                    onClick={() => scrollToSection('contact')}
                    className="border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-dark-300 px-6 py-3 rounded-lg font-medium transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Me
                  </motion.button>
                </div>
                <div className="flex mt-8 space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="mailto:alex@example.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2 flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-300 shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                      alt="Alex Morgan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-200 p-4 rounded-full shadow-lg">
                    <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                <div className="w-full h-full absolute opacity-70">
                    <Scene3D>
                    {modelToggle ? (
                        <IcosahedronModel darkMode={darkMode} />
                    ) : (
                        <HeroModel darkMode={darkMode} />
                    )}
                    </Scene3D>
                </div>
                </div>
                <motion.button
                onClick={() => setModelToggle(!modelToggle)}
                className="absolute -bottom-12 -left-4 bg-white dark:bg-dark-200 p-3 rounded-full shadow-lg z-10 pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Toggle 3D Model"
                >
                <RefreshCw className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-dark-200 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col items-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-2">About Me</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                Get to know me better
              </p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" 
                  alt="Working on code" 
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I'm a Full Stack Developer with 5+ years of experience in building web applications. 
                  I specialize in JavaScript, React, Node.js, and modern web technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  My journey in software development began during college where I discovered my passion for creating 
                  elegant solutions to complex problems. Since then, I've worked with startups and established companies 
                  to deliver high-quality software products.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-medium">Name:</p>
                    <p className="text-gray-600 dark:text-gray-300">Alex Morgan</p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600 dark:text-gray-300">alex@example.com</p>
                  </div>
                  <div>
                    <p className="font-medium">From:</p>
                    <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                  </div>
                  <div>
                    <p className="font-medium">Availability:</p>
                    <p className="text-gray-600 dark:text-gray-300">Open to opportunities</p>
                  </div>
                </div>
                <motion.a 
                  href="#" 
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-100 transition-colors duration-300 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col items-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-2">My Skills</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                Technologies and tools I work with
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'JavaScript', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'React', level: 90 },
                { name: 'Node.js', level: 80 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'Next.js', level: 75 },
                { name: 'GraphQL', level: 70 },
                { name: 'MongoDB', level: 75 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'Docker', level: 65 },
                { name: 'AWS', level: 60 },
                { name: 'Git', level: 85 }
              ].map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="bg-white dark:bg-dark-200 p-6 rounded-lg shadow-md transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-medium mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2.5">
                    <motion.div 
                      className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full" 
                      style={{ width: '0%' }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                  <p className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">{skill.level}%</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-10 right-10 w-40 h-40 opacity-30 pointer-events-none hidden lg:block">
            <Scene3D>
              <SkillsModel darkMode={darkMode} />
            </Scene3D>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-dark-200 transition-colors duration-300 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col items-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-2">My Projects</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                Some of my recent work
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
                  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                  link: '#'
                },
                {
                  title: 'Task Management App',
                  description: 'A collaborative task management application with real-time updates and team workspaces.',
                  image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
                  tech: ['React', 'Firebase', 'Tailwind CSS'],
                  link: '#'
                },
                {
                  title: 'Weather Dashboard',
                  description: 'A weather application that provides current conditions and forecasts for locations worldwide.',
                  image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  tech: ['JavaScript', 'OpenWeather API', 'CSS'],
                  link: '#'
                },
                {
                  title: 'Recipe Finder',
                  description: 'An application that helps users discover recipes based on available ingredients and dietary preferences.',
                  image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  tech: ['React', 'Redux', 'Spoonacular API'],
                  link: '#'
                },
                {
                  title: 'Portfolio Website',
                  description: 'A responsive portfolio website showcasing projects and skills with a modern design.',
                  image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  tech: ['React', 'Tailwind CSS', 'Framer Motion'],
                  link: '#'
                },
                {
                  title: 'Fitness Tracker',
                  description: 'A fitness application that allows users to track workouts, set goals, and monitor progress.',
                  image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                  tech: ['React Native', 'Firebase', 'Chart.js'],
                  link: '#'
                }
              ].map((project, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 dark:bg-dark-300 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                    >
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="mr-2 h-5 w-5" /> More on GitHub
              </motion.a>
            </div>
          </div>
          
          <div className="absolute top-20 left-10 w-40 h-40 opacity-30 pointer-events-none hidden lg:block">
            <Scene3D>
              <ProjectsModel darkMode={darkMode} />
            </Scene3D>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-100 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col items-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-2">Experience</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                My professional journey
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  company: 'TechCorp Inc.',
                  position: 'Senior Frontend Developer',
                  period: 'Jan 2022 - Present',
                  description: 'Lead the frontend development team in building and maintaining a large-scale SaaS platform. Implemented new features, improved performance, and mentored junior developers.',
                  achievements: [
                    'Reduced page load time by 40% through code optimization and lazy loading',
                    'Implemented a component library that improved development efficiency by 30%',
                    'Led the migration from Angular to React, resulting in improved performance and developer satisfaction'
                  ]
                },
                {
                  company: 'WebSolutions LLC',
                  position: 'Full Stack Developer',
                  period: 'Mar 2019 - Dec 2021',
                  description: 'Worked on multiple client projects developing full-stack web applications. Collaborated with designers, product managers, and other developers to deliver high-quality solutions.',
                  achievements: [
                    'Developed a custom e-commerce platform that increased client sales by 25%',
                    'Implemented CI/CD pipelines that reduced deployment time by 60%',
                    'Created a real-time dashboard for data visualization using WebSockets and D3.js'
                  ]
                },
                {
                  company: 'StartupHub',
                  position: 'Junior Developer',
                  period: 'Jun 2017 - Feb 2019',
                  description: 'Assisted in the development of web applications for early-stage startups. Gained experience in various technologies and agile development methodologies.',
                  achievements: [
                    'Contributed to the development of 5+ MVPs for startup clients',
                    'Built responsive UIs using modern CSS frameworks',
                    'Implemented RESTful APIs using Node.js and Express'
                  ]
                }
              ].map((job, index) => (
                <motion.div 
                  key={index} 
                  className="mb-10 relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-500"></div>
                  <div className="bg-white dark:bg-dark-200 p-6 rounded-lg shadow-md transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="text-xl font-bold">{job.position}</h3>
                      <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm px-3 py-1 rounded-full mt-2 md:mt-0">
                        {job.period}
                      </span>
                    </div>
                    <h4 className="text-lg text-indigo-600 dark:text-indigo-400 mb-3">{job.company}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <motion.a 
                href="#" 
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="mr-2 h-5 w-5" /> View Full Resume
              </motion.a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-dark-200 transition-colors duration-300 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col items-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                Let's get in touch
              </p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row gap-10">
              <motion.div 
                className="md:w-1/3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gray-50 dark:bg-dark-300 p-6 rounded-lg shadow-md mb-6 transition-colors duration-300"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">alex@example.com</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 dark:bg-dark-300 p-6 rounded-lg shadow-md mb-6 transition-colors duration-300"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full mr-4">
                      <MessageSquare className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Social Media</h3>
                      <p className="text-gray-600 dark:text-gray-300">@alexmorgan</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-50 dark:bg-dark-300 p-6 rounded-lg shadow-md transition-colors duration-300"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full mr-4">
                      <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Freelance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Available for work</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="md:w-2/3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 dark:bg-dark-300 p-6 rounded-lg shadow-md transition-colors duration-300">
                <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-dark-400 bg-white dark:bg-dark-200 text-gray-800 dark:text-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-dark-400 bg-white dark:bg-dark-200 text-gray-800 dark:text-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-dark-400 bg-white dark:bg-dark-200 text-gray-800 dark:text-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-dark-400 bg-white dark:bg-dark-200 text-gray-800 dark:text-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-10 right-10 w-40 h-40 opacity-30 pointer-events-none hidden lg:block">
            <Scene3D>
              <ContactModel darkMode={darkMode} />
            </Scene3D>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-dark-300 text-white py-8 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold">Alex Morgan</span>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:alex@example.com" className="text-gray-300 hover:text-white transition duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Alex Morgan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;