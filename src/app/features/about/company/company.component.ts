import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

  private userService = inject(UserService)
  private router = inject(Router)
  private subscription = new Subscription()
  members$: Observable<any>

  navigateToTeam() {
    this.router.navigate(['/about/team'])
  }

  PROMISE
  async getUsers() {
    const response = await lastValueFrom(this.userService.getUsers());
    console.log(response)
  }

  // OBSERVABLE SUBSCRIBE
  // getUsers() {
  //   this.subscription.add(this.userService.getUsers().subscribe((res) => {
  //     console.log(res)
  //   }));
  // }

  // ASYNC PIPE
  // getUsers() {
  //   this.members$ = this.userService.getUsers()
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
