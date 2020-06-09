// prettier-ignore
import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, state } from '@angular/animations';

const DEFAULT_TIMINGS = '500ms';

const startStyle = style({ opacity: 0, transform: 'translate3d(0, -5%, 0)' });
const endStyle = style({ opacity: 1, transform: 'translate3d(0, 0, 0)' });

const fadeInDown = animation([animate(DEFAULT_TIMINGS, keyframes([startStyle, endStyle]))]);

/**
 * Fade-in the element from top-to-bottom by percent
 */
export function fadeInDownAnimation(): AnimationTriggerMetadata {
  return trigger('fadeInDown', [
    state('0', startStyle), // hidden
    state('1', endStyle), // visible
    transition('0 => 1', useAnimation(fadeInDown))
  ]);
}

// TODO: params
/*
  const params = {
    timings: (options && options.timings) || DEFAULT_TIMINGS,
    translate: (options && options.translate) || '5%'
  };
*/
