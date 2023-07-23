const TagCloud = require('tagcloud-js');  

const frontendCloud = '.frontend-cloud';
const backendCloud = '.backend-cloud';
const devopsCloud = '.devops-cloud';

const frontendCloudArray = [
    'figma', 'uiux', 'html', 'css', 'javascript', 'typescript', 'reactjs','jest', 'webpack', 'sass', 'bootstrap', 'jquery', 'gsap', 'git', 'github'
];

const backendCloudArray = [
    'nodejs', 'expressjs', 'ejs', 'npm', 'mongodb', 'mongoose', 'mysql', 'php', 'django', 'java', 'rest', 'postman'
];

const devopsCloudArray = [
    'bash', 'docker', 'jenkins', 'nexus', 'linux', 'aws', 'digital ocean', 'heroku'
];

const frontendCloudOptions = { 
    radius: 125,
    containerClass: 'skill__frontend',
};

const backendCloudOptions = { 
    radius: 125,
    containerClass: 'skill__backend',
}

const devopsCloudOptions = {  
    radius: 125,
    containerClass: 'skill__devops',
}

export const tagClouds = () => { 
    TagCloud(frontendCloud, frontendCloudArray, frontendCloudOptions);
    TagCloud(backendCloud, backendCloudArray, backendCloudOptions);
    TagCloud(devopsCloud, devopsCloudArray, devopsCloudOptions);
} 