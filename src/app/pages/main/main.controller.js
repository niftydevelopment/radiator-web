'use strict';

import _ from 'lodash/core';

import angularLogo from '_images/angular.png';

function MainController($log, serverService) {
  'ngInject';

  $log.debug('Hello from main controller!');

    serverService.getListOfServers().then(response => {
      thiz.listOfServers = response.data;
    }, () => {
      this.listOfServers = [{inv: 'Atlas Test 1'},{inv: 'Atlas Test 2'}];
    });

      
  this.lodash_version = _.VERSION;
  this.angularLogo = angularLogo;


}

export default MainController;
