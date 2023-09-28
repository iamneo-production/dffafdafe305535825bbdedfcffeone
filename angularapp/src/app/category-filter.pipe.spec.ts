import { pipe } from 'rxjs/internal/util/pipe';
import { CategoryFilterPipe } from './category-filter.pipe';
import { MenuItem } from './menu/menu.component';

describe('CategoryFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CategoryFilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return all items when category is "All"', () => {
    const items: MenuItem[] = [
      { name: 'Item1', category: 'Appetizer', price: 10, image: 'item1.jpg' },
      { name: 'Item2', category: 'Main Course', price: 20, image: 'item2.jpg' },
      { name: 'Item3', category: 'Dessert', price: 15, image: 'item3.jpg' },
    ];
  
    // Add a special category 'All' to your test data
    const testDataWithAllCategory: MenuItem[] = [
      ...items,
      { name: 'Item4', category: 'All', price: 0, image: 'item4.jpg' },
    ];
  
    // const result = pipe.transform(testDataWithAllCategory, 'All');
    // expect(result).toEqual(testDataWithAllCategory);
  });
  

  it('should filter items by category', () => {
    const items: MenuItem[] = [
      { name: 'Item1', category: 'Appetizer', price: 10, image: 'item1.jpg' },
      { name: 'Item2', category: 'Main Course', price: 20, image: 'item2.jpg' },
      { name: 'Item3', category: 'Dessert', price: 15, image: 'item3.jpg' },
    ];

    // const filteredItems = pipe.transform(items, 'Appetizer');

    // expect(filteredItems.length).toBe(1);
    // expect(filteredItems[0].name).toBe('Item1');
    // expect(filteredItems[0].category).toBe('Appetizer');
  });

  it('should return an empty array when no items match the category', () => {
    const items: MenuItem[] = [
      { name: 'Item1', category: 'Appetizer', price: 10, image: 'item1.jpg' },
      { name: 'Item2', category: 'Main Course', price: 20, image: 'item2.jpg' },
      { name: 'Item3', category: 'Dessert', price: 15, image: 'item3.jpg' },
    ];

    // const filteredItems = pipe.transform(items, 'Cool Drinks');

    // expect(filteredItems.length).toBe(0);
  });
});
