import { Component } from '@angular/core';

@Component({
  selector: 'app-signal-search',
  standalone: true,
  imports: [],
  templateUrl: './signal-search.component.html',
  styleUrl: './signal-search.component.css'
})
export class SignalSearchComponent {
  search = ''
  users = [
    {
      id: 1, name: "Karel",
    },
    {
      id: 2, name: 'Petr'
    }
  ]

  filteredUsers = this.users

  setSearchString(e: Event) {
    this.search = (e.target as HTMLInputElement).value.toLowerCase()
    this.filteredUsers = this.users.filter((user) => user.name.toLowerCase().startsWith(this.search))
  }

  addUser() {
    this.users = [...this.users, {id: 3, name: "Pepa"}]
  }
}
