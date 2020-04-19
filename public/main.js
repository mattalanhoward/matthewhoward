const context = {
  title: 'Welcome to Matthew Howard',
  body: 'Matthew Howard is a hiker, web developer and youtube video creator',
  hikes: [
    {
      image: 'https://mattalanhoward.s3.us-east-2.amazonaws.com/DSC00911.jpg',
      name: 'Tour Du Mont Blanc',
      year: '2019',
      description: '100 mile loop circumnavigating Mont Blanc while passing though Switzerland, Italy and France',
    },
    {
      image: 'https://mattalanhoward.s3.us-east-2.amazonaws.com/IMG_5123.jpeg',
      name: 'Gola di Gorropu Canyon, Sardinia',
      year: '2018',
      description: 'Often billed as "Europe’s Grand Canyon", the Gola Su Gorropu is an isolated and dramatic gorge, best reached on foot. ',
    },
    {
      image: 'https://mattalanhoward.s3.us-east-2.amazonaws.com/IMG_8908.jpeg',
      name: 'Camino de Santiago, Spain',
      year: '2017',
      description: 'An 888 km pilgrimage across northern Spain',
    },
    {
      image: 'https://mattalanhoward.s3.us-east-2.amazonaws.com/IMG_5130.jpeg',
      name: 'Appalachian Trail',
      year: '2012',
      description: '2,182 miles from Georgia to Maine',
    },
    {
      image: 'https://mattalanhoward.s3.us-east-2.amazonaws.com/IMG_1066.jpeg',
      // image2: 'https://mattalanhoward.s3.us-east-2.amazonaws.com/IMG_1255.jpeg',
      name: 'The Pacific Crest Trail',
      year: '2017',
      description: '2,650 miles from Canada to Mexico',
    },
  ]
};

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('information').innerHTML = compiledHtml;


