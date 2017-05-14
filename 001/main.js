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
  var $addGoalButton = $("#add-goal-btn");
  var $goalText = $("#goal-txt");
  var $goalList = $("#goals-list");
  var $restGoalsButton = $("#reset-goals");
  var $heyDude = $("#heydude");

  var generateGoalItem = function(goal) {
    var $goalEl = $("<div class='goal-entry'></div>");
    $goalEl.text(goal);
    return $goalEl;
  }
  var rerender = function(){
    $goalList.empty();
    var goals  = DataStore.getGoals();
    var goals = goals.reverse();
    for(var ii = 0; ii < goals.length; ii++){
      $goalList.append(generateGoalItem(goals[ii]));
    }
  };

  rerender();

  var presseedAddGoal = function(){
    var newGoalText  = $goalText.val();
    $goalText.val('');
    console.log(newGoalText);
    if(newGoalText.length > 0 ) {
      $heyDude.slideDown();
      DataStore.addGoal(newGoalText);
      rerender();
    }
  };

  $goalText.on("keyup", function(e){
    // Check for enter key
    if(e.keyCode == 13 ) {
    presseedAddGoal();
    }
  });

  $restGoalsButton.click(function(){
    DataStore.resetGoals();
    rerender();
  });
  
  $addGoalButton.click(function(){
    presseedAddGoal();
  });

  $heyDude.click(function(){
    $heyDude.slideUp();
  });

});



