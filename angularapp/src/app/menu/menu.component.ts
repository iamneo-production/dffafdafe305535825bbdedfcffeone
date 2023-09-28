import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  name: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuItems: MenuItem[] = [
    { name: 'Burger', category: 'Main Course', price: 100, image:'assets/burger.jpg' },
    { name: 'Salad', category: 'Appetizer', price: 70 , image:'assets/salad.jpg'},
    { name: 'Pizza', category: 'Main Course', price: 120, image:'assets/pizza.jpg' },
    { name: 'Ice Cream', category: 'Dessert', price: 40 , image:'assets/icecream.jpg'},
    { name: 'French Fries', category: 'Appetizer', price: 110 , image:'assets/french fries.jpg'},
    { name: 'Smiley Fries', category: 'Appetizer', price: 70, image:'assets/smiley fries.jpg' },
    { name: 'Blue Mojito', category: 'Cool Drinks', price: 80 , image:'assets/blue mojito.jpg'},
    { name: 'Mutton Biriyani', category: 'Main Course', price: 150, image:'assets/mutton biriyani.jpg' },
    { name: 'Fish Kebab', category: 'Main Course', price: 140, image:'assets/fish.jpg' },
    { name: 'Grilled Sandwich', category: 'Appetizer', price: 100 , image:'assets/grilled.jpg'},
    { name: 'Sizzling Brownie', category: 'Dessert', price: 70 , image:'assets/brownie.jpg'},
    { name: 'Deathby Chocolate', category: 'Dessert', price: 85, image:'assets/deathby.jpg' },
    { name: 'Falooda', category: 'Dessert', price: 80 , image:'assets/falooda.jpg'},
    { name: 'Fried Chicken', category: 'Main Course', price: 80 , image:'assets/fried chicken.jpg'},
    { name: 'Pudding', category: 'Dessert', price: 180 , image:'assets/pudding.jpg'},
    { name: 'White Sauce Pasta', category: 'Appetizer', price: 200 , image:'assets/pasta.jpg'},
    { name: 'Chocolate waffle', category: 'Dessert', price: 150 , image:'assets/waffle.jpg'},
    { name: 'Chicken Noodles', category: 'Main Course', price: 120 , image:'assets/noodles.jpg'},
    { name: 'Chicken Nuggets', category: 'Appetizer', price: 120 , image:'assets/nuggets.jpg'},
    
  ];

  selectedCategory: string = 'All';

  
  updateCategory(category: string) {
    this.selectedCategory = category;
  }
  shouldCenterImage(category: string): boolean {
    const centeredCategories = ['Dessert', 'Appetizer', 'Main Course'];
    return centeredCategories.includes(category);
  }

}
