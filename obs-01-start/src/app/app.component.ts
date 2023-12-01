import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didAactivate => {
      this.userActivated = didAactivate
    })
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe()
  }
}
