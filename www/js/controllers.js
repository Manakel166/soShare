angular.module('app.controllers', [])
  
.controller('potSMembersCtrl', function($scope,MemberService) {
  $scope.members = [];
  $scope.input = {};
 
  function getAllMembers() {
    MemberService.getMembers()
    .then(function (result) {
      $scope.members = result.data.data;
    });
  }
 
  $scope.addMember = function() {
    MemberService.addMember($scope.input)
    .then(function(result) {
      $scope.input = {};
      // Reload our members, not super cool
      getAllMembers();
    });
  }
 
  $scope.deleteMember= function(id) {
    MemberService.deleteMember(id)
    .then(function (result) {
      // Reload our todos, not super cool
      getAllMembers();
    });
  }
 
  getAllMembers();

})
   
.controller('expensesTabDefaultPageCtrl', function($scope,ExpenseService,MemberService) {
  $scope.expenses = [];
  $scope.members=[];
  $scope.input = {};
 
  function getAllExpenses() {
    ExpenseService.getExpenses()
    .then(function (result) {
      $scope.expenses = result.data.data;
    });
  }
  function getAllMembers() {
    MemberService.getMembers()
    .then(function (result) {
      $scope.members = result.data.data;
    });
  }
  
  
 
  $scope.addExpense = function() {
    ExpenseService.addExpense($scope.input)
    .then(function(result) {
      $scope.input = {};
      // Reload our members, not super cool
      getAllExpenses();
    });
  }
 
  $scope.deleteExpense= function(id) {
    ExpenseService.deleteExpense(id)
    .then(function (result) {
      // Reload our todos, not super cool
      getAllExpenses();
    });
  }
 
  getAllExpenses();
  getAllMembers();

})

   
.controller('closureTabDefaultPageCtrl', function($scope) {

})
    