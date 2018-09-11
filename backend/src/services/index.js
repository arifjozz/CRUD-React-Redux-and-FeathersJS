const contact = require('./contact/contact.service.js');
const kontak = require('./kontak/kontak.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(contact);
  app.configure(kontak);
};
