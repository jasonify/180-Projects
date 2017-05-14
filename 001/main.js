// Our simple data store for getting  goals:
var DataStore  = {
  goalsKey: 'goalsStored',
  getGoals: function(){
    // TODO: check if localstorage.
    var goals =  localStorage.getItem(DataStore.goalsKey);
    if (goals == null) {
      DataStore.resetGoals();
      return []
    } else {
      return goals;
    }
  },
  resetGoals: function(){
    DataStore.setGoals([]);
  },

  setGoals: function(goals){
    localStorage.setItem(DataStore.goalsKey, goals);
  },

  addGoal: function(newGoal){
    var currentGoals = DataStore.getGoals();
  }
};


$(document).ready(function(){
  console.log("Goals..");
});



