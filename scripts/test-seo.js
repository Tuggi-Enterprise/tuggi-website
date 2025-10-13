// Test script to verify SEO functions
const { parseUrlPath } = require('./src/utils/routing.ts');

// Test parseUrlPath function
console.log('Testing parseUrlPath:');
console.log('parseUrlPath("/en/"):', parseUrlPath('/en/'));
console.log('parseUrlPath("/pt/"):', parseUrlPath('/pt/'));
console.log('parseUrlPath("/es/"):', parseUrlPath('/es/'));
console.log('parseUrlPath("/"):', parseUrlPath('/'));

// Test generatePageTitle manually
const generatePageTitle = (page, language) => {
  const titles = {
    home: {
      EN: 'Tuggi - Discover culture and stories wherever you go',
      PT: 'Tuggi - Descubra cultura e histórias por onde você passa',
      ES: 'Tuggi - Descubre cultura e historias por donde pases'
    }
  };
  
  return titles[page]?.[language] || titles.home[language] || titles.home.EN;
};

console.log('\nTesting generatePageTitle:');
console.log('generatePageTitle("home", "EN"):', generatePageTitle('home', 'EN'));
console.log('generatePageTitle("home", "PT"):', generatePageTitle('home', 'PT'));
console.log('generatePageTitle("home", "ES"):', generatePageTitle('home', 'ES'));