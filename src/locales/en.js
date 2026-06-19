export default {
  nav: {
    home: "Home",
    projects: "Projects",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    menu: "Menu",
  },

  home: {
    eyebrow: "Frontend Developer",
    greeting: "Hi, I'm",
    name: "Dostonbek",
    description:
      "Crafting seamless digital experiences with modern web technologies. Clean code. Thoughtful design. Real results.",
    viewProjects: "View My Projects",
    contactMe: "Contact Me",
    downloadCV: "Download CV",
    currentlyWorking: "Currently working with",
    featuredLabel: "Featured work",
    featuredHeading: "Latest case study",
    viewAllProjects: "View all projects",
  },

  about: {
    eyebrow: "About Me",
    name: "Dostonbek",
    basedIn: "Based in",
    basedInValue: "Fergana, Uzbekistan",
    focus: "Focus",
    focusValue: "React & Tailwind CSS",
    status: "Status",
    statusValue: "Open to opportunities",
    getInTouch: "Get in touch",
    bioLabel: "Bio",
    bioText:
      "I'm a frontend developer passionate about building clean, fast, and accessible web experiences. I focus on writing maintainable code and thoughtful UI design. Currently open to new opportunities.",
    techStackLabel: "Tech Stack",
    frontend: "Frontend",
    tools: "Tools",
    learningLabel: "Currently Learning",
    learningTypeScriptNote:
      "Adding type safety to React components and shared utilities.",
    learningNextNote:
      "Learning server-side rendering, routing and data fetching patterns.",
    experienceLabel: "Experience",
    experienceRole: "Frontend Developer",
    experienceCompany: "Zamon agency",
    experienceDate: "2024 — Present",
    experienceDesc: "Building responsive web applications for clients.",
    educationLabel: "Education",
    educationDegree: "Digital information processing specialist",
    educationSchool: "Fergana Lola Murotova college",
    educationDate: "2025 — 2026",
  },

  projects: {
    eyebrow: "Portfolio",
    heading: "Selected Projects",
    description:
      "A handful of real, shipped work — each one built end to end, from layout to deployment. More case studies are in progress and will land here as they go live.",
  },

  projectCard: {
    visitProject: "Visit project",
  },

  projectData: {
    edumanage: {
      subtitle: "Education management system",
      pitch:
        "A management dashboard that helps educational institutions track attendance, grades and student records in one place — instead of scattered spreadsheets.",
      achievement:
        "Built the full client-facing dashboard end to end: data tables, auth flow and a responsive layout that holds up on any screen.",
    },
    healthyFood: {
      subtitle: "Recipe discovery experience",
      pitch:
        "A fast, responsive site that helps people find whole-food recipes without wading through ads and life stories.",
      achievement:
        "Took the project from Figma layout to a deployed, fully responsive product in under two weeks.",
    },
    Cefrmock: {
      subtitle: "English proficiency mock test platform",
      pitch:
        "A platform that helps learners prepare for CEFR-level English exams with realistic practice tests, instant scoring and progress tracking — all in one place.",
      achievement:
        "Integrated Firebase for real-time data storage, user authentication and progress tracking, delivering a fully functional exam simulator.",
    },
  },

  blog: {
    eyebrow: "Blog",
    heading: "Thoughts, lessons and useful notes",
    description:
      "Here I share useful notes from my frontend, design and growth journey. The blog works as a living content hub inside the portfolio.",
    topics: "Topics",
    recentPosts: "Recent posts",
    recentPostsDesc:
      "Short notes on frontend practice, design decisions and lessons learned from real projects.",
    readArticle: "Read article",
  },

  blogPosts: {
    reactStart: {
      title: "Starting a React project the right way",
      description:
        "A short guide on organizing component structure, folders and reusable UI elements correctly from the start.",
      tag: "Frontend",
      readTime: "4 min read",
      hero:
        "A well-started project causes a lot less confusion later on. In React, starting in an organized way matters for speed, clarity and how easily it scales.",
      sectionStart: {
        heading: "Where to start",
        p1:
          "The first mistake when starting a React project is dumping everything into one place. Even a small project grows over time, so it's worth getting the folder structure right from day one.",
        p2:
          "Keeping pages, components, shared UI elements and data separate makes everything much easier to work with later — especially noticeable in portfolios, dashboards or client projects.",
      },
      sectionFolders: {
        heading: "Which folders are worth separating",
        p1:
          "Keeping route pages in `pages`, reusable pieces in `components`, and static data in `data` keeps the project a lot cleaner.",
        p2:
          "If a section is used in more than one place, it's better to turn it into a reusable component rather than copy-pasting it across pages.",
      },
      sectionResult: {
        heading: "The result",
        p1:
          "Starting in an organized way saves time, makes bugs easier to find, and speeds up adding new features.",
        p2:
          "Good structure is invisible to the user, but it shows clearly in a developer's quality and speed of work.",
      },
    },
    responsiveDesign: {
      title: "A practical approach to responsive design",
      description:
        "The core techniques that make a page work equally well on mobile, tablet and desktop screens.",
      tag: "UI/UX",
      readTime: "5 min read",
      hero:
        "Responsive design isn't just shrinking elements down. What matters is how content reads and behaves at every screen size.",
      sectionMobile: {
        heading: "Thinking mobile-first",
        p1:
          "A mobile-first approach keeps a page simple and focused. Unnecessary blocks, oversized text or complex grids show up first on the mobile version.",
        p2:
          "If the mobile interface is clean, expanding it to desktop becomes a lot easier.",
      },
      sectionSpacing: {
        heading: "Spacing and hierarchy",
        p1:
          "In responsive design, font size, gaps and padding need to adapt across breakpoints — width alone isn't enough.",
        p2:
          "The hierarchy between heading, text and action buttons needs to be clear so a user instantly understands what matters most.",
      },
      sectionOutcome: {
        heading: "The practical outcome",
        p1:
          "A solid responsive approach lowers bounce rate and makes the site feel natural to use.",
        p2:
          "Alongside design quality, it also reflects your frontend craftsmanship.",
      },
    },
    whyPortfolio: {
      title: "Why you need a portfolio site",
      description:
        "How a portfolio helps you build a personal brand, earn client trust and present yourself clearly to employers.",
      tag: "Career",
      readTime: "4 min read",
      hero:
        "A portfolio site isn't just a list of finished work. It's a space that shows your style, your approach and your professional level.",
      sectionImpression: {
        heading: "First impressions",
        p1:
          "In many cases, a recruiter or client forms their first impression of you through your portfolio — not GitHub or Telegram.",
        p2:
          "That's why the site needs to be organized, fast and clear. It also reflects the standard you hold yourself to.",
      },
      sectionShowcase: {
        heading: "Letting your work speak",
        p1:
          "A CV summarizes a lot in a few lines; a portfolio shows it through real examples. Pairing a project preview with the technologies used and the outcome makes a far stronger impression.",
        p2:
          "Adding a blog shows not just finished work, but your thinking process too.",
      },
      sectionLongTerm: {
        heading: "The long-term payoff",
        p1:
          "A portfolio site gradually strengthens your personal brand. Every new project or article makes it more valuable.",
        p2:
          "This is especially useful when looking for freelance or remote work.",
      },
    },
  },

  blogDetail: {
    notFoundTag: "Blog",
    notFoundTitle: "Post not found",
    notFoundDesc: "This article doesn't exist, or the link has changed.",
    backToBlog: "Back to blog",
    keyTakeaway: "Key takeaway",
    otherPosts: "Other posts",
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in Touch",
    description: "Have a project in mind? Feel free to reach out.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    send: "Send Message",
    sending: "Sending...",
    sent: "Message sent!",
    sentDesc: "I'll get back to you as soon as possible.",
    error: "Something went wrong. Please try again.",
    elsewhere: "Elsewhere",
  },

  footer: {
    rights: "© 2026 Dostonbek. All rights reserved.",
  },
};
