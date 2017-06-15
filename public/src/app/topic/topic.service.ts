import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//must load data type response
import 'rxjs';

@Injectable()
export class TopicService {

  constructor(private _http: Http) { }
  addTopicInService(topicObjectFromComponent){
    return this._http.post('/api/topics', topicObjectFromComponent)
    .map( (responseFromTheServer: Response) => responseFromTheServer.json())
    .toPromise()
  }
  serviceGetAllTopics(){
    return this._http.get('/api/topics')
    .map( (responseFromTheServer: Response ) => responseFromTheServer.json())
    .toPromise()
  }
  serviceGetSingleTopic(theTopicIdFromTheComponent){
    return this._http.get('/api/topics/' + theTopicIdFromTheComponent)
    .map( (responseFromTheServer: Response) => responseFromTheServer.json())
    .toPromise()
  }
  createComment(comment, id){
    return this._http.post( '/api/comments/'+ id, comment)
    .map( (comments: Response)=> comments.json())
    .toPromise()
  }

getCurrentUser(){
  return this._http.get('/api/current')
    .map(( user: Response)=> user.json())
    .toPromise()
}
}
