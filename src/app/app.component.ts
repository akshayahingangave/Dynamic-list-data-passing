import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicdatapass2';

  storedPosts = [] as any
  onPostAdded(event: any) {
    this.storedPosts.push(event);
  }

}
