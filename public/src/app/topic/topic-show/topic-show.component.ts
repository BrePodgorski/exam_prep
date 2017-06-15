import { Component, OnInit } from '@angular/core';
import { TopicService } from './../topic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-show',
  templateUrl: './topic-show.component.html',
  styleUrls: ['./topic-show.component.css']
})
export class TopicShowComponent implements OnInit {
  topic: any;
  topic_id: String;

  constructor(private _topicService:TopicService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
      this.topic_id = param.id;
    })
    this.componentGetSingleTopic(this.topic_id)
  }
  componentGetSingleTopic(theIdFromTheUrl){
    console.log(theIdFromTheUrl);
    this._topicService.serviceGetSingleTopic(theIdFromTheUrl)
    .then((topicFromServer)=> this.topic = topicFromServer)
    .catch((err)=>console.log(err))
  }
  createComment(formData, topic_id){
    console.log(formData.value);
    this._topicService.createComment(formData.value, topic_id)
    .then( () => {
      this.componentGetSingleTopic(topic_id);
    })
    .catch(err => console.log(err))
    formData.reset();
  }

}
