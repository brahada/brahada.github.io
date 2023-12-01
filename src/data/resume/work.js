/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'JP Morgan',
    position: 'Senior Software Engineer',
    url: 'https://www.jpmorgan.com/global',
    startDate: '2023-05-01',
    summary: `PricingDirect (affiliated to JP Morgan) delivers independent, reliable valuations and analytics services across 40 fixed income and derivative asset classes worldwide. Thousands of firms benefit from the comprehensive, real-time, and transparent information we deliver.
    As Associate VP, I provide technical leadership on high-impact projects, influence and  I directly manage the tech ownership of 2 products and spend >60% of my time writing code. My day to day work includes designing and delivering the backend solutions.`,
    highlights: [
    'Engineered the backend for emerging market and convertible securities pricing. Currently spearheading the development of a Snowflake-based data warehousing solution to enable data delivery and commercialization with increasing the revenue by ~ 5%.',
    'Proactively reviewed and enhanced existing codebases during issue resolution, optimizing functionality and reducing technical debt.',
    'Led the project for Python 3 migration, and played a pivotal role in modernizing and optimizing our systems by initiating Test Driven Development, while also introducing parallel processing techniques that slashed processing time by an impressive 20%.',
    ],
  },
  {
    name: 'Goldman Sachs',
    position: 'Software Engineer 2',
    url: 'https://www.goldmansachs.com/',
    startDate: '2021-12-01',
    endDate: '2022-01-01',
    summary: `DLA is an accelerator project under Goldman Sachs which is a digital agent for syndicate loans. Currently, this industry is handled by man power and introducing tech and automating most of the things reduces any human error especially when its's to deal with millins and billions.`,
    highlights: [
      'Collaborated in transforming a monolithic project into a microservice architecture, resulting in improved scalability, reliability, and agility. Orchestrated the seamless implementation and optimization of payment flows (cancel and reopen) and report APIs, culminating in a 66% reduction in API response time, achieved through adept server-side enhancements and strategic caching tactics.',
      'Designed and implemented the backend APIs, database layer, and automatic documentation for the Digital Agent projects trading module. Implemented a flexible and configurable state machine workflow that allows the definition of current and expected next states, actions, triggered functions to enforce different trade workflows which reduced the error rate by 20%.',
      'Integrated with external microservices for trade onboarding and settlement and built a dispatcher in Flask for multiple tasks.',
      'Redesigned the message parser and processing mechanism for clearpar trade processing messages.',
      'Coordinated with a UX designer and conducted customer interviews to gather insights. Contributed to the development of some UI features and wrote end-to-end tests using Cypress and Jest.',
    ],
  },
  {
    name: "Bright Money",
    position: "Software Engineer 1",
    url: "https://www.brightmoney.co/",
    location: "Bengaluru, India",
    startDate: "2020-09-01",
    endDate: "2021-12-01",
    summary: "At Bright Money, I played a key role in developing and maintaining critical software solutions, leading to significant improvements in operational efficiency and customer satisfaction. My contributions spanned from front-end development using React to backend optimizations and team leadership.",
    highlights: [
      "Designed and developed a Unified Dashboard for Customer Success and Ops Teams using Django and AWS, reducing customer issue tickets by 80% and improving SLA.",
      "Implemented an employee onboarding feature and automated report generation, saving 4-5 hours daily for the Ops Teams.",
      "Managed and mentored a team of 4 interns and new graduates, leading the scrum process and task management. Reported directly to the CTO.",
      "Built frontend features using React, including customer search tabs and manager dashboard. Set up a company community page to boost customer engagement.",
      "Directed customer tracking data to an in-house event management service, saving $3000 per month by eliminating the use of Segment, a CDP tool."
    ]
  },
  {
    name: "Samsung Electro-Mechanics",
    position: "AI Intern",
    url: "https://www.samsungsem.com/global/",
    location: "Bengaluru, India",
    startDate: "2019-10-01",
    endDate: "2020-04-01",
    summary: "As an AI Intern at Samsung Electro-Mechanics, I focused on enhancing AI algorithms and developing features for deep learning models, significantly improving prediction accuracy and user understanding of CNN.",
    highlights: [
      "Designed and implemented an algorithm for Brightics, achieving an 8% improvement in prediction accuracy over classical algorithms.",
      "Developed a feature for visual inspection of intermediate feature representations in CNN layers using matplotlib, aiding in understanding image classification processes."
    ]
  },
  {
    name: "TeacherOn, Topmate, LinkedIn",
    position: "Mentor",
    url: "https://topmate.io/brahada_srinivas",
    location: "Remote",
    startDate: "2020-05-01",
    endDate: "Present",
    summary: "As a Mentor across various platforms, I have guided over 100 students and professionals in computer fundamentals and software development, leveraging my expertise to foster learning and growth.",
    highlights: [
      "Mentored 100+ students and professionals, focusing on computer fundamentals and software development."
    ]
  },
  {
    name: "TeacherOn, Freelancer",
    position: "Freelancer",
    location: "Remote",
    startDate: "2020-05-01",
    endDate: "2020-12-01",
    summary: "As a Freelancer, I successfully managed and executed over 10 projects, utilizing my strong coding skills and project management experience to deliver high-quality solutions.",
    highlights: [
      "Managed and successfully delivered 10+ freelance projects, showcasing strong coding and project management skills."
    ]
  }
]


  
  
export default work;
