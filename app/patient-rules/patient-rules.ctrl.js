export default function ($timeout) {
    var vm = this;

    vm.carrier = 'stateFarm';
    vm.organization = 'insurance';
    vm.rule = 'preferred';

    vm.applyRule = function () {
        for (let i = 0; i < vm.patients.length; i++) {
            if (vm.patients[i].age > 18 && vm.patients[i].age < 35) {
                vm.patients[i].accept = true;
            }
            else  {
                vm.patients[i].accept = false;
            }
        }
    };
    
    vm.patients = [{
        firstName: 'John',
        lastName: 'Smith',
        patientCode: 'SMIJO1234',
        dob: '04/28/82',
        age: 34,
        accept: null
    },{
        firstName: 'Jane',
        lastName: 'Smith',
        patientCode: 'SMIJA1234',
        dob: '07/12/87',
        age: 29,
        accept: null
    },{
        firstName: 'Colonel',
        lastName: 'Mustard',
        patientCode: 'MUSCO1234',
        dob: '01/19/60',
        age: 56,
        accept: null
    },{
        firstName: 'Ron',
        lastName: 'McDonald',
        patientCode: 'MCDRO1234',
        dob: '09/09/00',
        age: 16,
        accept: null
    },{
        firstName: 'Carmen',
        lastName: 'Sandy',
        patientCode: 'SANCA1234',
        dob: '03/31/90',
        age: 26,
        accept: null
    },{
        firstName: 'Jacque',
        lastName: 'Jones',
        patientCode: 'JONJA1234',
        dob: '10/13/96',
        age: 20,
        accept: null
    }];
};