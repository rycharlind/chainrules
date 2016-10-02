/** @ngInject */
export default ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl as vm',
      template: require('./home/home.html')
    })
    .state('rules', {
      url: '/rules',
      controller: 'RulesCtrl as vm',
      template: require('./rules/rules.html')
    })
    .state('patient-profile', {
      url: '/patient',
      controller: 'PatientProfileCtrl as vm',
      template: require('./patient-profile/patient-profile.html'),
      resolve: {
        profile: () => {
          return {
            firstName: 'John',
            lastName: 'Smith',
            phoneNumber: '(555) 321-4925',
            email: 'johnsmith@gmail.com',
            addressLine1: '123 Main St',
            addressLine2: null,
            city: 'St. Louis',
            state: 'MO',
            zip: '63103',
            beneficiary: {
              firstName: 'Jane',
              lastName: 'Smith'
            },
            policyType: 'Life',
            coverage: 100000
          };
        }
      }
    })
    .state('patient-rules', {
      url: '/patientRules',
      template: require('./patient-rules/patient-rules.html'),
      controller: 'PatientRulesCtrl as vm'
    });
};