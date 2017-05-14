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
      return JSON.parse(goals);
    }
  },

  resetGoals: function(){
    DataStore.setGoals([]);
  },

  setGoals: function(goals){
    localStorage.setItem(DataStore.goalsKey, JSON.stringify(goals));
  },

  addGoal: function(newGoal){
    var currentGoals = DataStore.getGoals();
    currentGoals.push(newGoal);
    DataStore.setGoals(currentGoals);
  }
};


$(document).ready(function(){
  console.log("Goals..");
});



