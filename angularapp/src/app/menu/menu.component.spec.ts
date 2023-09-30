import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent, MenuItem } from './menu.component';

import { CategoryFilterPipe } from '../category-filter.pipe';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent,CategoryFilterPipe]
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize with a default category of "All"', () => {
    expect(component.selectedCategory).toBe('All');
  });

  it('should update the selected category when updateCategory is called', () => {
    component.updateCategory('Main Course');
    expect(component.selectedCategory).toBe('Main Course');
  });

  it('should center the image for categories: Dessert, Appetizer, Main Course', () => {
    const centeredCategories = ['Dessert', 'Appetizer', 'Main Course'];
    centeredCategories.forEach((category) => {
      const shouldCenter = component.shouldCenterImage(category);
      expect(shouldCenter).toBe(true);
    });
  });

  it('should not center the image for other categories', () => {
    const nonCenteredCategories = ['Cool Drinks', 'Unknown Category'];
    nonCenteredCategories.forEach((category) => {
      const shouldCenter = component.shouldCenterImage(category);
      expect(shouldCenter).toBe(false);
    });
  });

  it('should display menu items based on the selected category', () => {
    const menuItems: MenuItem[] = [
      { name: 'Item1', category: 'Appetizer', price: 10, image: 'item1.jpg' },
      { name: 'Item2', category: 'Main Course', price: 20, image: 'item2.jpg' },
      { name: 'Item3', category: 'Dessert', price: 15, image: 'item3.jpg' },
    ];

    component.menuItems = menuItems;
    component.selectedCategory = 'Appetizer'; // Set the selected category

    // Trigger change detection
    fixture.detectChanges();

    // Find all displayed menu items
    const displayedItems = fixture.nativeElement.querySelectorAll('.menu-item');
    expect(displayedItems.length).toBe(1); // Only one item should be displayed in "Appetizer" category
  });
});
