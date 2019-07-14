class Sorter {
  constructor(public collection: number[] | string) {}

  /**
   * Bubble sort.
   */
  sort(): void {
    const { length } = this.collection;

    for (let i=0; i < length; i++) {
      for (let j=0; j < length - i -1; j++) {
        //Type guard. Checks out only number[] inside this if
        if (this.collection instanceof Array) {
          if(this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = temp;
          }
        }

        // in Type Guard. typeof works only for number, string and boolean.
        if (typeof this.collection === 'string') {

        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
