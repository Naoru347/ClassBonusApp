var app = angular.module('halloweenApp', []);

app.controller('HalloweenController', function() {
    this.students = [       
        // test section
        { name: 'Jean-luc Picard', outcome: '' },
        { name: 'William Riker', outcome: '' },
        { name: 'Data', outcome: '' },
        { name: 'Geordi LaForge', outcome: '' },
        { name: 'Worf', outcome: '' },
        { name: 'Diana Troi', outcome: '' },
        { name: 'Beverly Crusher', outcome: '' },
        { name: 'Ro Laren', outcome: '' },
        { name: 'Wesley Crusher', outcome: '' },
        { name: 'Mile O\'Brian', outcome: '' }

    ];

    this.assignOutcome = function(student, type) {
        if (type === 'treat') {
            var randomBonus = Math.floor(Math.random() * 10) + 1; // Random bonus between 1 to 10
            student.outcome = 'You get ' + randomBonus + ' bonus points!';
        } else if (type === 'trick') {
            var tricks = [
                "Recite the GW slogan ten times fast!",
                "Act out your favorite animal for 10 seconds!",
                "Share a fun fact about a topic of your choice!",
                "Mimic the sound of three different animals!",
                "Spell your name backward as fast as you can!",
                "Strike a superhero pose and hold for 10 seconds!",
                "Do your best impression of a famous person!",
                "Hop on one foot while counting to 10!",
                "Share an interesting story about your pet or a dream pet!",
                "Give a compliment to three classmates!",
                "Sing the alphabet song in a funny voice!",
                "Act out a scene from your favorite movie (without talking)!",
                "Draw a quick doodle of a cat wearing a hat!",
                "List 5 items you'd take to a deserted island!",
                "Do a dramatic reading of a random classroom sentence!",
                "Show and tell! Share an item from your backpack and tell a 1-minute story about it!",
                "Act like a robot for 30 seconds!",
                "Describe a fictional character without naming them and let classmates guess!",
                "Make up a 2-line rhyme about the current season!",
                "Demonstrate three different types of dance moves!"
            ];            
            var randomChance = Math.random();

            if (randomChance <= 0.02) { // 1:50 chance
                student.outcome = 'You get 50 bonus points!';
            } else if (randomChance <= 0.12) { // 1:10 chance (adding to the previous 0.02 to make it 0.12)
                student.outcome = 'You get 25 bonus points!';
            } else {
                var randomTrick = tricks[Math.floor(Math.random() * tricks.length)];
                student.outcome = randomTrick;
            }
        } else if (type === 'absent') {
            //halloween statement
            // student.outcome = 'Boooo! Ghosting your class! How ghoulish!'
            //general statement
            student.outcome = 'Oh no! Pulling a stealthy Revolutionary move and vanishing from sight? Rejoin the GW uprising!';
        }
    };
});
