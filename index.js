const axios = require('axios');

const URL = 'https://www.googleapis.com/youtube/v3/channels';

module.exports = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }

  const params = {
    part: 'contentDetails',
    key: options.key,
    id: options.id,
    type: 'video'
  };

  axios.get(URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};

