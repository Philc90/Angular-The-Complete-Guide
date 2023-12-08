import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, from, fromEvent, interval, pipe } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    // map operator example
    // const clicks = fromEvent<PointerEvent>(document, 'click');
    // const positions = clicks.pipe(map(ev => ev.clientX));

    // positions.subscribe(x => console.log(x));

    // takeUntil operator example
    // const source = interval(1000);
    // const clicks = fromEvent(document, 'click');
    // const result = source.pipe(takeUntil(clicks));
    // result.subscribe(x => console.log(x), err => console.log(err), () => console.log("done"));


    // create observable from array example
    // from([1, 2, 3]).pipe(
    //   map(x => x * 2)
    // ).subscribe(
    //   num => console.log('from array:',num)
    // )

    // example: interval
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    // creating interval from scratch
    // const customIntervalObservable = new Observable((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count)
    //     if (count === 2) {
    //       observer.complete()
    //     }
    //     if (count > 3) {
    //       observer.error(new Error('count > 3'))
    //     }
    //     count++
    //   },1000)
    // })

    // this.firstObsSubscription = customIntervalObservable.pipe(filter((data: number) => {
    //   return data > 0;
    // }),
    // map((data:number) => {
    //   return 'Round: ' + (data+1)
    // })).subscribe(data => {
    //   console.log(data)
    // }, error => {
    //   // observervable ends: cancelled due to error
    //   console.error(error)
    // }, () => {
    //   // observervable ends: completed
    //   console.log('COMPLETE')
    // })


    // ALTERNATIVE syntax: pass in observable object
    // .subscribe({
    //   next: data => {
    //     console.log(data)
    //   },
    //   error: error => {
    //     // observervable ends: cancelled due to error
    //     console.error(error)
    //   },
    //   complete: complete => {
    //     // observervable ends: completed
    //     console.log('COMPLETE')
    //   }
    // })


    
    // https://www.youtube.com/watch?v=_iXd0SWr3Sw

    // const cold = new Observable((observer) => {
    //   observer.next(Math.random() * 10)
    // })

    // cold.subscribe(res => { console.log('cold:', res) })

    // cold.subscribe(res => { console.log('cold:', res) })

    // const hot = new Subject();

    // hot.subscribe(res => {
    //   console.log('hot:', res)
    // })

    // hot.subscribe(res => {
    //   console.log('hot:', res)
    // })

    // hot.next(Math.round(Math.random() * 10))
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
