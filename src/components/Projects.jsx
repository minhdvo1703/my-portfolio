import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const PROJECTS = [
  {
    id: 1,
    title: 'Divvy Bike Sharing Systems Analysis',
    description:
      'Designed a relational schema and built an ETL pipeline into BigQuery to analyze Chicago\'s Divvy ridership — evaluating rider behavior, station performance, and the impact of weather and precipitation on usage.',
    tags: ['Python', 'MySQL', 'BigQuery', 'ETL', 'Tableau'],
    accent: 'bg-accent/20',
    github: 'https://github.com/minhdvo1703/Divvy-Bike-Data-Engineering-Project',
    demo:   'https://github.com/minhdvo1703/Divvy-Bike-Data-Engineering-Project/blob/main/team4-FinalPresentation.pdf',
  },
  {
    id: 2,
    title: 'Navigating AI Revolution — NLP Analysis',
    description:
      'Led NLP analysis of a 200K-article corpus to map AI\'s impact across industries. Applied BERTopic, sentiment analysis, and topic modeling to surface automation trends and workforce implications.',
    tags: ['Python', 'NLP', 'BERTopic', 'Sentiment Analysis', 'LLMs'],
    accent: 'bg-accent/30',
    github: 'https://github.com/minhdvo1703/GenAI-Impact-Workforce',
    demo:   'https://github.com/minhdvo1703/GenAI-Impact-Workforce/blob/main/MinhVo-Final-Presentation.pdf',
  },
  {
    id: 3,
    title: 'Twitter Education Analysis — Big Data',
    description:
      'Analyzed 100M tweets (500GB) with PySpark to identify influential voices in education, surface hot topics by geography and timeline, and detect duplication patterns in education-related content.',
    tags: ['Python', 'PySpark', 'Big Data', 'NLP', 'Twitter API'],
    accent: 'bg-accent/15',
    github: 'https://github.com/minhdvo1703/twitterer-edu',
    demo:   'https://bit.ly/bdp-twitter-edu',
  },
  {
    id: 4,
    title: 'Health Insurance Claim Prediction',
    description:
      'Developed and fine-tuned predictive models to estimate insurance claim amounts from health factors including BMI, diabetes status, and smoking. Identified the best-performing model through rigorous comparison.',
    tags: ['Python', 'Scikit-learn', 'Regression', 'Feature Engineering'],
    accent: 'bg-accent/25',
    github: 'https://github.com/minhdvo1703/Insurance-Claim-Amount-Prediction',
    demo:   'https://github.com/minhdvo1703/Insurance-Claim-Amount-Prediction/blob/main/DSHC-Final-Presentation.pdf',
  },
  {
    id: 5,
    title: 'Chicago Trade Forecast — Time Series',
    description:
      'Implemented seasonal ARIMA, ETS, and regression with ARIMA errors to forecast monthly import trends in Chicago before and after COVID-19, covering 01/2002 – 12/2023. Produced two optimal models — one per period.',
    tags: ['R', 'ARIMA', 'ETS', 'Time Series', 'Forecasting'],
    accent: 'bg-accent/10',
    github: 'https://github.com/minhdvo1703/timeseries_chicago_trade',
    demo:   'https://github.com/minhdvo1703/timeseries_chicago_trade/blob/main/0.TimeSeriesforChicagoTradeData.pdf',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="bg-surface border border-border-subtle rounded-xl p-6 flex flex-col gap-4
      hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(77,168,218,0.15)]
      transition-all duration-200 cursor-default">

      {/* Colored header strip */}
      <div className={`h-4 -mx-6 -mt-6 rounded-t-xl ${project.accent}`} />

      {/* Title */}
      <h3 className="font-sans text-base font-semibold text-text-base leading-snug">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm text-text-muted flex-1" style={{ lineHeight: '1.3' }}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span key={tag}
            className="font-sans text-[11px] font-medium text-accent-dark bg-accent-light
              px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-1">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-sans text-sm font-medium text-accent hover:text-accent-dark transition-colors duration-200">
          <FaGithub size={14} /> GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-sans text-sm font-medium text-accent hover:text-accent-dark transition-colors duration-200">
          <FaExternalLinkAlt size={12} /> Slides
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-base">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <p className="font-sans text-[12px] font-semibold text-accent uppercase tracking-[0.1em] mb-2">
          Work
        </p>

        {/* Section heading */}
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-text-base mb-12"
          style={{ lineHeight: '1.2', letterSpacing: '-0.01em' }}>
          Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
