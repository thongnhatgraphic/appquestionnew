/**
 *
 * Asynchronously loads the component for PageResult
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
