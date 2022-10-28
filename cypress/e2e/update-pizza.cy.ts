import { slowCypressDown } from 'cypress-slow-down';
slowCypressDown() // slows down each command by 500ms

describe('Update current pizza', () => {
  before(()=> {
    cy.visit('/')
  })
  it('Select one of current pizzas', () => {
    // Select pizza named BBB from pizza list, which is right area of window
    cy.contains('BBB').click();
  })
  it('Assert selected pizza from the pizza list, which is right area of window.', ()=>{
    cy.get('[formControlName="price"]').invoke('val')
      .then(price => {
        expect(price).equal('6,300');
    });
    // Update current topping and add new topping.
    // Anchovy 1
    cy.get('selected-topping-item').then((topp)=>{
      expect(topp.get(0).innerText).to.eq('anchovy\n1');
    })
    // Bacon 1
    cy.get('selected-topping-item').then((topp)=>{
      expect(topp.get(1).innerText).to.eq('bacon\n1');
    })
    // Chili 1
    cy.get('selected-topping-item').then((topp)=>{
      expect(topp.get(2).innerText).to.eq('chili\n1');
    })
    // Olive 1
    cy.get('selected-topping-item').then((topp)=>{
      expect(topp.get(3).innerText).to.eq('olive\n1');
    })

  })
  it('Update toppings', ()=>{
    // Bacon 2
    cy.get('.pizza-toppings').find('[src="assets/img/toppings/singles/bacon.svg"]').click().click();
    // Chili 2
    cy.get('.pizza-toppings').find('[src="assets/img/toppings/singles/chili.svg"]').click().click();
    // Onion 1
    cy.get('.pizza-toppings').find('[src="assets/img/toppings/singles/onion.svg"]').click().click();
    // Anchovy 1
    cy.get('.pizza-toppings').find('[src="assets/img/toppings/singles/anchovy.svg"]').click().click();

  })
  it('Assert the total price and update the pizza list', ()=>{
    cy.get('[formControlName="price"]').invoke('val')
      .then(price => {
        expect(price).equal('11,200원');
      });
    //
    cy.contains('Save changes').click();
  })
  it('Assert the updated item, which is in the last of the list.', () =>{
    cy.get('[class="text-xl ml-2 text-green-900"]').then((price)=> {
      expect(price.get(2).innerText).to.eq('11,200원');
    })
  })
})
