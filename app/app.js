import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-ui-router';
import 'lodash';
require('angular-material/angular-material.css');
require('font-awesome/css/font-awesome.css');
require('./app.scss');
import AppRouter from './app-router.js'
import HeaderComp from './header/header.comp.js';
import HeaderCtrl from './header/header.ctrl.js';
import HomeCtrl from './home/home.ctrl.js';
import PatientProfileCtrl from './patient-profile/patient-profile.ctrl.js';
import RulesCtrl from './rules/rules.ctrl';
import PatientRulesCtrl from './patient-rules/patient-rules.ctrl';

let module = angular.module('policyAlertApp', ['ui.router', 'ngMaterial', 'ngMessages'])
    .component('paHeader', HeaderComp)
    .controller('HeaderCtrl', HeaderCtrl)
    .controller('HomeCtrl', HomeCtrl)
    .controller('PatientProfileCtrl', PatientProfileCtrl)
    .controller('RulesCtrl', RulesCtrl)
    .controller('PatientRulesCtrl', PatientRulesCtrl);

module.config(AppRouter);

module.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('blue');
});

export default module;


