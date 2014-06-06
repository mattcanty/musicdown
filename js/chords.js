angular.module('app', ['filters'])
  .controller('ChordCtrl', function($scope) {
    $scope.notes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];

    $scope.info = {
      title:"Brown Eyed Girl",
      artist:"Van Morrison",
      album:"Blowin' Your Mind!"
    };

    $scope.beats = 4;
    $scope.bar = 4;    
    $scope.timeSignature = $scope.beats + '/' + $scope.bar;
  
    $scope.key = 10;

    $scope.sections = [{
      name:"Verse",
      repeat:true,
      bars:[{
        prefix:"||:",
        chords:[new chord(10,4)]
      },{
        prefix:"|",
        chords:[new chord(3,4)]
      },{
        prefix:"|",
        chords:[new chord(10,4)]
      },{
        prefix:"|",
        suffix:"|",
        chords:[new chord(10,4)]
      },{
        prefix:"|",
        chords:[new chord(10,4)]
      },{
        prefix:"|",
        chords:[new chord(3,4)]
      },{
        prefix:"|",
        chords:[new chord(10,4)]
      },{
        prefix:"|",
        suffix:":||",
        chords:[new chord(5,4)]
      }] 
    },{
      name:"Bridge",
      repeat:true,
      bars:[{
        prefix:"||:",
        chords:[new chord(3,4)]
      },{
        prefix:"|",
        chords:[new chord(5,4)]
      },{
        prefix:"|",
        chords:[new chord(10,4)]
      },{
        prefix:"|",
        suffix:"|",
        chords:[new chord(7,4)]
      },{
        prefix:"|",
        chords:[new chord(3,4)]
      },{
        prefix:"|",
        chords:[new chord(5,4)]
      },{
        prefix:"|",
        chords:[new chord(10,4)]
      },{
        prefix:"|",
        suffix:":||",
        chords:[new chord(5,4)]
      }]
    },{
      name:"Chorus",
      repeat:true,
      bars:[{
        prefix:"||:",
        chords:[new chord(10,4)]
      },{
        prefix:"|",
        chords:[new chord(3,4)] 
      },{
        prefix:"|",
        chords:[new chord(10,4)]
      },{
        suffix:":||",
        chords:[new chord(5,4)]
      }]
    }];  

    $scope.transpose = function (k){ 
      if (k<0) {
        $scope.notes.push($scope.notes.shift());
      } else {
        $scope.notes.unshift($scope.notes.pop());
      }
    };

    function chord(note, length, embellishments) {
      return {note:note, length:length, embellishments:embellishments};
    };
  });



