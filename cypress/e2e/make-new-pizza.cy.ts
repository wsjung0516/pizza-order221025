import { slowCypressDown } from 'cypress-slow-down';
slowCypressDown(); // slows down each command by 500ms
describe.only('Make new pizza', () => {
  before(() => {
    cy.visit('/');
  });
  it('Make new pizza', () => {
    cy.contains('New').click();
  });
  it('Total Toppings', () => {
    cy.get('.pizza-toppings').find('.ng-star-inserted').should('length', 12);
  });

  it('Select Toppings', () => {
    // Input pizza name
    cy.get('[formControlName="name"]').type('Mother Pizza');
    // Basil 3,
    cy.get('.pizza-toppings')
      .find('[src="assets/img/toppings/singles/basil.svg"]')
      .click()
      .click()
      .click();
    // Bacon 3
    cy.get('.pizza-toppings')
      .find('[src="assets/img/toppings/singles/bacon.svg"]')
      .click()
      .click()
      .click();
    // Chili 2
    cy.get('.pizza-toppings')
      .find('[src="assets/img/toppings/singles/chili.svg"]')
      .click()
      .click();
    // Onion 1
    cy.get('.pizza-toppings')
      .find('[src="assets/img/toppings/singles/onion.svg"]')
      .click();
    // Anchovy 1
    cy.get('.pizza-toppings')
      .find('[src="assets/img/toppings/singles/anchovy.svg"]')
      .click();
    // Pizza price
    cy.get('[formControlName="price"]')
      .invoke('val')
      .then((price) => {
        expect(price).equal('9,800원');
      });
  });
  it('Save created pizza', () => {
    // Press create pizza button
    cy.contains('Create Pizza').click();
  });
  it('Assert the created item, which is in the last of the list.', () => {
    cy.get('[class="text-xl ml-2 text-green-900"]').then((price) => {
      expect(price.get(3).innerText).to.eq('9,800원');
    });
  });
  it('Reset status of pizza toppings', () => {
    cy.contains('New').click();
  });

  it('Add Toppings', () => {
    // Input pizza name
    cy.get('[formControlName="name"]').type('Mother Pizza');
    // Basil 3,
    cy.get('[src="assets/img/toppings/singles/basil.svg"]')
      .click()
      .click()
      .click();
    // Bacon 3
    cy.get('[src="assets/img/toppings/singles/bacon.svg"]')
      .click()
      .click()
      .click();
    // Chili 2
    cy.get('[src="assets/img/toppings/singles/chili.svg"]').click().click();
    // Onion 1
    cy.get('[src="assets/img/toppings/singles/onion.svg"]').click();
    // Anchovy 1
    cy.get('[src="assets/img/toppings/singles/anchovy.svg"]').click();
    // Pizza price
    cy.get('[formControlName="price"]')
      .invoke('val')
      .then((price) => {
        expect(price).equal('9,800원');
      });
    cy.get('[class="btn btn__ok ng-star-inserted"]').click();
    //
    //
  });
  it('Remove selected toppings', () => {
    // Basil 1
    cy.contains('selected-topping-item', 'basil').click();
    cy.get('selected-topping-item').then((topp) => {
      expect(topp.get(0).innerText).to.eq('basil\n2');
    });
    // Bacon 1
    cy.contains('selected-topping-item', 'bacon').click();
    cy.get('selected-topping-item').then((topp) => {
      expect(topp.get(1).innerText).to.eq('bacon\n2');
    });
    // Chili 1
    cy.contains('selected-topping-item', 'chili').click();
    cy.get('selected-topping-item').then((topp) => {
      expect(topp.get(2).innerText).to.eq('chili\n1');
    });
  });
  it('Assert the price', () => {
    cy.get('[formControlName="price"]')
      .invoke('val')
      .then((price) => {
        expect(price).equal('6,900원');
      });
  });
  //
  it('Select one of current pizzas', () => {
    // Select pizza named BBB from pizza list, which is right area of window
    cy.contains('BBB').click();
  });
  it('Assert selected pizza from the pizza list, which is right area of window.', () => {
    cy.get('[formControlName="price"]')
      .invoke('val')
      .then((price) => {
        expect(price).equal('6,300');
      });
    // Update current topping and add new topping.
    // Anchovy 1
    cy.get('selected-topping-item').then((topp) => {
      expect(topp.get(0).innerText).to.eq('anchovy\n1');
    });
    // Bacon 1
    cy.get('selected-topping-item').then((topp) => {
      expect(topp.get(1).innerText).to.eq('bacon\n1');
    });
    // Chili 1
    cy.get('selected-topping-item').then((topp) => {
      expect(topp.get(2).innerText).to.eq('chili\n1');
    });
    // Olive 1
    cy.get('selected-topping-item').then((topp) => {
      expect(topp.get(3).innerText).to.eq('olive\n1');
    });
  });
  it('Update toppings', () => {
    // Bacon 2
    cy.get('.pizza-toppings')
      .find('[src="assets/img/toppings/singles/bacon.svg"]')
      .click()
      .click();
    // Chili 2
    cy.get('.pizza-toppings')
      .find('[src="assets/img/toppings/singles/chili.svg"]')
      .click()
      .click();
    // Onion 1
    cy.get('.pizza-toppings')
      .find('[src="assets/img/toppings/singles/onion.svg"]')
      .click()
      .click();
    // Anchovy 1
    cy.get('.pizza-toppings')
      .find('[src="assets/img/toppings/singles/anchovy.svg"]')
      .click()
      .click();
  });
  it('Assert the total price and update the pizza list', () => {
    cy.get('[formControlName="price"]')
      .invoke('val')
      .then((price) => {
        expect(price).equal('11,200원');
      });
    //
    cy.contains('Save changes').click();
  });
  it('Assert the updated item, which is in the last of the list.', () => {
    cy.get('[class="text-xl ml-2 text-green-900"]').then((price) => {
      expect(price.get(2).innerText).to.eq('9,800원');
    });
  });
  //
  it('Select one of current pizzas', () => {
    // Select pizza named BBB from pizza list, which is right area of window
    cy.contains('BBB').click();
  });
  it('Assert the price and delete', () => {
    cy.get('[formControlName="price"]')
      .invoke('val')
      .then((price) => {
        expect(price).equal('11,200원');
      });
    //
    cy.contains('Delete Pizza').click();
  });
  it('Assert the pizza list, there are remains 2 pizzas in the list.', () => {
    cy.get('[class="text-xl ml-2 text-green-900"]').then((price) => {
      expect(price.length).to.eq(3);
    });
  });
});
