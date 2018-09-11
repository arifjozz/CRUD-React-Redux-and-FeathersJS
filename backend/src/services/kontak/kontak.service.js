// Initializes the `kontak` service on path `/kontaks`
const createService = require('feathers-mongoose');
const createModel = require('../../models/kontak.model');
const hooks = require('./kontak.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/kontaks', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('kontaks');

  service.hooks(hooks);
};
