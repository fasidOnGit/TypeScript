const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};
/**
 * This is what is a difference between array and tuple
 * the way it is annotated makes this one a tuple and.
 * In Tuples -  we need to folow a very specific order.
 */
const pepsi: [string, boolean, number] = ['brown', true, 40];

/**
 * Type Alias.
 * Creates of a tuple. Does not create an array.
 */
type Drink = [string, boolean, number];

const cola: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];

// We are really not going to use Tuples that often!
// Tip: Useful for csv export to define a row.
