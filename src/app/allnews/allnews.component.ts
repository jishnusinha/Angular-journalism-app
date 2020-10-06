import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NewsService } from '../news.service';
@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.css']
})
export class AllnewsComponent implements OnInit {

  constructor(public router : Router , private newsService : NewsService) { }
 
  public newsData
  public newsContainer = []
  public currentPage = 1
  public noofPage = []
  country = 'us'
  noOfData = 10
  valueDisplayed
  newArray = []
  searchText
  searchStatus = false
  
  
  noOfPages 
  Text
  
  ngOnInit() {
  
  this.getAllNews()
  
  
  }

  gettxt(){
    if (window.getSelection) {
      let text = window.getSelection().toString();
      this.Text = text
  }
  }

  customCssProperties = {
    "padding-top": "5px",
    "margin-left": "5px",
    "color": "red",
    "font-weight" : "400"
  }

  makerbold(){
    this.customCssProperties = {
      "padding-top": "5px",
    "margin-left": "5px",
    "color": "red",
    "font-weight" : "1000"
    }
  }

  getDetails(id){

    this.router.navigate(['news',id]);

  }

 getAllNews(){
    
  let pgcount
  let array = []
  let pagenoArray= []
  let i
  this.newsService.getHeadlines('us').subscribe(
      res => {
        console.log(res)
        this.newsData = res
        let x =Math.floor(res.articles.length/this.noOfData) 
        let y = res.articles.length % this.noOfData
        if(y > 0){
           pgcount = x +1
        }else{
          pgcount = x
        }

        for(i=0 ; i< pgcount ; i++){

          let subArray = res.articles.slice(this.noOfData * i , this.noOfData*i+ this.noOfData)
          array.push(subArray)
          pagenoArray.push(i)
          console.log(array)
          }
     
          this.newArray = array
      this.noOfPages = pagenoArray
    console.log(this.newArray)

    this.valueDisplayed = this.newArray[this.currentPage]
     
     
      }
      

    )
 
   
  }



  setpageno(x){
   
  this.currentPage = x
  this.valueDisplayed = this.newArray[x]
  }

  search(){
    this.searchStatus = true
    let pgcount
    let array = []
    let pagenoArray= []
    let i
    this.newsService.getAllNews(this.searchText).subscribe(
        res => {
          console.log(res)
          this.newsData = res
          let x =Math.floor(res.articles.length/this.noOfData) 
          let y = res.articles.length % this.noOfData
          if(y > 0){
             pgcount = x +1
          }else{
            pgcount = x
          }
  
          for(i=0 ; i< pgcount ; i++){
  
            let subArray = res.articles.slice(this.noOfData * i , this.noOfData*i+ this.noOfData)
            array.push(subArray)
            pagenoArray.push(i)
            console.log(array)
            }
       
            this.newArray = array
        this.noOfPages = pagenoArray
      console.log(this.newArray)
  
      this.valueDisplayed = this.newArray[this.currentPage]
       
       
        }
        
  
      )
  }

}
