import { slowCypressDown } from 'cypress-slow-down';
slowCypressDown() // slows down each command by 500ms
describe('Make new pizza', () => {
  before(()=> {
    cy.visit('/')
  })
  it('Make new pizza', () => {
    cy.contains('New').click();
  })
  it('Total Toppings', () => {
    cy.get('.pizza-toppings').find('.ng-star-inserted').should('length',12)
  })

  it('Select Toppings', () => {
    // Input pizza name
    cy.get('[formControlName="name"]').type('Mother Pizza');
    // Basil 3,
    cy.get('.pizza-toppings').find('[src="assets/img/toppings/singles/basil.svg"]').click().click().click();
    // Bacon 3
    cy.get('.pizza-toppings').find('[src="assets/img/toppings/singles/bacon.svg"]').click().click().click();
    // Chili 2
    cy.get('.pizza-toppings').find('[src="assets/img/toppings/singles/chili.svg"]').click().click();
    // Onion 1
    cy.get('.pizza-toppings').find('[src="assets/img/toppings/singles/onion.svg"]').click();
    // Anchovy 1
    cy.get('.pizza-toppings').find('[src="assets/img/toppings/singles/anchovy.svg"]').click();
    // Pizza price
    cy.get('[formControlName="price"]').invoke('val')
      .then(price => {
        expect(price).equal('9,800원');
      });
  })
  it('Save created pizza', () => {
    // Press create pizza button
    cy.contains('Create Pizza').click();
  });
  it('Assert the created item, which is in the last of the list.', () =>{
    cy.get('[class="text-xl ml-2 text-green-900"]').then((price)=> {
      expect(price.get(3).innerText).to.eq('9,800원');
    })
  })

})
