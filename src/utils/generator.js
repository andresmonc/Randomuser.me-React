// Simplified generator utility for client-side React app
// This uses the existing API folder structure to load data

export const loadDataset = async (nat, listName) => {
  try {
    const response = await fetch(`/api/1.4/data/${nat}/lists/${listName}.txt`);
    const text = await response.text();
    return text.split('\n').filter(line => line.trim() !== '');
  } catch (error) {
    console.error(`Error loading ${nat}/${listName}:`, error);
    return [];
  }
};

const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateName = (gender, nat = 'US') => {
  const firstNames = gender === 'male' 
    ? ['John', 'Michael', 'David', 'James', 'Robert', 'William', 'Richard', 'Thomas', 'Christopher', 'Daniel']
    : ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen'];
  
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
  const titles = gender === 'male' ? ['Mr', 'Dr'] : ['Miss', 'Ms', 'Mrs', 'Dr'];
  
  return {
    title: getRandomItem(titles),
    first: getRandomItem(firstNames),
    last: getRandomItem(lastNames)
  };
};

const generateLocation = (nat = 'US') => {
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
  const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia'];
  const streets = ['Main St', 'Oak Ave', 'Maple Dr', 'Cedar Ln', 'Park Pl', 'Washington St', 'Lake View', 'Hill Rd', 'Forest Dr', 'River Rd'];
  
  return {
    street: {
      number: Math.floor(Math.random() * 9999) + 1,
      name: getRandomItem(streets)
    },
    city: getRandomItem(cities),
    state: getRandomItem(states),
    country: getCountryName(nat),
    postcode: Math.floor(Math.random() * 90000) + 10000,
    coordinates: {
      latitude: (Math.random() * 180 - 90).toFixed(4),
      longitude: (Math.random() * 360 - 180).toFixed(4)
    },
    timezone: {
      offset: '-5:00',
      description: 'Eastern Time'
    }
  };
};

const getCountryName = (code) => {
  const countries = {
    'AU': 'Australia', 'BR': 'Brazil', 'CA': 'Canada', 'CH': 'Switzerland',
    'DE': 'Germany', 'DK': 'Denmark', 'ES': 'Spain', 'FI': 'Finland',
    'FR': 'France', 'GB': 'United Kingdom', 'IE': 'Ireland', 'IN': 'India',
    'IR': 'Iran', 'MX': 'Mexico', 'NL': 'Netherlands', 'NO': 'Norway',
    'NZ': 'New Zealand', 'RS': 'Serbia', 'TR': 'Turkey', 'UA': 'Ukraine',
    'US': 'United States'
  };
  return countries[code] || 'United States';
};

const generateEmail = (name) => {
  const domains = ['example.com', 'email.com', 'mail.com', 'test.com'];
  return `${name.first.toLowerCase()}.${name.last.toLowerCase()}@${getRandomItem(domains)}`;
};

const generateLogin = (name) => {
  const randomNum = Math.floor(Math.random() * 1000);
  return {
    uuid: generateUUID(),
    username: `${name.first.toLowerCase()}${randomNum}`,
    password: generatePassword(),
    salt: generateRandomString(8),
    md5: generateRandomString(32),
    sha1: generateRandomString(40),
    sha256: generateRandomString(64)
  };
};

const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const generatePassword = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < 10; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
};

const generateRandomString = (length) => {
  const chars = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

const generateDOB = () => {
  const age = Math.floor(Math.random() * 60) + 18;
  const year = new Date().getFullYear() - age;
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;
  const date = new Date(year, month, day);
  
  return {
    date: date.toISOString(),
    age: age
  };
};

const generateRegistered = () => {
  const year = 2010 + Math.floor(Math.random() * 14);
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;
  const date = new Date(year, month, day);
  const age = new Date().getFullYear() - year;
  
  return {
    date: date.toISOString(),
    age: age
  };
};

const generatePhone = () => {
  return `(${Math.floor(Math.random() * 900) + 100})-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;
};

const generateCell = () => {
  return `(${Math.floor(Math.random() * 900) + 100})-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;
};

const generateID = (nat) => {
  return {
    name: 'SSN',
    value: `${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 90) + 10}-${Math.floor(Math.random() * 9000) + 1000}`
  };
};

const generatePicture = (gender) => {
  const num = Math.floor(Math.random() * 99);
  const genderNum = gender === 'male' ? 'men' : 'women';
  return {
    large: `https://randomuser.me/api/portraits/${genderNum}/${num}.jpg`,
    medium: `https://randomuser.me/api/portraits/med/${genderNum}/${num}.jpg`,
    thumbnail: `https://randomuser.me/api/portraits/thumb/${genderNum}/${num}.jpg`
  };
};

export const generateRandomUser = async (options = {}) => {
  const {
    results = 10,
    gender = '',
    nat = 'US',
    seed = ''
  } = options;

  // If seed is provided, use it to initialize random (simplified version)
  if (seed) {
    // Simple seed-based random number generator
    Math.seedrandom = (seed) => {
      let x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
  }

  const users = [];
  const nats = nat ? nat.split(',') : ['US'];

  for (let i = 0; i < results; i++) {
    const selectedNat = getRandomItem(nats);
    const selectedGender = gender || (Math.random() > 0.5 ? 'male' : 'female');
    const name = generateName(selectedGender, selectedNat);
    
    const user = {
      gender: selectedGender,
      name: name,
      location: generateLocation(selectedNat),
      email: generateEmail(name),
      login: generateLogin(name),
      dob: generateDOB(),
      registered: generateRegistered(),
      phone: generatePhone(),
      cell: generateCell(),
      id: generateID(selectedNat),
      picture: generatePicture(selectedGender),
      nat: selectedNat
    };
    
    users.push(user);
  }

  return users;
};
