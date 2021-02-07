import { Component } from '@angular/core';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';

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

  version = environment.version;

  /** Gitlab Icon */
  faGitlab = faGitlab;
}
