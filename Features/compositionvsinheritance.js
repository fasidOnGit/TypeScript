/**
 * What we are doing here is that we are building up an object.
 * Literally copy paste methods from various functions.
 * here in the Object.assign does just copy paste the methods from various objects.
 * and THAT'S INHERITANCE!! NOT COMPOSITION.
 * Following code are just MULTIPLE INHERITANCE!!! Not COMPOSITION. :)
 * @param state
 * @return {{area: (function(): number)}}
 */

const rectangular = (state) => {
    return {
        area: () => {
            return state.height * state.width;
        }
    };
};

const openable = (state) => {
    return {
        toggleOpen: () => {
            state.open = !state.open;
        }
    };
};

const buildRectangularWindow = (state) => {
  return Object.assign(state, rectangular(state), openable(state));
};

const rectangleWindow = buildRectangularWindow({
    height: 20,
    width: 20,
    open: false
});

rectangleWindow.toggleOpen();
