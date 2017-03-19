'use strict';

import route from './main.route';
import serverService from './server.service';


const mainPageModule = angular.module('main-module', [
  'ui.router'
]);

mainPageModule.config(route);
serverService(mainPageModule);

export default mainPageModule;
