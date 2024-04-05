import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import '../../support/commands.js'

Given('Que eu esteja na pagina inicial', function() {
    cy.visit("http://127.0.0.1:5500/index.html")
    cy.wait(2000)
    // Validando que a tela carregou corretamente
    cy.get('h1').should('contain', 'O que fazer hoje?')
})

When('Eu adiciono uma nova task', function() {
    // Type text into the input field with ID 'todo_title'
    //const taskTitle = `AutoTask_${getCurrentFormattedDateTime()}`;
    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const taskTitle = `AutoTask-${month}/${day}-${hours}:${minutes}`;


    cy.get('#todo_title').type(taskTitle)
    cy.contains('Criar tarefa').click()
    cy.wrap(taskTitle).as('taskTitle'); 
    cy.log('Task Title = '+ taskTitle);

})

Then('Eu valido que a tarefa foi cadastrada com sucesso', function() {

    // Retrieve the task title from the alias
    cy.get('@taskTitle').then(taskTitle => {
        // Use the task title to validate the task creation
        cy.contains('tr', taskTitle).should('exist');
    });
});


When('Eu marco minha task como concluída', function() {
     
    cy.get('@taskTitle').then((taskTitle) => {
        cy.contains('tr', taskTitle).within(() => {
            cy.get('.form-check-input').click();
        });
    });
});

Then('Eu valido que minha task foi concluída com sucesso', function() {
    
    Then('Eu valido que minha task foi concluída com sucesso', function() {
        cy.get('@taskTitle').then((taskTitle) => {
            cy.xpath(`//td[text()='${taskTitle}']`).should('have.class', 'completed');
        });
    });
    
});
When('Eu deleto uma task', function() {
    cy.get('@taskTitle').then((taskTitle) => {
        cy.contains('tr', taskTitle).within(() => {
            cy.get('.btn.btn-danger').click();
        });
    });
});

Then('Eu valido que a task foi deletada com sucesso', function() {
    // Recupera o taskTitle do alias
    cy.get('@taskTitle').then((taskTitle) => {
        // Verifica que a <tr> com o taskTitle não está presente na tela
        cy.contains('tr', taskTitle).should('not.exist');
    });
});

When('Eu filtro por tasks em aberto', function() {
    // Clicar no elemento Select
    cy.get('select').select('incomplete');
});

Then('Eu valido que apenas tasks em aberto são exibidas', function() {
    // Verifica se não há nenhuma <tr> com a classe 'completed' na página
    cy.get('tr.completed').should('not.exist');
});

When('Eu filtro por tasks concluidas', function() {
    // Clicar no elemento Select
    cy.get('select').select('complete');
});

Then('Eu valido que apenas tasks concluidas são exibidas', function() {
    // Verifica se não há nenhuma <tr> com a classe 'completed' na página
    cy.get('tr:not(.completed)').should('not.exist');
});

When('', function() {
    
})

Then('', function() {
    
})
