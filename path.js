const path = require('path');
console.log('sep : ', path.sep);
console.log('delimiter : ', path.delimiter);
console.log('dirname : ', path.dirname(__filename));
console.log('basename : ', path.basename(__filename));
console.log('extname : ', path.extname(__filename));
console.log('parse : ', path.parse(__filename));
console.log('format : ', path.format({ root: '/',
    dir: '/Users/kerasys/WebstormProjects/Node_Practice',
    base: 'helloNode.js',
    ext: '.js',
    name: 'helloNode' }
));
console.log(path.relative('/Users/kerasys/WebstormProjects/Node_Practice', '/Users'));
console.log(path.join(__dirname, '..','..'));
console.log(path.resolve(__dirname, '..','..'));