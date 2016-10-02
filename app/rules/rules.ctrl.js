export default function ($http) {
  var vm = this;



  vm.rules = {
    name: null,
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

  vm.ruleCreated = false;
  vm.createRule = function () {
    vm.ruleCreated = true;
  };
};