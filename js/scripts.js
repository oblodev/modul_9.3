var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'Triceratops';
var nameUpperDino = dinosaur.toUpperCase();

var charsAfter = text.replace ('Velociraptor', nameUpperDino);

console.log (charsAfter.substr(0, 72));