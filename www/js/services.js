angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.service('MemberService', function ($http, Backand) {
  var baseUrl = '/1/objects/';
  var objectName = 'members/';
 
  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }
 
  function getUrlForId(id) {
    return getUrl() + id;
  }
 
  getMembers = function () {
    return $http.get(getUrl());
  };
 
  addMember = function(member) {
    return $http.post(getUrl(), member);
  }
 
  deleteMember = function (id) {
    return $http.delete(getUrlForId(id));
  };
 
  return {
    getMembers: getMembers,
    addMember: addMember,
    deleteMember: deleteMember
  }
})

.service('ExpenseService', function ($http, Backand) {
  var baseUrl = '/1/objects/';
  var objectName = 'expenses/';
 
  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }
 
  function getUrlForId(id) {
    return getUrl() + id;
  }
 
  getExpenses = function () {
    return $http.get(getUrl());
  };
 
  addExpense = function(expense) {
    return $http.post(getUrl(), expense);
  }
 
  deleteExpense = function (id) {
    return $http.delete(getUrlForId(id));
  };
 
  return {
    getExpenses: getExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense
  }
})



.service('BlankService', [function(){

}]);





