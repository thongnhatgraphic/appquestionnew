/**
 *
 * Asynchronously loads the component for UiLoading
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
