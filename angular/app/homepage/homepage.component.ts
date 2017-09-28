import { Component } from '@angular/core';

import { Post } from 'app/shared';
import { posts } from '../../../solomon.conf';

@Component({
  selector: 'solomon-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent {
  posts: Post[] = posts;
}
