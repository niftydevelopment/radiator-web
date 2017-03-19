'use strict';

export default function(app) {

  app.service('serverService', class ServiceService {

      constructor($http) {
        this.$http = $http;
      }

      getListOfServers() {
        return this.$http.get('/radiator/servers');
      }

    });

}
