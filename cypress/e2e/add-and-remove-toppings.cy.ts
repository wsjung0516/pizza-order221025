import { slowCypressDown } from 'cypress-slow-down';
slowCypressDown() // slows down each command by 500ms
describe.only('Change toppings', () => {
  before(()=> {
    cy.visit('/')

  })
  it('Reset status of pizza toppings', () => {
    cy.contains('New').click();
  })

  it('Add Toppings', () => {
    // Input pizza name
    cy.get('[formControlName="name"]').type('Mother Pizza');
    // Basil 3,
    cy.get('[src="assets/img/toppings/singles/basil.svg"]').click().click().click();
    // Bacon 3
    cy.get('[src="assets/img/toppings/singles/bacon.svg"]').click().click().click();
    // Chili 2
    cy.get('[src="assets/img/toppings/singles/chili.svg"]').click().click();
    // Onion 1
    cy.get('[src="assets/img/toppings/singles/onion.svg"]').click();
    // Anchovy 1
    cy.get('[src="assets/img/toppings/singles/anchovy.svg"]').click();
    // Pizza price
    cy.get('[formControlName="price"]').invoke('val')
      .then(price => {
        expect(price).equal('9,800원');
      });
    cy.get('[class="btn btn__ok ng-star-inserted"]').click();
    //
    //


  })
  it('Remove selected toppings', () => {
    // Basil 1
    cy.contains('selected-topping-item','basil').click();
    cy.get('selected-topping-item').then((topp)=>{
      expect(topp.get(0).innerText).to.eq('basil\n2');
    })
    // Bacon 1
    cy.contains('selected-topping-item','bacon').click();
    cy.get('selected-topping-item').then((topp)=>{
      expect(topp.get(1).innerText).to.eq('bacon\n2');
    })
    // Chili 1
    cy.contains('selected-topping-item','chili').click();
    cy.get('selected-topping-item').then((topp)=>{
      expect(topp.get(2).innerText).to.eq('chili\n1');
    })
  });
  it('Assert the price', () => {
    cy.get('[formControlName="price"]').invoke('val')
      .then(price => {
        expect(price).equal('6,900원');
      });

  });
})

