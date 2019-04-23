/// <reference types="Cypress" />

const checkForErrors = (obj) => {
  cy.get('input[name=name]')
    .type(obj.name.val)
    .should('have.value', obj.name.val)

  cy.get('input[name=weight]')
    .type(obj.weight.val)
    .should('have.value', obj.weight.val)

  cy.get('button')
    .click()

  // Make sure we output correct error message 
  // by checking if value of the custom data- attribute matches expected errorCode
  cy.get('.error-message').should(elem => {
    let errorAttr = elem.attr('data-cy-error')
    expect(errorAttr).to.eq(obj.errorCode)
  })

  // Clear the inputs to start from clean sheet each time function is called
  cy.get('input[name=name]').clear();
  cy.get('input[name=weight]').clear();
}

describe('BoxCalculatorContainer FAILURE Assertions', () => {
  context('Bootstrap application correctly', () => {
    it('Should preload all the data', () => {
      cy.server()
      cy.route('GET', '**/boxinator/boxes').as('getBoxes')

      cy.visit('/')

      cy.wait('@getBoxes');
    })

    it('Should redirect to #/addbox from root route', () => {
      cy.location().should((loc) => {
        expect(loc.hash).to.eq('#/addbox')
      })
    })
  })

  context('Fail to save a box', () => {
    it('Should display "below minimum" error', () => {
      checkForErrors({ name: { val: 'hej' }, weight: { val: '10' }, errorCode: 'belowMinError' })
      checkForErrors({ name: { val: 'hejsan10' }, weight: { val: '-1' }, errorCode: 'negativeValError' })
    })

    it('Should display "above maximum" error', () => {
      checkForErrors({ name: { val: 'Hej! Oj nä nu börjar det bli en för lång sträng här va' }, weight: { val: '10' }, errorCode: 'aboveMaxError' })
      checkForErrors({ name: { val: 'hejsan10' }, weight: { val: '50000' }, errorCode: 'aboveMaxError' })
    })

  })
})