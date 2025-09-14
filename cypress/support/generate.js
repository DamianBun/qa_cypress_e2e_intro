const { faker } = require('@faker-js/faker');

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const userName = faker.internet.userName() + '_' + randomNumber;
  const email = userName + '@mail.com';
  const password = 'Testpassword1234#';

  return {
    userName,
    email,
    password
  };
}

module.exports = {
  generateUser
};
