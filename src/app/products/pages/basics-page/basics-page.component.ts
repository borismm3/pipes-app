import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'boris';
  public nameUpper: string = 'BORIS';
  public fullName: string = 'bORiS maIdAnA';

  public customDate: Date = new Date();
}
