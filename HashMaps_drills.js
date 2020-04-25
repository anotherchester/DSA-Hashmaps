//___________________________1. Create a hashmap class

const HashMap = require('./hashmap')

function main() {

  const lotr = new HashMap();

  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set('Hobbit', 'Bilbo')
  lotr.set('Hobbit', 'Frodo')
  lotr.set('Wizard', 'Gandalf')
  lotr.set('Human', 'Aragorn')
  lotr.set('Elf', 'Legolas')
  lotr.set('Maiar', 'The Necromancer')
  lotr.set('Maiar', 'Sauron')
  lotr.set('RingBearer', 'Gollum')
  lotr.set('LadyOfLight', 'Galadriel')
  lotr.set('HalfElven', 'Arwen')
  lotr.set('Ent', 'Treebeard')
  lotr.set('Hobbit_', 'Bilbo')

  console.log(lotr.get('Hobbit'))
  console.log(lotr.get('Maiar'))

  console.log(lotr);
}



//___________________________________2. Ehat Does This Do _________________________ 

const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

//It's initializes 2 HashMaps and sets keys/values for them. It sets a value at a specific index in 
//the hashmap and overwrites it because it uses the same string as a key.


//_________________________________3. Demonstrate understanding of HashMaps________
// ---FIRST DRILL
// 88 collides with 22, moved to next available slot
//15 collides with 4, moved to next avalable slot
//17 collides with 28, moved to next available slot
//59 collides with 15 moved to next available slot
//---SECOND DRILL
//19 and 10 both collides 28, added in sequence to a linked list
//33 collides with 15, added in sequence to a linked list
//________________________________4. Remove duplicates ____________________________

function removeDuplicates(string) {

  const library = new HashMap();

  let result = '';

  for (let char of string) {
    if (!library.get(char)) {
      // If the char is not in the library,
      // add the char to our result and then add it to the library
      result += char;
      library.set(char, true);
    }
  }

  return result;
}

//______________________________. 5. Permutation of a palindrome __________________________

function palindromePermutations(string) {
  const library = new HashMap();

  for (let i = 0; i < string.length; i++) {
    if(library.get(string[i]) === undefined) {
      library.set(string[i], 'something')    
    }
    else {   
      library.delete(string[i])
    }
  }

  if(library.length > 1 ) {
    return false
  }
  else {return true}
  
}

//________________________________6 . Anagram grouping ______________________________________

// main()
// console.log(removeDuplicates('google all that you think can think of'))
console.log(palindromePermutations('acecarr'))