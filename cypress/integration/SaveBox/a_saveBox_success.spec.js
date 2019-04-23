/// <reference types="Cypress" />

const boxId = Math.floor(Math.random() * 9999 + 1000);
const weight = Math.floor(Math.random() * 99 + 0);
const countryArray = ['sweden', 'china', 'brazil', 'australia'];
const country = countryArray[Math.floor(Math.random() * countryArray.length)];

const valuesList = [boxId, weight, country];

describe('BoxCalculatorContainer SUCCESS Assertions', () => {

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

  context('Save a box successfully', () => {

    it('Should enter valid box information and save the form input', () => {
      cy.server()
      cy.route('POST', '**/boxinator/boxes').as('saveBox')

      // Since name has to be unique on the backend, we append a somewhat unique id to the name
      cy.get('input[name=name]')
        .type(`Box${boxId}`)
        .should('have.value', `Box${boxId}`)

      cy.get('input[name=weight]')
        .type(`${weight}`)
        .should('have.value', `${weight}`)

      cy.get('select[name=destination_country]')
        .select(`${country}`)
        .should('have.value', `${country}`)

      cy.get('button')
        .click()

      cy.wait('@saveBox').then(xhr => {
        expect(xhr.status).to.eq(200)
      })
    })

    it('Should reset the form values', () => {
      cy.get('input[name=name]')
        .should('have.value', '')

      cy.get('input[name=weight]')
        .should('have.value', '')
    })

    it('Should display the new added value in the table', () => {
      // Redirect to /listboxes

      // Redirect to table view by clicking on the view table button
      cy.get('.view-table-action .button')
        .click()

      cy.get('tbody tr')
        .last()
        .find('td')
        .first()
        .should('have.text', `Box${boxId}`)
        .next()
        .should('have.text', `${weight}`)
    })

    it('Should redirect me back to the form', () => {
      cy.get('.back-cta .button')
        .click()

      cy.location().should((loc) => {
        expect(loc.hash).to.eq('#/addbox')
      })
    })
  })
})