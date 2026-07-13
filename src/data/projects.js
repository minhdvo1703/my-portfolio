// Edit this file to update the Projects section — no component code needed.

const projects = [
  {
    id: 1,
    title: 'Divvy Bike Sharing Systems Analysis',
    description:
      "Designed a relational schema and built an ETL pipeline into BigQuery to analyze Chicago's Divvy ridership — evaluating rider behavior, station performance, and the impact of weather and precipitation on usage.",
    tags: ['Python', 'MySQL', 'BigQuery', 'ETL', 'Tableau'],
    accent: 'bg-accent/20',
    github: 'https://github.com/minhdvo1703/Divvy-Bike-Data-Engineering-Project',
    slides: 'https://github.com/minhdvo1703/Divvy-Bike-Data-Engineering-Project/blob/main/team4-FinalPresentation.pdf',
  },
  {
    id: 2,
    title: 'Navigating AI Revolution — NLP Analysis',
    description:
      "Led NLP analysis of a 200K-article corpus to map AI's impact across industries. Applied BERTopic, sentiment analysis, and topic modeling to surface automation trends and workforce implications.",
    tags: ['Python', 'NLP', 'BERTopic', 'Sentiment Analysis', 'LLMs'],
    accent: 'bg-accent/30',
    github: 'https://github.com/minhdvo1703/GenAI-Impact-Workforce',
    slides: 'https://github.com/minhdvo1703/GenAI-Impact-Workforce/blob/main/MinhVo-Final-Presentation.pdf',
  },
  {
    id: 3,
    title: 'Twitter Education Analysis — Big Data',
    description:
      'Analyzed 100M tweets (500GB) with PySpark to identify influential voices in education, surface hot topics by geography and timeline, and detect duplication patterns in education-related content.',
    tags: ['Python', 'PySpark', 'Big Data', 'NLP', 'Twitter API'],
    accent: 'bg-accent/15',
    github: 'https://github.com/minhdvo1703/twitterer-edu',
    slides: 'https://bit.ly/bdp-twitter-edu',
  },
  {
    id: 4,
    title: 'Health Insurance Claim Prediction',
    description:
      'Developed and fine-tuned predictive models to estimate insurance claim amounts from health factors including BMI, diabetes status, and smoking. Identified the best-performing model through rigorous comparison.',
    tags: ['Python', 'Scikit-learn', 'Regression', 'Feature Engineering'],
    accent: 'bg-accent/25',
    github: 'https://github.com/minhdvo1703/Insurance-Claim-Amount-Prediction',
    slides: 'https://github.com/minhdvo1703/Insurance-Claim-Amount-Prediction/blob/main/DSHC-Final-Presentation.pdf',
  },
  {
    id: 5,
    title: 'Chicago Trade Forecast — Time Series',
    description:
      'Implemented seasonal ARIMA, ETS, and regression with ARIMA errors to forecast monthly import trends in Chicago before and after COVID-19, covering 01/2002 – 12/2023. Produced two optimal models — one per period.',
    tags: ['R', 'ARIMA', 'ETS', 'Time Series', 'Forecasting'],
    accent: 'bg-accent/10',
    github: 'https://github.com/minhdvo1703/timeseries_chicago_trade',
    slides: 'https://github.com/minhdvo1703/timeseries_chicago_trade/blob/main/0.TimeSeriesforChicagoTradeData.pdf',
  },
]

export default projects
