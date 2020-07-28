import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faBriefcase,
  faPortrait,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
const URL = 'http://bodhanshrestha.com.np';
const ContentItems = [
  {
    type: 'react',
    title: 'Movie App',
    detail: {
      firstDetail: 'React App',
      secondDetail: null,
    },
    date: '2020',
    icon: faReact,
    url: 'https://shrestha8050.github.io/Movie-Finder/#/',
    align: 'right',
  },
  {
    type: 'react',
    title: 'Weather App',
    detail: {
      firstDetail: 'React App',
      secondDetail: null,
    },
    date: '2020',
    icon: faReact,
    url: 'https://shrestha8050.github.io/Weather/',
    align: 'right',
  },
  {
    type: 'personal',
    title: 'Personal Website',
    detail: {
      firstDetail: 'Use of HTML , CSS , Javascript(React)',
      secondDetail: 'Creative Design, Visual Design, Project Management',
    },
    fontS: '30px',
    date: '2020 - present',
    icon: faPortrait,
    align: 'left',
    url: '/',
  },
  {
    type: 'header',
    title: 'Broadway projects',
    icon: faUniversity,
    spanTitle: 'Copyright Themes from themeforest',
    date: '2019 - 2020',
    align: 'right',
  },
  {
    type: 'work',
    title: 'Charity',
    date: '2019 - 2020',
    icon: faUniversity,
    align: 'right',
    url: `${URL}/charity`,
  },
  {
    type: 'work',
    title: 'NGO',
    date: '2019 - 2020',
    icon: faUniversity,
    align: 'right',
    url: `${URL}/ngo`,
  },
  {
    type: 'work',
    title: 'Corporate Site',
    date: '2019 - 2020',
    icon: faUniversity,
    align: 'right',
    url: `${URL}/travelo`,
  },
  {
    type: 'work',
    title: 'News',
    date: '2019 - 2020',
    icon: faUniversity,
    align: 'right',
    url: `${URL}/news`,
  },
  {
    type: 'work',
    title: 'Celebrity',
    date: '2019 - 2020',
    icon: faUniversity,
    align: 'right',
    url: `${URL}/burbank`,
  },
  {
    type: 'work',
    title: 'Travel Agency',
    date: '2019 - 2020',
    icon: faUniversity,
    align: 'right',
    url: `${URL}/travelo`,
  },
  {
    type: 'work',
    title: 'Corporate Site',
    date: '2019 - 2020',
    icon: faUniversity,
    align: 'right',
    url: `${URL}/trax`,
  },
  {
    type: 'personal',
    title: 'Personal Site',
    date: '2019 - 2020',
    icon: faPortrait,
    align: 'left',
    url: `${URL}/`,
  },
];

export default ContentItems;
