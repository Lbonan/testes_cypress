/// <reference types="cypress" />

describe("Testes para a home", () => {
  it("Deve renderizar 4 vagas", () => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 4);
  });

  it("Deve filtrar as vagas", () => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
    cy.get(".FormVagas_campo__E1ppF").type("front-end");
    cy.get('button[type="submit"]').click();
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 2);
  });
});
