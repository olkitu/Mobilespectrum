import { Component } from '@angular/core';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';

/**
 * App Component
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** Title on navigation bar and footer */
  title = 'MobileSpectrum';

  /** Navigation Collapse */
  navbarCollapsed = true;

  /** Gitlab Icon */
  faGitlab = faGitlab;
}
