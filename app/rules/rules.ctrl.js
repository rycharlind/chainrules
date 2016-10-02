export default function ($http) {
  var vm = this;

  vm.rules = {
    smoking: false,
    fromAge: null,
    toAge: null,
    medications: [''],
    diagnosis: ['']
  };

  vm.addMedication = function () {
    vm.rules.medications.push('');
  };

  vm.addDiagnosis = function () {
    vm.rules.diagnosis.push('');
  };

  vm.createRule = function () {
    $http.post('/api/createRule', vm.rules).then(response => {

    });
  };
};