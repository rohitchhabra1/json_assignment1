var person = {"firstname":"rohit","lastname":"chhabra","dob":"03/11/1994"};

$('div').html("<h2>Name: " + person.firstname + " " + person.lastname + "</h2>");
$('div').append("<h3>" + "Dob: " + person.dob + "</h3>");