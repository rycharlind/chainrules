/** @ngInject */
export default function ($state) {
  var vm = this;

  vm.goToProfile = function () {
    $state.go('profile');
  };
};