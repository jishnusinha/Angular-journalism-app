import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }

url = 'http://newsapi.org/v2/'




apiKey = '89bc4692e88c4a6aba433061ebd5a6cc'

getHeadlines(country):Observable<any>{

  return this.http.get(this.url+ 'top-headlines?country='+ country+ '&pageSize=50&apiKey='+this.apiKey)
  //return this.http.get('http://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=89bc4692e88c4a6aba433061ebd5a6cc')

}

getAllNews(data):Observable<any>{
  return this.http.get('http://newsapi.org/v2/everything?q='+ data+ '&pageSize=50&apiKey='+this.apiKey)
}


}
