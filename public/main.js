const context = {
  title: 'Welcome to Matthew Howar',
  body: 'Matthew Howard is a hiker, web developer and youtube video creator',
  hikes: [
    {
      image: 'https://mattalanhoward.s3.us-east-2.amazonaws.com/DSC00911.jpg',
      name: 'Tour Du Mont Blanc',
      description: '100 mile loop circumnavigating Mont Blanc while passing though Switzerland, Italy and France',
    },
    {
      image: 'https://mattalanhoward.s3.us-east-2.amazonaws.com/IMG_5123.jpeg',
      name: 'Tour Du Mont Blanc',
      description: '100 mile loop circumnavigating Mont Blanc while passing though Switzerland, Italy and France',
    },
  ]
};

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('information').innerHTML = compiledHtml;