import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserComponent } from "./user/user";
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
