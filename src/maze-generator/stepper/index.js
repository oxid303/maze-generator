import { getRandomFromArr, getVectors } from '../utils';

const stepper = (grid, exits, ways, path, steps) => {

  const step = steps.length - 1;
  const { vectors, curr: point } = steps[step];

  if (vectors.length) {

    const vector = getRandomFromArr(vectors);
    steps[step].vectors = vectors.filter(v => v !== vector);

    const prev = vector + point;
    const curr = vector * 2 + point;

    if (exits.has(prev)) {
      path.add(prev);
      ways.add(prev);

      exits.delete(prev);
      if (exits.size) path.add(point);
    }

    if (grid.has(curr)) {

      ways.add(prev);
      grid.delete(curr);

      steps.push({ prev, curr, vectors: getVectors(vector) });

      if (exits.size === 1) {
        path.add(prev);
        path.add(curr);
      }
    }

  } else {
    if (exits.size === 1) {
      if (path.has(steps[step].prev)) {
        path.delete(steps[step].curr);
        path.delete(steps[step].prev);

      } else {
        path.add(steps[step].prev);
        path.add(steps[step - 1].curr);
      }
    }
    steps.pop();
  }
};

export default stepper;