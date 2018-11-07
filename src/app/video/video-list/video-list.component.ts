import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Video } from '../../video/video';
import { VideoService } from '../../video/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers:[ VideoService ]
})
export class VideoListComponent implements OnInit {

  videos: Video[];

  constructor(private videoService: VideoService) { }

  getVideos(): void {
    this.videoService.getVideos().subscribe(videos => {this.videos = videos});
  }

  ngOnInit() {
    this.getVideos();
  }

}
