export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizData {
  [key: string]: {
    title: string;
    questions: Question[];
  };
}

export const quizData: QuizData = {
  agenticAI: {
    title: "Agentic AI",
    questions: [
      {
        id: 1,
        question: "What is an AI agent?",
        options: ["A software program that acts autonomously", "A human operator", "A database system", "A web browser"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which of the following is a key characteristic of agentic AI?",
        options: ["Passive response", "Autonomous decision-making", "Manual control", "Static behavior"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What does LLM stand for?",
        options: ["Large Language Model", "Limited Learning Machine", "Linear Logic Module", "Logical Language Mapping"],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "Which framework is commonly used for building AI agents?",
        options: ["LangChain", "Bootstrap", "jQuery", "Angular"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "What is the purpose of a reward function in reinforcement learning?",
        options: ["To punish the agent", "To guide the agent towards desired behavior", "To stop the agent", "To delete the model"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "Which company developed GPT models?",
        options: ["Google", "OpenAI", "Meta", "Amazon"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "What is prompt engineering?",
        options: ["Building hardware", "Crafting effective inputs for AI models", "Network engineering", "Database design"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "What is RAG in AI context?",
        options: ["Retrieval Augmented Generation", "Random Agent Generator", "Rapid Action Gateway", "Resource Allocation Graph"],
        correctAnswer: 0
      },
      {
        id: 9,
        question: "Which is NOT a component of an AI agent?",
        options: ["Perception", "Action", "Static HTML page", "Decision-making"],
        correctAnswer: 2
      },
      {
        id: 10,
        question: "What is the role of embeddings in AI?",
        options: ["To slow down processing", "To represent data in vector space", "To delete information", "To compile code"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "Which of these is a vector database?",
        options: ["MySQL", "Pinecone", "Excel", "Notepad"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "What is fine-tuning in AI?",
        options: ["Adjusting screen brightness", "Training a pre-trained model on specific data", "Deleting data", "Installing software"],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "What does 'temperature' control in LLM outputs?",
        options: ["CPU heat", "Randomness/creativity", "Speed", "Memory usage"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "Which is an example of multi-agent system?",
        options: ["Single chatbot", "Collaborative AI agents working together", "Static website", "PDF reader"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "What is token in LLM context?",
        options: ["Security key", "Unit of text processing", "Database entry", "CSS class"],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "What is chain-of-thought prompting?",
        options: ["Random questioning", "Step-by-step reasoning in prompts", "Quick responses", "Image generation"],
        correctAnswer: 1
      },
      {
        id: 17,
        question: "Which technique helps reduce AI hallucinations?",
        options: ["Increasing temperature", "Grounding with factual data", "Random outputs", "Ignoring context"],
        correctAnswer: 1
      },
      {
        id: 18,
        question: "What is the Turing Test?",
        options: ["Speed test", "Test of machine intelligence", "Memory test", "Graphics test"],
        correctAnswer: 1
      },
      {
        id: 19,
        question: "What is few-shot learning?",
        options: ["No training", "Learning from few examples", "Long training", "Video editing"],
        correctAnswer: 1
      },
      {
        id: 20,
        question: "Which is a key challenge in agentic AI?",
        options: ["Too much memory", "Alignment with human values", "Too fast processing", "Perfect accuracy"],
        correctAnswer: 1
      }
    ]
  },
  vibecoding: {
    title: "Vibe Coding",
    questions: [
      {
        id: 1,
        question: "What is vibe coding primarily about?",
        options: ["Strict rules", "Creative and intuitive programming", "Only using AI", "Copying code"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which tool is popular for AI-assisted coding?",
        options: ["Notepad", "GitHub Copilot", "Paint", "Calculator"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What does IDE stand for?",
        options: ["Internet Data Explorer", "Integrated Development Environment", "Internal Design Engine", "Interactive Display Element"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Which is a benefit of vibe coding?",
        options: ["Slower development", "Faster prototyping", "More bugs", "Less creativity"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "What is pair programming?",
        options: ["Two people coding together", "Solo coding", "No coding", "Only AI coding"],
        correctAnswer: 0
      },
      {
        id: 6,
        question: "Which language is known for 'developer happiness'?",
        options: ["Assembly", "Ruby", "Machine code", "Binary"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "What is live reloading?",
        options: ["Restarting computer", "Automatic update of running application", "Deleting files", "Saving manually"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "Which is NOT a code editor?",
        options: ["VS Code", "Sublime Text", "Photoshop", "Vim"],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "What is refactoring?",
        options: ["Breaking code", "Improving code structure without changing behavior", "Deleting code", "Adding bugs"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "What does DRY principle mean?",
        options: ["Do Repeat Yourself", "Don't Repeat Yourself", "Delete Random Years", "Debug Ruby Yearly"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "What is a code snippet?",
        options: ["Full application", "Reusable piece of code", "Bug", "Comment"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "Which is a version control system?",
        options: ["Git", "HTML", "CSS", "JSON"],
        correctAnswer: 0
      },
      {
        id: 13,
        question: "What is hot reloading?",
        options: ["Heating up computer", "Updating code without losing state", "Burning CD", "Overheating"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "What is rubber duck debugging?",
        options: ["Using a real duck", "Explaining code to inanimate object to find bugs", "Playing games", "Swimming"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "What is clean code?",
        options: ["Virus-free code", "Readable and maintainable code", "Minified code", "Obfuscated code"],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "What is a boilerplate?",
        options: ["Kitchen item", "Template code to start projects", "Error message", "Database"],
        correctAnswer: 1
      },
      {
        id: 17,
        question: "What is TDD?",
        options: ["Test Driven Development", "Total Data Deletion", "Typed Document Design", "Time Delay Debug"],
        correctAnswer: 0
      },
      {
        id: 18,
        question: "What is a linter?",
        options: ["Cleaning tool", "Code quality and style checker", "Browser", "Database"],
        correctAnswer: 1
      },
      {
        id: 19,
        question: "What is IntelliSense?",
        options: ["AI model", "Code completion feature", "Game", "Social media"],
        correctAnswer: 1
      },
      {
        id: 20,
        question: "What is the flow state in coding?",
        options: ["Water coding", "Deep focus and productivity", "Sleeping", "Procrastinating"],
        correctAnswer: 1
      }
    ]
  },
  webdev: {
    title: "Web Development",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which CSS property changes text color?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the correct HTML tag for the largest heading?",
        options: ["<heading>", "<h6>", "<h1>", "<head>"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "Which JavaScript method is used to write into HTML?",
        options: ["document.write()", "console.log()", "window.alert()", "innerHTML()"],
        correctAnswer: 0
      },
      {
        id: 5,
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        correctAnswer: 0
      },
      {
        id: 6,
        question: "Which HTTP method is used to submit form data?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "What is React?",
        options: ["Database", "JavaScript library for UI", "CSS framework", "Backend framework"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Management", "Digital Orientation Method", "Document Orientation Model"],
        correctAnswer: 0
      },
      {
        id: 9,
        question: "Which is NOT a JavaScript framework?",
        options: ["Angular", "Vue", "Django", "Svelte"],
        correctAnswer: 2
      },
      {
        id: 10,
        question: "What is Bootstrap?",
        options: ["JavaScript library", "CSS framework", "Database", "Server"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Programming Integration", "Automated Program Interaction", "Application Process Integration"],
        correctAnswer: 0
      },
      {
        id: 12,
        question: "Which tag is used for creating a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "What is the purpose of media queries in CSS?",
        options: ["Play music", "Responsive design", "Database queries", "API calls"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "What is localhost?",
        options: ["Remote server", "Your own computer", "Cloud server", "Database"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "Which is a CSS preprocessor?",
        options: ["HTML", "SASS", "JavaScript", "PHP"],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "What is npm?",
        options: ["Node Package Manager", "New Programming Method", "Network Protocol Manager", "Node Process Module"],
        correctAnswer: 0
      },
      {
        id: 17,
        question: "What does AJAX stand for?",
        options: ["Asynchronous JavaScript and XML", "Advanced Java and XML", "Automated JavaScript and XHTML", "Asynchronous Java and XHTML"],
        correctAnswer: 0
      },
      {
        id: 18,
        question: "Which is a backend framework?",
        options: ["React", "Express.js", "Tailwind CSS", "Bootstrap"],
        correctAnswer: 1
      },
      {
        id: 19,
        question: "What is Webpack?",
        options: ["CSS framework", "Module bundler", "Database", "Testing tool"],
        correctAnswer: 1
      },
      {
        id: 20,
        question: "What is the box model in CSS?",
        options: ["3D graphics", "Content, padding, border, margin", "Animation model", "Grid system"],
        correctAnswer: 1
      }
    ]
  },
  uiux: {
    title: "UI/UX Design",
    questions: [
      {
        id: 1,
        question: "What does UI stand for?",
        options: ["User Interface", "Universal Integration", "Uniform Interaction", "User Integration"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What does UX stand for?",
        options: ["User Exchange", "User Experience", "Universal Experience", "Unified Exchange"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is a wireframe?",
        options: ["Final design", "Low-fidelity sketch of design", "Code structure", "Database schema"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Which tool is commonly used for UI design?",
        options: ["Excel", "Figma", "Word", "PowerPoint"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "What is a prototype?",
        options: ["Final product", "Interactive model of design", "Bug report", "Documentation"],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "What is the F-pattern in web design?",
        options: ["Font style", "Eye-tracking reading pattern", "Footer design", "Form layout"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "What is white space in design?",
        options: ["Blank paper", "Empty space around elements", "Color white", "Errors"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "What is a persona in UX?",
        options: ["Designer's name", "Fictional user representation", "Color scheme", "Font type"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "What is A/B testing?",
        options: ["Alphabet testing", "Comparing two versions", "Bug testing", "Grading system"],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "What is the golden ratio in design?",
        options: ["Color code", "Mathematical proportion (1:1.618)", "Font size", "Screen size"],
        correctAnswer: 1
      },
      {
        id: 11,
        question: "What is information architecture?",
        options: ["Building design", "Organizing and structuring content", "Server setup", "Coding structure"],
        correctAnswer: 1
      },
      {
        id: 12,
        question: "What is a call-to-action (CTA)?",
        options: ["Phone call", "Button/element prompting user action", "Error message", "Loading screen"],
        correctAnswer: 1
      },
      {
        id: 13,
        question: "What is responsive design?",
        options: ["Fast loading", "Design adapting to screen sizes", "Interactive elements", "Color changes"],
        correctAnswer: 1
      },
      {
        id: 14,
        question: "What is the 60-30-10 rule in design?",
        options: ["Time management", "Color proportion rule", "Font sizes", "Page layout"],
        correctAnswer: 1
      },
      {
        id: 15,
        question: "What is a mood board?",
        options: ["Emotional chart", "Visual collection of design inspiration", "User feedback", "Bug tracker"],
        correctAnswer: 1
      },
      {
        id: 16,
        question: "What is accessibility in design?",
        options: ["Easy to find", "Design usable by people with disabilities", "Fast loading", "Mobile-first"],
        correctAnswer: 1
      },
      {
        id: 17,
        question: "What is a heatmap in UX?",
        options: ["Temperature chart", "Visual showing user interaction areas", "Color palette", "Error log"],
        correctAnswer: 1
      },
      {
        id: 18,
        question: "What is the principle of proximity?",
        options: ["Far away items", "Related items should be grouped", "Color matching", "Font pairing"],
        correctAnswer: 1
      },
      {
        id: 19,
        question: "What is user flow?",
        options: ["Water design", "Path users take through app", "Animation", "Loading sequence"],
        correctAnswer: 1
      },
      {
        id: 20,
        question: "What is contrast in design?",
        options: ["Similarity", "Difference between elements", "Alignment", "Repetition"],
        correctAnswer: 1
      }
    ]
  }
};
