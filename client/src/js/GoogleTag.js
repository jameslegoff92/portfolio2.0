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

export const tagCloudFrontend = TagCloud(frontendCloud, frontendCloudArray);
export const tagCloudBackend = TagCloud(backendCloud, backendCloudArray);
export const tagCloudDevops = TagCloud(devopsCloud, devopsCloudArray);
