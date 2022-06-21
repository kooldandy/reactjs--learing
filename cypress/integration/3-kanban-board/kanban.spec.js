/* global cy */

describe("Test Kanban Board App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/kanbanboard");
    cy.viewport(1024, 768);
  });

  it("Backlog section should have 2 task by default", () => {
    cy.get('div[data-card="Backlog"] div[data-task-name]').should(
      "have.length",
      2
    );
  });

  it("Todo section should have 1 task by default", () => {
    cy.get('div[data-card="Todo"] div[data-task-name]').should(
      "have.length",
      1
    );
  });

  it("Drag task from Backlog should move to Todo", () => {
    const item = cy.get('div[data-card="Backlog"] div[data-task-name]').first();
    const dataTransfer = new DataTransfer();
    item.trigger("dragstart", { dataTransfer });

    const dropSection = cy.get('div[data-card="Todo"]');
    dropSection.trigger("drop", {dataTransfer})
  });
});
