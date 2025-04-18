# Tech Stack Framework for Placement Preparation

An interactive visualization tool that helps students and job seekers understand the essential tech stacks and skills required for various IT roles. The application provides a structured framework for learning paths, specialization tracks, and recommended resources.


## Features

- **Interactive Learning Path Visualization**: Clear progression from foundational skills to specializations
- **Expandable Skill Categories**: Click to expand/collapse detailed information about each tech stack
- **Multiple Specialization Tracks**: Full Stack Development, AI/ML, Generative AI, and Data Science
- **Complementary Skills Section**: DevOps and Cloud technologies that enhance any specialization
- **Curated Learning Resources**: Recommended YouTube channels and online resources for each track
- **Timeline Visualization**: Estimated learning periods for effective planning
- **Integrated Roadmap Links**: Direct links to detailed roadmaps for each specialization

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tech-stack-framework.git
   cd tech-stack-framework
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [https://primeshinde.netlify.app/](https://primeshinde.netlify.app/) to view the application in your browser.

## Usage

- **Exploring Foundations**: Click on "Level 1: Foundational Skills" to see core technologies every IT professional should know
- **Choosing Specializations**: Expand "Level 2: Specialization Tracks" to explore different career paths
- **Finding Resources**: Click on "Learning Resources" to find recommended learning materials
- **Understanding the Learning Path**: Follow the visual flow chart at the bottom to see the suggested learning progression

## Tech Stack

- React.js
- Tailwind CSS
- React Hooks (useState for state management)

## Project Structure

```
src/
├── TechStackFlowchart.js  # Main component with all the visualization logic
├── App.js                 # Root component that renders the flowchart
├── index.js               # Entry point
└── index.css              # Global styles including Tailwind directives
```

## Customization

### Adding New Skills

To add a new skill to an existing section, locate the appropriate section in `TechStackFlowchart.js` and add a new entry to the relevant list:

```jsx
<div className="bg-white p-3 rounded shadow-md">
  <h3 className="font-bold text-blue-700">New Skill Name</h3>
  <ul className="list-disc pl-5 text-sm">
    <li>Sub-skill 1</li>
    <li>Sub-skill 2</li>
  </ul>
</div>
```

### Adding New Specialization Tracks

To add a new specialization track, find the specialization section and add a new track following the existing pattern:

```jsx
<div className="mb-4">
  <div 
    className="bg-pink-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-pink-600 transition-colors flex justify-between items-center"
    onClick={() => handleTrackClick('newtrack')}
  >
    <h3 className="font-bold">2.5 Your New Track</h3>
    <span>{expandedTrack === 'newtrack' ? '−' : '+'}</span>
  </div>
  
  {expandedTrack === 'newtrack' && (
    <div className="bg-white p-3 mt-2 rounded shadow-md">
      {/* Track content */}
    </div>
  )}
</div>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Roadmap.sh for detailed technology roadmaps
- Various YouTube educators who provide free content for learners
- The tech community for continuously sharing knowledge and resources

---

Made with ❤️ for aspiring tech professionals
