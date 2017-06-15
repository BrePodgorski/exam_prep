import { Component, OnInit } from '@angular/core';
import { TopicService } from './../topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics:Array<any>;
  user: any;

  constructor(private _topicService: TopicService, private _router: Router) { }

  ngOnInit() {
    this.componentGetAllTopics();
    this.getCurrentUser();

  }
  componentGetAllTopics(){
    this._topicService.serviceGetAllTopics()
    .then((topicsFromServer)=> this.topics= topicsFromServer)
    .catch((err) => console.log(err))
  }
  getCurrentUser(){
    this._topicService.getCurrentUser()
    .then( (user)=> this.user=user)
    .catch((err)=>this._router.navigate(['/login']))
  }

}
