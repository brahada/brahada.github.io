import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/five.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Unified Dashboard',
        projectDesc: 'This project aims to build an employee management system that consolidates all information of a company',
        tags: ['Python', 'Django', 'PostgreSQL', 'React', 'CSS', 'Material Ui'],
        image: one
    },
    {
        id: 2,
        projectName: 'Disaster Survivor Tracking Assistant',
        projectDesc: 'This project is about detecting the survivors in the areas of disaster using IR cameras on drones through optimized image processing.',
        tags: ['Tensorflow', 'Python', 'Yolo'],
        code: 'https://github.com/brahada/Disaster-survivors-detection---Optimized-method',
        demo: 'https://github.com/brahada/Disaster-survivors-detection---Optimized-method',
        image: two
    },
    {
        id: 3,
        projectName: 'Namoota',
        projectDesc: 'A regional food delivery system which helps usual ordering of food from app and also with tokens for daily food mess.',
        tags: ['Django', 'CSS', 'Material Ui'],
        code: 'https://github.com/shubhamjain26/namoota',
        demo: 'https://github.com/shubhamjain26/namoota',
        image: three
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/