#ifndef _TIM5_H_
#define _TIM5_H_

/* Rajoute dans TIM2 interruption handler
  if (tim5_Counting){
        tim5_CounterOverflow++;;
    }
*/
struct TIMER {
   int CNT;
   int Arr;
   int PSC;
};

struct TIMER* TIM1;

void tim5_Start(void);

void tim5_Stop(void);

void Tim5_Reset();

int Tim5_GetTicks();

#endif