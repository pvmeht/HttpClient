import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyServiceService } from './my-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts: any[] = [];

  constructor(public myServicedata: MyServiceService) {}

  ngOnInit(): void{
    this.myServicedata.getPosts().subscribe(data =>{
      this.posts = data;
      //console.log(data);

      console.log('Posts data:', this.posts); // Log the data to verify
    }, error => {
      console.error('Error fetching posts:', error); // Log any errors
    
    })
  }
}
