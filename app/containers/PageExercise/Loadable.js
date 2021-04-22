/**
 *
 * Asynchronously loads the component for PageExercise
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
