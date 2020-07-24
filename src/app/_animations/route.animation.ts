import { trigger, transition, style, query, animate, group } from '@angular/animations';

// export const slideInAnimation = 
// trigger('routeAnimations', [
//   transition('* => *', translateTo({ x: 100, y: -100, rotate: 90 }) )
// ]);

export const slideInAnimation =
trigger('routeAnimations', [
  transition('* => isLeft', slideTo('left') ),
  transition('* => isRight', slideTo('right') ),
  transition('isRight => *', slideTo('left') ),
  transition('isLeft => *', slideTo('right') ),
  transition('* => *', slideTo('right') )
]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ], optional),
    group([
      query(':leave', [
        animate('600ms ease', style({ opacity: 0}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%'}))
      ], optional)
    ])
  ];
}

function translateTo({x = 100, y = 0, rotate = 0}) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
    ], optional),
    group([
      query(':leave', [
        animate('600ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`}))
      ], optional),
      query(':enter', [
        animate('600ms ease-out', style({ transform: `translate(0, 0) rotate(0)`}))
      ], optional)
    ]),
  ];
}