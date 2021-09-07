import { Component } from '@angular/core';







interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {


  title= 'Rdemo';
  selectedValue1: string="";
  selectedValue2: string="";
  selectedValue3: string="";

  selection1='uncheckmark';
  selection2='uncheckmark';
  selection3='uncheckmark';

   


  

 animals = ["dog", "cat", "horse", "cow"];
 temp:any=[{"animal":"cat", "type" : "domestic"},
  {"animal":"elephant", "type" : "wild"}];
 

  imgurl="";
 foodphoto="";



  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'shawarama', viewValue: 'shawarama'}
  ];
name:any=[];




  firstselect(){
    this.selection1='checkmark';
    console.log("slow and study win the race");
      
    
  }
constructor(){
  // const name =["velavan","velavan","velavan"]
let list ="velavan";
for (let i=0; i < 10; i++)
{
this.name.push(list);
}
 console.log(this.name);

}

  secondselect(){
    this.selection2='checkmark';
  }
  thirdselect(){
    this.selection3='checkmark';
  }

 changephoto(){
      switch (this.foodphoto) {
      case 'steak-0': 
      this.imgurl="assets/images/steak.jpg";

      break;
      case  'pizza-1':
      this.imgurl="assets/images/piza.png";
      break;
      case  'tacos-2':
      this.imgurl="assets/images/tacos.jpg";
      break;

      default:
        this.imgurl="";
      break;
   }
    
   
   
  }


}


