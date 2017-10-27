var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function (){
    var guesswho = this;
    guesswho.showPeople = false;
    //guesswho.message = 'Hello';
    guesswho.name = '';
    //guesswho.message = 'Hello';

    guesswho.addPerson = function(){
        //console.log(guesswho.name);
        var person = {
            name: guesswho.name,
            github: guesswho.github
        }
        people.push(person);
    }
    guesswho.greetPerson = function(person) {
       
        
         guesswho.message = person.name;
        //console.log(person);
        
    }    

    

    var people = [{
        name: 'Chris',
        github: 'christopher-black',
        show: false
    },
    {
        name: 'Hanna',
        github: 'bemeo1088',
        show: false
    },
    {
        name: 'Ally',
        github: 'lysautumn',
        show: false
    }
    ];

    guesswho.people = people;
})




