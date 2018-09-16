import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public url = "https://youtube.com/embed/7F37r50VUTQ/";
  
  constructor() { }

  ngOnInit() {
    
  }

}
