"use client";
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
     "Associate Software Developer",
    "MERN Stack Developer", 
    "Full-Stack Engineer",
    "Microservices Architect",
    "Cloud Solutions Developer"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]); // Added missing dependency

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MySQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express.js", icon: "🚀" },
    { name: "AWS S3", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Sequelize", icon: "💾" }
  ];

  const stats = [
    { number: "6+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Technologies Mastered" },
    { number: "🥇", label: "Gold Medalist" }
  ];

  // Enhanced Skills Categories
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100",
      skills: ["React.js", "Next.js", "Redux", "Context API", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI", "JavaScript (ES6+)", "jQuery"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      skills: ["Node.js", "Express.js", "Nest.js", "RESTful APIs", "JWT Authentication", "Microservices Architecture"]
    },
    {
      title: "Database & Storage",
      icon: "🗃️",
      color: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Firebase", "Database Design", "Database Optimization"]
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      color: "from-orange-50 to-red-50",
      iconBg: "bg-orange-100",
      skills: ["Docker", "CI/CD", "AWS", "Vercel", "Git", "GitHub", "GitLab", "Bitbucket", "Postman", "Swagger", "Babel"]
    },
    {
      title: "Development Practices",
      icon: "📋",
      color: "from-teal-50 to-cyan-50",
      iconBg: "bg-teal-100",
      skills: ["Responsive Web Design", "UI/UX Optimization", "Agile/Scrum Development", "Third-Party API Integration"]
    }
  ];

  const projects = [
    {
      title: "WorkBirdge",
      category: "HR Management System",
      description: "A comprehensive MERN stack application with role-based access control featuring Super Admin, Admin, and Employee portals. Integrated AWS S3 for secure document storage and Sequelize for robust database management.",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3", "Sequelize", "Express.js"],
      features: [
        "Role-based access control system",
        "AWS S3 document storage integration",
        "Node.js email automation",
        "Streamlined HR workflows"
      ],
      icon: "👥",
      color: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100"
    },
    {
      title: "VistaMart.biz",
      category: "E-commerce Platform",
      description: "Scalable e-commerce solution with separate portals for administrators, sellers, and customers. Features comprehensive product management, order processing, and seamless user interactions.",
      technologies: ["MERN Stack", "MySQL", "Payment Gateway", "Admin Panel"],
      features: [
        "Multi-portal architecture",
        "Advanced product management",
        "Order processing system",
        "Customer interaction tools"
      ],
      icon: "🛒",
      color: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100"
    },
    {
      title: "E-Health",
      category: "Healthcare Application",
      description: "Responsive healthcare platform featuring comprehensive pharmacy management and doctor-patient interaction systems, significantly improving healthcare accessibility and quality of care.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Medical APIs"],
      features: [
        "Pharmacy management system",
        "Doctor-patient portal",
        "Medical record management",
        "Appointment scheduling"
      ],
      icon: "🏥",
      color: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100"
    },
    {
      title: "DHA-Islamabad",
      category: "Government Portal",
      description: "Professional website and admin panel designed for DHA-Islamabad with secure authentication systems and robust data management capabilities for streamlined governmental operations.",
      technologies: ["React", "Node.js", "MySQL", "Authentication", "Admin Panel"],
      features: [
        "Secure authentication system",
        "Robust data management",
        "Administrative controls",
        "Government compliance"
      ],
      icon: "🏛️",
      color: "from-yellow-50 to-orange-50",
      iconBg: "bg-yellow-100"
    },
    {
      title: "E-Market",
      category: "Marketplace Platform",
      description: "Dynamic marketplace platform with dedicated portals for administrators, restaurants, and customers. Enables efficient menu management, order processing, and customer interaction.",
      technologies: ["MERN Stack", "Real-time Updates", "Payment Integration"],
      features: [
        "Restaurant management portal",
        "Real-time order tracking",
        "Menu management system",
        "Customer review system"
      ],
      icon: "🍽️",
      color: "from-red-50 to-rose-50",
      iconBg: "bg-red-100"
    },
    {
      title: "World Staff System",
      category: "Staff Management",
      description: "Comprehensive staff management platform designed to enhance productivity and streamline organizational workflows through an intuitive and user-friendly interface.",
      technologies: ["React", "Node.js", "Database Management", "UI/UX"],
      features: [
        "Employee management",
        "Productivity tracking",
        "Workflow optimization",
        "Reporting system"
      ],
      icon: "🌍",
      color: "from-teal-50 to-cyan-50",
      iconBg: "bg-teal-100"
    }
  ];

  const expertise = [
    {
      title: "Microservices Architecture",
      description: "Building scalable microservices using Node.js, React, Docker, and MySQL with proper containerization",
      icon: "🏗️",
      color: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100"
    },
    {
      title: "Cloud & AWS Integration",
      description: "AWS S3 storage optimization, lifecycle policies, SES email services, and EC2 deployment strategies",
      icon: "☁️",
      color: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100"
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end MERN stack applications with RESTful APIs, responsive UI, and database optimization",
      icon: "💻",
      color: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100"
    }
  ];

  const experience = [
    {
      company: "Webrange Solutions",
      position: "Full Stack Developer",
      duration: "May 2025 – Present",
      type: "Full Time",
      location: "Remote",
      highlights: [
        "Building comprehensive admin panels using Next.js and TypeScript",
        "Implementing Supabase backend integration for real-time data management",
        "Developing responsive websites with modern UI/UX principles",
        "Managing full-stack architecture and database design"
      ]
    },
    {
      company: "DevEntia Tech",
      position: "Associate Software Developer",
      duration: "Nov 2024 – Apr 2025",
      type: "Full Time",
      location: "Islamabad",
      highlights: [
        "Microservices platform with Node.js, React, Docker, MySQL",
        "AWS S3 integration with lifecycle policies optimization",
        "Sequelize ORM implementation for MySQL migrations",
        "Email service with Nodemailer and AWS SES"
      ]
    },
    {
      company: "Digital To Design",
      position: "MERN Stack Developer", 
      duration: "Jan 2024 – Nov 2024",
      type: "Part Time",
      location: "Islamabad",
      highlights: [
        "Full-stack web applications using MERN stack",
        "RESTful API development and integration",
        "Responsive UI with React.js and Tailwind CSS",
        "Cloud deployment on AWS, Heroku, Vercel"
      ]
    }
  ];

  const education = {
    degree: "BS Computer Science",
    university: "MY University",
    location: "Islamabad",
    cgpa: "3.58/4.00",
    achievement: "Gold Medalist",
    icon: "🎓",
    medalIcon: "🥇",
    color: "from-indigo-50 to-purple-50",
    iconBg: "bg-indigo-100",
    medalBg: "bg-yellow-100"
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-24 pb-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Greeting */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-600 border border-indigo-200 animate-fade-in">
                👋 Hello, I&apos;m a Software Developer
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block mb-2">Building Modern</span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Solutions
              </span>
            </h1>

            {/* Gold Medal Achievement Banner */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-full animate-pulse">
                <span className="text-2xl mr-3 animate-bounce">🥇</span>
                <span className="text-lg font-bold text-yellow-800">Gold Medalist</span>
                <span className="text-2xl ml-3 animate-bounce">🥇</span>
              </div>
            </div>

            {/* Dynamic Role */}
            <div className="mb-8 h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light">
                I&apos;m an{' '}
                <span className="font-bold text-indigo-600 inline-block min-w-[340px] sm:text-center">
                  <span 
                    key={currentRole}
                    className="animate-fade-in-up"
                  >
                    {roles[currentRole]}
                  </span>
                </span>
              </p>
            </div>

            {/* Updated Description */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Currently working as a <span className="font-semibold text-indigo-600">Full Stack Developer at Webrange Solutions</span>, 
              building <span className="font-semibold text-purple-600">Next.js admin panels</span> with <span className="font-semibold text-green-600">Supabase integration</span>. 
              <span className="font-semibold text-yellow-600">Gold Medalist</span> CS graduate with <span className="font-semibold text-green-600">3.58 CGPA</span>, experienced in developing 
              <span className="font-semibold text-blue-600"> enterprise-level solutions</span> and 
              <span className="font-semibold text-orange-600"> modern web applications</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#projects"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                View My Projects
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="#contact"
                className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-full border-2 border-gray-200 hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Let&apos;s Connect
                <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>

            {/* Tech Stack Icons */}
            <div className="mb-16">
              <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium">Core Technologies</p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`text-3xl sm:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 ${
                    stat.label === "Gold Medalist" ? "text-yellow-600" : "text-indigo-600"
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#education" className="flex flex-col items-center text-gray-400 hover:text-indigo-600 transition-colors duration-300">
              <span className="text-sm mb-2">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div> */}
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Education & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong academic foundation in Computer Science with exceptional academic performance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br ${education.color} rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up relative overflow-hidden`}>
              
              {/* Achievement Badge */}
              <div className="absolute top-4 right-4">
                <div className={`w-16 h-16 ${education.medalBg} rounded-full flex items-center justify-center border-4 border-yellow-300 animate-pulse`}>
                  <span className="text-2xl">{education.medalIcon}</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between pr-20">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className={`w-16 h-16 ${education.iconBg} rounded-full flex items-center justify-center`}>
                    <span className="text-2xl">{education.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{education.degree}</h3>
                    <p className="text-indigo-600 font-semibold text-lg">{education.university}</p>
                    <p className="text-gray-600">{education.location}</p>
                    
                    {/* Gold Medalist Badge */}
                    <div className="mt-2 inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-300 rounded-full">
                      <span className="text-lg mr-2">🥇</span>
                      <span className="text-yellow-800 font-bold text-sm">{education.achievement}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center md:text-right">
                  <div className="inline-block px-4 py-2 bg-white/70 rounded-full border border-gray-200 mb-2">
                    <span className="text-2xl font-bold text-indigo-600">{education.cgpa}</span>
                  </div>
                  <p className="text-gray-600 font-medium">CGPA</p>
                </div>
              </div>

              {/* Achievement Details */}
              <div className="mt-6 pt-6 border-t border-gray-200/50">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-600 mb-1">🥇</div>
                    <p className="text-sm text-gray-600 font-medium">Academic Excellence</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600 mb-1">3.58</div>
                    <p className="text-sm text-gray-600 font-medium">CGPA Achievement</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">🎓</div>
                    <p className="text-sm text-gray-600 font-medium">CS Graduate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the full development stack
            </p>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${category.iconBg} rounded-xl flex items-center justify-center`}>
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/70 text-gray-700 font-medium rounded-full border border-gray-200 hover:border-indigo-300 hover:bg-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing real-world applications built with modern technologies and best practices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-gradient-to-br ${project.color} rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 ${project.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl">{project.icon}</span>
                  </div>
                  <span className="px-3 py-1 bg-white/70 text-gray-700 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/70 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Discuss Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building expertise through hands-on experience in modern web development, admin panels, and cloud technologies
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.company}
                className={`bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up ${
                  index === 0 ? 'ring-2 ring-indigo-500 ring-opacity-20' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                      {index === 0 && (
                        <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-indigo-600 font-semibold text-lg">{exp.company}</p>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <span className={`inline-block px-3 py-1 ${
                      exp.type === 'Full Time' ? 'bg-indigo-100 text-indigo-800' : 'bg-purple-100 text-purple-800'
                    } rounded-full text-sm font-medium mb-2`}>
                      {exp.type}
                    </span>
                    <p className="text-gray-600 font-medium">{exp.duration}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 ${
                        index === 0 ? 'bg-green-600' : 'bg-indigo-600'
                      } rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Current role additional info */}
                {index === 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-200">
                        Supabase
                      </span>
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full border border-purple-200">
                        Admin Panels
                      </span>
                      <span className="px-3 py-1 bg-orange-50 text-orange-700 text-sm font-medium rounded-full border border-orange-200">
                        TypeScript
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized skills developed through real-world projects and professional experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br ${item.color} hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}