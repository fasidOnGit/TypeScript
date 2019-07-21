import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XaayBb');
const sorterChar = new Sorter(charactersCollection);
sorterChar.sort();
console.log(charactersCollection.data);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-9);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(7);

const sorterLinkedList = new Sorter(linkedList);
sorterLinkedList.sort();
console.log(linkedList.print());
