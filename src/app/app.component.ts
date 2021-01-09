import { Component } from '@angular/core';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MobileSpectrum';

  navbarCollapsed = true;

  faGitlab = faGitlab;

}
