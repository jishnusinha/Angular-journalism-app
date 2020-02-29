import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router'
import { NewsService } from '../news.service';
import { element } from 'protractor';

@Component({
  selector: 'app-detailednews',
  templateUrl: './detailednews.component.html',
  styleUrls: ['./detailednews.component.css']
})
export class DetailednewsComponent implements OnInit {

  constructor(private router : Router , private route : ActivatedRoute , private newsService : NewsService) { }

  public id 
  public data
  ngOnInit() {
    
   this.getAllNews()
  
  }

  getAllNews(){
   
   
    let id = this.route.snapshot.paramMap.get('id') 
    console.log(id)
    this.newsService.getHeadlines('us').subscribe(
      res => {
      //  console.log(res)
       
        for(let x of res.articles){
          if(x.title == id){
            this.data = x
          }
        }
        //this.data = res.articles[id]
        console.log(this.data)
      }
        )

      }
    
    
 
   
  }



