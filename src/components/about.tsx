"use client";
import React, { useState, useRef, useEffect } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    {
      id: 'story',
      label: 'My Story',
      icon: '📖'
    },
    {
      id: 'journey',
      label: 'Journey',
      icon: '🚀'
    },
    {
      id: 'values',
      label: 'Values',
      icon: '💎'
    },
    {
      id: 'interests',
      label: 'Interests',
      icon: '🎯'
    }
  ];

  const achievements = [
    {
      icon: '🥇',
      title: 'Gold Medalist',
      description: 'Academic Excellence in Computer Science',
      color: 'from-yellow-50 to-amber-50',
      iconBg: 'bg-yellow-100'
    },
    {
      icon: '💼',
      title: 'Full-Time Developer',
      description: 'Associate Software Developer at DevEntia Tech',
      color: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-blue-100'
    },
    {
      icon: '🏗️',
      title: 'Project Leader',
      description: '6+ Successful Projects Delivered',
      color: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100'
    },
    {
      icon: '⚡',
      title: 'Tech Enthusiast',
      description: '15+ Technologies Mastered',
      color: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-100'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Associate Software Developer',
      company: 'DevEntia Tech',
      description: 'Building microservices with Node.js, React, Docker, and AWS',
      icon: '💼',
      color: 'bg-indigo-600'
    },
    {
      year: '2024',
      title: 'MERN Stack Developer',
      company: 'Digital To Design',
      description: 'Developed full-stack applications and RESTful APIs',
      icon: '🚀',
      color: 'bg-purple-600'
    },
    {
      year: '2023',
      title: 'Lab Engineer',
      company: 'Muslim Youth University',
      description: 'Managed computer systems and mentored students',
      icon: '🎓',
      color: 'bg-green-600'
    },
    {
      year: '2020-2024',
      title: 'BS Computer Science',
      company: 'MY University',
      description: 'Gold Medalist with 3.58 CGPA',
      icon: '🏆',
      color: 'bg-yellow-600'
    }
  ];

  const values = [
    {
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies and best practices in software development.',
      icon: '📚',
      color: 'from-blue-50 to-indigo-50'
    },
    {
      title: 'Quality Code',
      description: 'Writing clean, maintainable, and scalable code that stands the test of time.',
      icon: '💻',
      color: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Team Collaboration',
      description: 'Believing in the power of teamwork and effective communication to achieve great results.',
      icon: '🤝',
      color: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to solve complex problems.',
      icon: '💡',
      color: 'from-orange-50 to-red-50'
    }
  ];

  const interests = [
    { name: 'Cloud Computing', icon: '☁️' },
    { name: 'Microservices', icon: '🏗️' },
    { name: 'AI & ML', icon: '🤖' },
    { name: 'DevOps', icon: '🔧' },
    { name: 'Open Source', icon: '🌟' },
    { name: 'Mobile Development', icon: '📱' },
    { name: 'Blockchain', icon: '🔗' },
    { name: 'Cybersecurity', icon: '🔒' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Hi there! I&apos;m a passionate full-stack developer with a love for creating digital solutions that make a real difference. 
                My journey in technology began during my Computer Science studies, where I discovered the incredible power of code to transform ideas into reality.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                What started as curiosity about how websites work evolved into a deep passion for building scalable, user-centric applications. 
                I&apos;ve had the privilege of working on diverse projects - from healthcare platforms that improve patient care to e-commerce solutions that drive business growth.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, as an Associate Software Developer at DevEntia Tech, I&apos;m focused on microservices architecture and cloud solutions, 
                constantly pushing the boundaries of what&apos;s possible with modern web technologies. I believe in writing code that not only works but tells a story of thoughtful engineering.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${achievement.color} border border-gray-200 hover:shadow-lg transition-all duration-300`}
                >
                  <div className={`w-12 h-12 ${achievement.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'journey':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Timeline</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From academic excellence to professional growth, here&apos;s how my journey in technology has evolved.
              </p>
            </div>
            
            <div className="relative">
              {timeline.map((item, timelineIndex) => (
                <div key={timelineIndex} className="flex items-start space-x-4 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white text-xl font-bold z-10`}>
                      <span>{item.icon}</span>
                    </div>
                    {timelineIndex !== timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0 pb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-indigo-600 font-medium mb-2">{item.company}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'values':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide my work and define my approach to software development.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${value.color} border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'interests':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Interests</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Technologies and domains that excite me and areas where I&apos;m continuously expanding my expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {interests.map((interest) => (
                <div
                  key={interest.name}
                  className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <p className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {interest.name}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Always Learning</h4>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Technology never stops evolving, and neither do I. I&apos;m constantly exploring new frameworks, 
                  methodologies, and best practices to stay at the forefront of software development.
                </p>
                <div className="flex justify-center space-x-4">
                  <span className="px-4 py-2 bg-white/70 text-gray-700 rounded-full text-sm font-medium">
                    🎯 Currently Learning: Next.js 14
                  </span>
                  <span className="px-4 py-2 bg-white/70 text-gray-700 rounded-full text-sm font-medium">
                    🔥 Exploring: Kubernetes
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the person behind the code - my story, journey, and what drives my passion for technology
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-white rounded-2xl border border-gray-200 shadow-sm max-w-2xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 md:p-12">
            {renderTabContent()}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let&apos;s Create Something Amazing Together</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate with fellow developers and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;