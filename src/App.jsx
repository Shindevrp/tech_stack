import React, { useState } from 'react';

const TechStackFlowchart = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedTrack, setExpandedTrack] = useState(null);

  const handleSectionClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleTrackClick = (track) => {
    setExpandedTrack(expandedTrack === track ? null : track);
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-8 text-indigo-700">Tech Stack Framework for Placement Preparation</h1>
        
        {/* Level 1: Foundational Skills */}
        <div className="mb-10">
          <div 
            className="bg-blue-600 text-white text-center py-3 px-4 rounded-t-lg cursor-pointer hover:bg-blue-700 transition-colors"
            onClick={() => handleSectionClick('foundation')}
          >
            <h2 className="text-xl font-bold">Level 1: Foundational Skills (Required for All Roles)</h2>
          </div>
          
          {expandedSection === 'foundation' && (
            <div className="bg-blue-50 p-4 rounded-b-lg border-2 border-blue-200 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded shadow-md">
                <h3 className="font-bold text-blue-700">Computer Organization & Architecture (COA)</h3>
              </div>
              <div className="bg-white p-3 rounded shadow-md">
                <h3 className="font-bold text-blue-700">Database Management Systems (DBMS)</h3>
              </div>
              <div className="bg-white p-3 rounded shadow-md">
                <h3 className="font-bold text-blue-700">Object-Oriented Programming (OOPs)</h3>
              </div>
              <div className="bg-white p-3 rounded shadow-md">
                <h3 className="font-bold text-blue-700">Computer Networks (CN)</h3>
              </div>
              <div className="bg-white p-3 rounded shadow-md">
                <h3 className="font-bold text-blue-700">Operating Systems (OS)</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Linux</li>
                  <li>Windows</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-md">
                <h3 className="font-bold text-blue-700">Data Structures & Algorithms (DSA)</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Java Implementation</li>
                  <li>Python Implementation</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        {/* Level 2: Specialization Tracks */}
        <div className="mb-6">
          <div 
            className="bg-purple-600 text-white text-center py-3 px-4 rounded-t-lg cursor-pointer hover:bg-purple-700 transition-colors"
            onClick={() => handleSectionClick('specialization')}
          >
            <h2 className="text-xl font-bold">Level 2: Specialization Tracks</h2>
          </div>
          
          {expandedSection === 'specialization' && (
            <div className="bg-purple-50 p-4 rounded-b-lg border-2 border-purple-200">
              {/* Track 2.1: Full Stack Development */}
              <div className="mb-4">
                <div 
                  className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-600 transition-colors flex justify-between items-center"
                  onClick={() => handleTrackClick('fullstack')}
                >
                  <h3 className="font-bold">2.1 Full Stack Development</h3>
                  <span>{expandedTrack === 'fullstack' ? '−' : '+'}</span>
                </div>
                
                {expandedTrack === 'fullstack' && (
                  <div className="bg-white p-3 mt-2 rounded shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-2 border border-green-200 rounded">
                      <h4 className="font-bold text-green-700 mb-1">Frontend Technologies</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>HTML, CSS, JavaScript</li>
                        <li>Frontend Frameworks:
                          <ul className="list-disc pl-5">
                            <li>React.js</li>
                            <li>Angular</li>
                            <li>Vue.js</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-2 border border-green-200 rounded">
                      <h4 className="font-bold text-green-700 mb-1">Backend Technologies</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Django/Flask (Python)</li>
                        <li>Spring Boot (Java)</li>
                      </ul>
                    </div>
                    
                    <div className="p-2 border border-green-200 rounded">
                      <h4 className="font-bold text-green-700 mb-1">Database Technologies</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>SQL: MySQL, PostgreSQL</li>
                        <li>NoSQL: MongoDB</li>
                      </ul>
                    </div>
                    
                    <div className="p-2 border border-green-200 rounded">
                      <h4 className="font-bold text-green-700 mb-1">Popular Stacks</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                        <li>MEAN Stack (MongoDB, Express.js, Angular, Node.js)</li>
                        <li>Java Full Stack (Spring Boot, Angular/React/Vue)</li>
                        <li>Python Full Stack (Django/Flask, React/Angular/Vue)</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Track 2.2: AI/ML Track */}
              <div className="mb-4">
                <div 
                  className="bg-red-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-600 transition-colors flex justify-between items-center"
                  onClick={() => handleTrackClick('aiml')}
                >
                  <h3 className="font-bold">2.2 AI/ML Track</h3>
                  <span>{expandedTrack === 'aiml' ? '−' : '+'}</span>
                </div>
                
                {expandedTrack === 'aiml' && (
                  <div className="bg-white p-3 mt-2 rounded shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-2 border border-red-200 rounded">
                      <h4 className="font-bold text-red-700 mb-1">Machine Learning Fundamentals</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Supervised Learning</li>
                        <li>Unsupervised Learning</li>
                        <li>Reinforcement Learning</li>
                      </ul>
                    </div>
                    
                    <div className="p-2 border border-red-200 rounded">
                      <h4 className="font-bold text-red-700 mb-1">Essential Libraries</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>NumPy</li>
                        <li>Pandas</li>
                        <li>Scikit-learn</li>
                        <li>Matplotlib/Seaborn</li>
                      </ul>
                    </div>
                    
                    <div className="p-2 border border-red-200 rounded">
                      <h4 className="font-bold text-red-700 mb-1">Deep Learning</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>TensorFlow</li>
                        <li>PyTorch</li>
                        <li>Keras</li>
                      </ul>
                    </div>
                    
                    <div className="p-2 border border-red-200 rounded">
                      <h4 className="font-bold text-red-700 mb-1">Specialized Areas</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Computer Vision (OpenCV)</li>
                        <li>Natural Language Processing (NLTK, spaCy, Transformers)</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Track 2.3: Generative AI */}
              <div className="mb-4">
                <div 
                  className="bg-yellow-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-yellow-600 transition-colors flex justify-between items-center"
                  onClick={() => handleTrackClick('genai')}
                >
                  <h3 className="font-bold">2.3 Generative AI</h3>
                  <span>{expandedTrack === 'genai' ? '−' : '+'}</span>
                </div>
                
                {expandedTrack === 'genai' && (
                  <div className="bg-white p-3 mt-2 rounded shadow-md">
                    <div className="p-2 border border-yellow-200 rounded">
                      <h4 className="font-bold text-yellow-700 mb-1">Large Language Models (LLM)</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Transformer Architecture</li>
                        <li>Fine-tuning Techniques</li>
                        <li>Prompt Engineering</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Track 2.4: Data Science & Analytics */}
              <div className="mb-4">
                <div 
                  className="bg-indigo-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-indigo-600 transition-colors flex justify-between items-center"
                  onClick={() => handleTrackClick('datascience')}
                >
                  <h3 className="font-bold">2.4 Data Science & Analytics</h3>
                  <span>{expandedTrack === 'datascience' ? '−' : '+'}</span>
                </div>
                
                {expandedTrack === 'datascience' && (
                  <div className="bg-white p-3 mt-2 rounded shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-2 border border-indigo-200 rounded">
                      <h4 className="font-bold text-indigo-700 mb-1">Data Processing Frameworks</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Apache Hadoop</li>
                        <li>Apache Spark</li>
                        <li>Apache Kafka</li>
                      </ul>
                    </div>
                    
                    <div className="p-2 border border-indigo-200 rounded">
                      <h4 className="font-bold text-indigo-700 mb-1">Programming for Data Science</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Python</li>
                        <li>R Programming</li>
                      </ul>
                    </div>
                    
                    <div className="p-2 border border-indigo-200 rounded">
                      <h4 className="font-bold text-indigo-700 mb-1">Types of Analytics</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Descriptive Analytics</li>
                        <li>Predictive Analytics</li>
                        <li>Prescriptive Analytics</li>
                      </ul>
                    </div>
                    
                    <div className="p-2 border border-indigo-200 rounded">
                      <h4 className="font-bold text-indigo-700 mb-1">Visualization Tools</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Tableau</li>
                        <li>Power BI</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* DevOps & Cloud Skills */}
        <div>
          <div 
            className="bg-teal-600 text-white text-center py-3 px-4 rounded-t-lg cursor-pointer hover:bg-teal-700 transition-colors"
            onClick={() => handleSectionClick('devops')}
          >
            <h2 className="text-xl font-bold">DevOps & Cloud Skills</h2>
          </div>
          
          {expandedSection === 'devops' && (
            <div className="bg-teal-50 p-4 rounded-b-lg border-2 border-teal-200 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded shadow-md">
                <h3 className="font-bold text-teal-700">Version Control</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Git & GitHub/GitLab</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-md">
                <h3 className="font-bold text-teal-700">Containerization & Orchestration</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Docker</li>
                  <li>Kubernetes</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow-md">
                <h3 className="font-bold text-teal-700">Cloud Services</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>AWS (Amazon Web Services)</li>
                  <li>GCP (Google Cloud Platform)</li>
                  <li>Azure</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        {/* Path Flow Visualization */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-800">Suggested Learning Path Flow</h3>
          
          <div className="flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100 p-6 rounded-xl shadow-inner">
            {/* Level 1 */}
            <div className="w-80 bg-blue-100 text-center p-4 border-2 border-blue-400 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="font-bold text-lg text-blue-800">Level 1: Foundational Skills</div>
              <div className="text-sm mt-1 text-blue-600">Start Here (3-6 months)</div>
              <div className="mt-2 text-xs bg-blue-200 rounded-full py-1 px-3 inline-block">
                <a href="https://roadmap.sh/computer-science" className="text-blue-700 hover:underline" target="_blank" rel="noopener">View CS Roadmap</a>
              </div>
            </div>
            
            {/* Arrow with label */}
            <div className="flex flex-col items-center my-2 py-2">
              <div className="h-10 w-0.5 bg-gray-400"></div>
              <div className="w-3 h-3 border-t-2 border-r-2 border-gray-400 transform rotate-135 -mt-1 mb-1"></div>
              <div className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 mt-1">master the basics first</div>
            </div>
            
            {/* Level 2 with branches */}
            <div className="relative w-full max-w-4xl">
              <div className="w-80 mx-auto bg-purple-100 text-center p-4 border-2 border-purple-400 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="font-bold text-lg text-purple-800">Level 2: Choose Specialization</div>
                <div className="text-sm mt-1 text-purple-600">Select at least one track (6-12 months)</div>
              </div>
              
              {/* Main vertical line */}
              <div className="absolute h-20 w-0.5 bg-gray-400 left-1/2 top-16 transform -translate-x-1/2"></div>
              
              {/* Horizontal connecting line */}
              <div className="absolute w-11/12 h-0.5 bg-gray-400 left-1/2 top-36 transform -translate-x-1/2"></div>
              
              {/* Branches */}
              <div className="flex justify-between mt-36 px-2">
                <div className="flex flex-col items-center group">
                  <div className="h-16 w-0.5 bg-gray-400 group-hover:bg-green-400 transition-colors duration-300"></div>
                  <div className="w-36 bg-green-100 text-center p-3 border-2 border-green-400 rounded-lg shadow-md transform hover:scale-110 transition-all duration-300 hover:bg-green-200">
                    <div className="font-semibold text-green-800">Full Stack</div>
                    <div className="mt-2 text-xs bg-green-200 rounded-full py-1 px-2 inline-block">
                      <a href="https://roadmap.sh/frontend" className="text-green-700 hover:underline" target="_blank" rel="noopener">Frontend Roadmap</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center group">
                  <div className="h-16 w-0.5 bg-gray-400 group-hover:bg-red-400 transition-colors duration-300"></div>
                  <div className="w-36 bg-red-100 text-center p-3 border-2 border-red-400 rounded-lg shadow-md transform hover:scale-110 transition-all duration-300 hover:bg-red-200">
                    <div className="font-semibold text-red-800">AI/ML</div>
                    <div className="mt-2 text-xs bg-red-200 rounded-full py-1 px-2 inline-block">
                      <a href="https://roadmap.sh/ai-data-scientist" className="text-red-700 hover:underline" target="_blank" rel="noopener">ML Roadmap</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center group">
                  <div className="h-16 w-0.5 bg-gray-400 group-hover:bg-yellow-400 transition-colors duration-300"></div>
                  <div className="w-36 bg-yellow-100 text-center p-3 border-2 border-yellow-400 rounded-lg shadow-md transform hover:scale-110 transition-all duration-300 hover:bg-yellow-200">
                    <div className="font-semibold text-yellow-800">Generative AI</div>
                    <div className="mt-2 text-xs bg-yellow-200 rounded-full py-1 px-2 inline-block">
                      <a href="https://roadmap.sh/prompt-engineering" className="text-yellow-700 hover:underline" target="_blank" rel="noopener">GenAI Roadmap</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center group">
                  <div className="h-16 w-0.5 bg-gray-400 group-hover:bg-indigo-400 transition-colors duration-300"></div>
                  <div className="w-36 bg-indigo-100 text-center p-3 border-2 border-indigo-400 rounded-lg shadow-md transform hover:scale-110 transition-all duration-300 hover:bg-indigo-200">
                    <div className="font-semibold text-indigo-800">Data Science</div>
                    <div className="mt-2 text-xs bg-indigo-200 rounded-full py-1 px-2 inline-block">
                      <a href="https://roadmap.sh/data-science" className="text-indigo-700 hover:underline" target="_blank" rel="noopener">DS Roadmap</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* DevOps (Complementary) - with arrows pointing to all paths */}
            <div className="mt-24 relative w-full max-w-4xl">
              <div className="w-80 mx-auto bg-teal-100 text-center p-4 border-2 border-teal-400 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="font-bold text-lg text-teal-800">DevOps & Cloud Skills</div>
                <div className="text-sm mt-1 text-teal-600">Complementary to all paths (3-6 months)</div>
                <div className="mt-2 text-xs bg-teal-200 rounded-full py-1 px-3 inline-block">
                  <a href="https://roadmap.sh/devops" className="text-teal-700 hover:underline" target="_blank" rel="noopener">DevOps Roadmap</a>
                </div>
              </div>
              
              {/* Connecting arrows - decorative dashed lines indicating DevOps complements all paths */}
              <div className="absolute w-11/12 h-0.5 border-t-2 border-dashed border-teal-400 left-1/2 top-0 transform -translate-x-1/2 -translate-y-8"></div>
              <div className="absolute h-8 w-0.5 border-l-2 border-dashed border-teal-400 left-1/8 top-0 transform -translate-y-8"></div>
              <div className="absolute h-8 w-0.5 border-l-2 border-dashed border-teal-400 left-3/8 top-0 transform -translate-y-8"></div>
              <div className="absolute h-8 w-0.5 border-l-2 border-dashed border-teal-400 left-5/8 top-0 transform -translate-y-8"></div>
              <div className="absolute h-8 w-0.5 border-l-2 border-dashed border-teal-400 left-7/8 top-0 transform -translate-y-8"></div>
            </div>
            
            {/* Final Stage - Job Readiness */}
            <div className="mt-12 relative">
              <div className="h-12 w-0.5 bg-gray-400 mx-auto"></div>
              <div className="w-3 h-3 border-t-2 border-r-2 border-gray-400 transform rotate-135 mb-3 mx-auto"></div>
              <div className="w-80 bg-green-500 text-center p-4 border-2 border-green-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="font-bold text-lg text-white">Job Ready!</div>
                <div className="text-sm mt-1 text-green-100">Build projects & prepare for interviews</div>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="text-xs bg-green-400 rounded-full py-1 px-2 text-white">
                    Portfolio Projects
                  </div>
                  <div className="text-xs bg-green-400 rounded-full py-1 px-2 text-white">
                    Placement Prep
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline Indicator */}
            <div className="w-full max-w-3xl mt-12 pt-4 border-t border-gray-300">
              <div className="flex justify-between">
                <div className="text-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500 mx-auto"></div>
                  <div className="text-xs text-gray-600 mt-1">0 months</div>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 rounded-full bg-purple-500 mx-auto"></div>
                  <div className="text-xs text-gray-600 mt-1">6 months</div>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 rounded-full bg-teal-500 mx-auto"></div>
                  <div className="text-xs text-gray-600 mt-1">12 months</div>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 rounded-full bg-green-500 mx-auto"></div>
                  <div className="text-xs text-gray-600 mt-1">18 months</div>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
        
        {/* Resources Section */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <div 
            className="bg-orange-600 text-white text-center py-3 px-4 rounded-t-lg cursor-pointer hover:bg-orange-700 transition-colors"
            onClick={() => handleSectionClick('resources')}
          >
            <h2 className="text-xl font-bold">Learning Resources</h2>
          </div>
          
          {expandedSection === 'resources' && (
            <div className="bg-orange-50 p-4 rounded-b-lg border-2 border-orange-200">
              {/* Foundation Resources */}
              <div className="mb-4">
                <h3 className="font-bold text-orange-800 border-b border-orange-200 pb-1 mb-2">Foundational Skills Resources</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">DSA:</span> <a href="https://www.youtube.com/c/takeUforward" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Striver's DSA YouTube Channel</a>
                  </li>
                  <li>
                    <span className="font-semibold">Operating Systems:</span> <a href="https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Gate Smashers OS Playlist</a>
                  </li>
                  <li>
                    <span className="font-semibold">DBMS:</span> <a href="https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Gate Smashers DBMS Playlist</a>
                  </li>
                  <li>
                    <span className="font-semibold">Computer Networks:</span> <a href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Neso Academy CN Playlist</a>
                  </li>
                </ul>
              </div>
              
              {/* Full Stack Resources */}
              <div className="mb-4">
                <h3 className="font-bold text-green-700 border-b border-green-200 pb-1 mb-2">Full Stack Development Resources</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Web Development Roadmap:</span> <a href="https://www.youtube.com/c/TraversyMedia" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Traversy Media</a>
                  </li>
                  <li>
                    <span className="font-semibold">React.js:</span> <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Codevolution React Playlist</a>
                  </li>
                  <li>
                    <span className="font-semibold">Node.js:</span> <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Net Ninja Node.js Playlist</a>
                  </li>
                  <li>
                    <span className="font-semibold">MERN Stack:</span> <a href="https://www.youtube.com/c/DevEd" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Dev Ed Channel</a>
                  </li>
                </ul>
              </div>
              
              {/* AI/ML Resources */}
              <div className="mb-4">
                <h3 className="font-bold text-red-700 border-b border-red-200 pb-1 mb-2">AI/ML Resources</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Machine Learning:</span> <a href="https://www.youtube.com/c/AndrewNgAI" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Andrew Ng's YouTube Channel</a>
                  </li>
                  <li>
                    <span className="font-semibold">Deep Learning:</span> <a href="https://www.youtube.com/c/DeepLearningAI" className="text-blue-600 hover:underline" target="_blank" rel="noopener">DeepLearning.AI</a>
                  </li>
                  <li>
                    <span className="font-semibold">TensorFlow:</span> <a href="https://www.youtube.com/c/TensorFlow" className="text-blue-600 hover:underline" target="_blank" rel="noopener">TensorFlow YouTube Channel</a>
                  </li>
                  <li>
                    <span className="font-semibold">PyTorch:</span> <a href="https://www.youtube.com/playlist?list=PLqnslRFeH2UrcDBWF5mfPGpqQDSta6VK4" className="text-blue-600 hover:underline" target="_blank" rel="noopener">PyTorch Tutorials</a>
                  </li>
                </ul>
              </div>
              
              {/* GenAI Resources */}
              <div className="mb-4">
                <h3 className="font-bold text-yellow-700 border-b border-yellow-200 pb-1 mb-2">Generative AI Resources</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">LLM Fundamentals:</span> <a href="https://www.youtube.com/playlist?list=PL1T8fO7ArWlcf3Ty7q7xrA3S4hnFcw4OY" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Sentdex LLM Tutorials</a>
                  </li>
                  <li>
                    <span className="font-semibold">Prompt Engineering:</span> <a href="https://www.youtube.com/c/PromptEngineering" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Prompt Engineering Channel</a>
                  </li>
                  <li>
                    <span className="font-semibold">Transformer Architecture:</span> <a href="https://www.youtube.com/watch?v=TQQlZhbC5ps" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Andrej Karpathy's Transformer Explanation</a>
                  </li>
                </ul>
              </div>
              
              {/* Data Science Resources */}
              <div className="mb-4">
                <h3 className="font-bold text-indigo-700 border-b border-indigo-200 pb-1 mb-2">Data Science Resources</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Data Science Roadmap:</span> <a href="https://www.youtube.com/c/KrishNaik" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Krish Naik's Channel</a>
                  </li>
                  <li>
                    <span className="font-semibold">Data Analysis:</span> <a href="https://www.youtube.com/c/KeithGalli" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Keith Galli's Channel</a>
                  </li>
                  <li>
                    <span className="font-semibold">Tableau:</span> <a href="https://www.youtube.com/user/tableausoftware" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Tableau's Official Channel</a>
                  </li>
                </ul>
              </div>
              
              {/* DevOps Resources */}
              <div>
                <h3 className="font-bold text-teal-700 border-b border-teal-200 pb-1 mb-2">DevOps & Cloud Resources</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">DevOps Roadmap:</span> <a href="https://www.youtube.com/c/TechWorldwithNana" className="text-blue-600 hover:underline" target="_blank" rel="noopener">TechWorld with Nana</a>
                  </li>
                  <li>
                    <span className="font-semibold">Docker & Kubernetes:</span> <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Net Ninja Docker Playlist</a>
                  </li>
                  <li>
                    <span className="font-semibold">AWS:</span> <a href="https://www.youtube.com/c/AmazonWebServices" className="text-blue-600 hover:underline" target="_blank" rel="noopener">AWS Official Channel</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        {/* Instructions */}
        <div className="mt-8 bg-gray-100 p-3 rounded text-center text-sm text-gray-600">
          Click on each section to expand/collapse details
        </div>
      </div>
    </div>
  );
};

export default TechStackFlowchart;