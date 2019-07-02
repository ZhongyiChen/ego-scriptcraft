exports.test_object = {
    name: 'Echo',
    age: 18,
    printHello: function() {
      echo('Hello World!');
    },
    printNameAndAge: function() {
      echo(this.name + ' ' + this['age']);
    },
}
  