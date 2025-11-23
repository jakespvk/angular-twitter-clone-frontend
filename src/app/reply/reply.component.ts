import { Component, Input } from '@angular/core';
import { Reply } from '../reply';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-reply',
  imports: [RouterLink],
  templateUrl: './reply.component.html',
  styleUrl: './reply.component.css',
})
export class ReplyComponent {
  @Input() reply!: Reply;
}
