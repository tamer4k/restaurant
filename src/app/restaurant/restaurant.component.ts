// import { state } from '@angular/animations';
// import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';
import { getConstantValue } from 'typescript';
// import { Route } from '@angular/router';
import restaurantData from '../restaurants.json';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpressionBinding } from '@angular/compiler';
/**/

/* */
declare let toastr: any
interface Restaurant {
  id: Number
  restaurantName: String
  starRating: number
  categories: String
  tijdBezorgd: Number
  minBestellen: Number
  bezorgdKosten: Number
  restaurantImageUrl: String
  favoriet: boolean
  cat?: Cat[]

}

export interface Cat {
  catName: string
  producten: Producten[]
}

export interface Producten {
  id: number
  name: string
}


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],

})

export class RestaurantComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,) {

  }

  public restaurantElements: Array<Restaurant> = [];
  searchValue?: any;
  komma = ","
  filteredRestaurants: Restaurant[] = [];
  restaurants: Restaurant[] = restaurantData;
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredRestaurants = this.categoriesFilter(value);
  }

  categoriesFilter(filterBy: string): Restaurant[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.restaurants.filter((restaurant: Restaurant) =>
      restaurant.categories.toLocaleLowerCase().includes(filterBy));
  }



  ngOnInit(): void {
    setTimeout(() => {

      this.filteredRestaurants = this.restaurants;
      this.listFilter = '';
    }, -2000);
  }

  public valuee!: number;

selecteets(){
  const res = restaurantData;
  for(let i = 0; i < res.length; i++){
    const eenresturants = res[i].starRating;
    let eending = eenresturants;
    this.valuee = eending;

    console.log(this.valuee);
  }
  console.log(this.valuee);
  return this.valuee;



}
  filterFavoriet(): Restaurant[] {
    return this.restaurants.filter((restaurant: Restaurant) => restaurant.favoriet === true);
  }
  allValue(): void {
    this.listFilter = '';
  }
  lunchValue(): void {
    this.listFilter = 'lunch';
  }
  pizzaValue(): void {
    this.listFilter = 'pizza';
  }
  japaneseValue(): void {
    this.listFilter = 'japanese';
  }
  favorietValue(): void {
    this.filteredRestaurants = this.filterFavoriet();

  }
starRating = 2
public valuestart = this.selecteets();
  public onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    // alert(`${$event.oldValue},${$event.newValue}`);

    this.valuestart;
  }
}

