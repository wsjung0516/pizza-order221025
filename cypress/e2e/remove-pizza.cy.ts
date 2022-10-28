import { slowCypressDown } from 'cypress-slow-down';
slowCypressDown() // slows down each command by 500ms

describe('Remove pizza from the pizza list',()=>{
  before(()=> {
    cy.visit('/')
  })
  it('Select one of current pizzas', () => {
    // Select pizza named BBB from pizza list, which is right area of window
    cy.contains('BBB').click();
  })
  it('Assert the price and delete', ()=>{
    cy.get('[formControlName="price"]').invoke('val')
      .then(price => {
        expect(price).equal('6,300');
      });
    //
    cy.contains('Delete Pizza').click();
  })
  it('Assert the pizza list, there are remains 2 pizzas in the list.', () =>{
    cy.get('[class="text-xl ml-2 text-green-900"]').then((price)=> {
      expect(price.length).to.eq(2);
    })
  })
})
