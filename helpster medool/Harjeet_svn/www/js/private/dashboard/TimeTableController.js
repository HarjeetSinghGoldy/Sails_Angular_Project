/**
 * Created by Harjeet on 09-Feb-16.
 */
sample.controller("TimeTableController", function ($scope, $log) {
 
    var setAllInactive = function() {
        angular.forEach($scope.workspaces, function(workspace) {
            workspace.active = false;
        });
    };
 
    var addNewWorkspace = function() {
        var id = $scope.workspaces.length + 1;
        $scope.workspaces.push({
            id: id,
            name: "Workspace ",
            active: true
            
        });
        console.log(id);
   
    };
 
    $scope.workspaces =
    [
        { id: 1, name: "Workspace 1", active:true  }
     
    ];
 
    $scope.addWorkspace = function () {
        setAllInactive();
        addNewWorkspace();
    }; 
    
    $scope.removeWorkspace = function (id) {
       
       console.log(id);
        $scope.workspaces.splice(id-1, 1);
        id--;
        
        
    };
 
});

sample.controller ("ChildTimeTableController", function($scope, $log){
    var _slots = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  
  function _init() {
    $scope.slots = _slots;
  }
      
  _init();
});


    sample.directive('myTimetable', function () {
    return {
      restrict: 'A',
      templateUrl: 'templates/Doctors/time.ejs',
      scope: {
        slots: '='
      },
      link: function (scope, element, attributes) {
        var _days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        var _selection = {
          state: false,
          day: [0, 0, 0, 0, 0, 0, 0],
          hour: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        
        function _loop(begin, end, step) {
          var array = [];
          
          for (var i = begin; i <= end; i += step) {
            array.push(i);
          }
          
          return array;
        }
        
        function _toggle(what, day, hour) {
          var i = 0;
          
          switch (what) {
            case 'day':
              _selection.day[day] = !_selection.day[day];
              
              for (i = 0; i < 24; i++) {
                scope.slots[day][i] = _selection.day[day]; 
              }
            break;
            
            case 'hour':
              _selection.hour[hour] = !_selection.hour[hour];
              
              for (i = 0; i < 7; i++) {
                scope.slots[i][hour] = _selection.hour[hour];
              }
            break;
            
            case 'slot':
              if (_selection.state) {
                scope.slots[day][hour] = !scope.slots[day][hour];
              }
            break;
          }
        }
        
        function _select(state, day, hour) {
          _selection.state = state;
          
          if (_selection.state) {
            _toggle('slot', day, hour);
          }
        }
        
        function _init() {
          scope.loop = _loop;
          scope.toggle = _toggle;
          scope.select = _select;
          
          scope.days = _days;
        }
        
        _init();
      }
    };
});