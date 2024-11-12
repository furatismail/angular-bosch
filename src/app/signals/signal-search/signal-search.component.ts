

import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-search',
  standalone: true,
  imports: [],
  templateUrl: './signal-search.component.html',
  styleUrl: './signal-search.component.css'
})
export class SignalSearchComponent {
  search = signal(localStorage.getItem('searchString') || '')
  users = signal([
    {
      id: 1, name: "Karel",
    },
    {
      id: 2, name: 'Petr'
    }
  ])

  constructor() {
    effect(() => {
      console.log('run')
      console.log(this.search())
      localStorage.setItem('searchString', this.search())
      this.search.set('ahoj')
  

    }, {
      allowSignalWrites: true
    })
  }

  readonly filteredUsers = computed(() => this.users().filter((user) => user.name.toLowerCase().startsWith(this.search())))

  setSearchString(e: Event) {
    this.search.set((e.target as HTMLInputElement).value.toLowerCase())
  }

  addUser() {
    this.users.update((users) => [...users, {id: 3, name: "Pepa"}])
  }
}
