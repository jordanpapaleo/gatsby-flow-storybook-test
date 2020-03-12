/// <reference types="Cypress" />

function getByQaId(qaId) {
  return cy.get(`[data-qa-id="${qaId}"]`)
}

const aboutLink = 'AppLayout_About_Link'
const homeLink = 'AppLayout_Home_Link'
const blogLink = 'AppLayout_Blog_Link'

describe('A11y', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
    cy.wait(500)
  })

  it('should load the home page and check A11y', () => {
    getByQaId(homeLink).click()
    getByQaId('Home_AppLayout_LayoutRoot')
      .find('h1')
      .should('have.text', 'Home')

    cy.checkA11y()
  })

  it('should load the about page and check A11y', () => {
    getByQaId(aboutLink).click()
    getByQaId('About_AppLayout_LayoutRoot')
      .find('h1')
      .should('have.text', 'About')

    cy.checkA11y()
  })

  it('should load the blog page and check A11y', () => {
    getByQaId(blogLink).click()
    getByQaId('Blog_AppLayout_LayoutRoot')
      .find('h1')
      .should('have.text', 'Blogs')

    cy.checkA11y()
  })
})

describe('', () => {

})
