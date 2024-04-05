Feature: Feature Name

    @TagName
    Scenario: Cadastrando uma nova Task
        Given Que eu esteja na pagina inicial
        When Eu adiciono uma nova task
        Then Eu valido que a tarefa foi cadastrada com sucesso
    
     Scenario: Marco minha nova task como concluida
        Given Que eu esteja na pagina inicial
        When Eu adiciono uma nova task
        Then Eu valido que a tarefa foi cadastrada com sucesso
        When Eu marco minha task como concluída  
        Then Eu valido que minha task foi concluída com sucesso
    
     Scenario: Eu deleto uma task 
        Given Que eu esteja na pagina inicial
        When Eu adiciono uma nova task
        Then Eu valido que a tarefa foi cadastrada com sucesso
        When Eu deleto uma task 
        Then Eu valido que a task foi deletada com sucesso

    Scenario: Eu deleto uma task 
        Given Que eu esteja na pagina inicial
        When Eu adiciono uma nova task
        Then Eu valido que a tarefa foi cadastrada com sucesso
        When Eu deleto uma task 
        Then Eu valido que a task foi deletada com sucesso

    Scenario: Eu filtro por tarefas em aberto 
        Given Que eu esteja na pagina inicial
        When Eu adiciono uma nova task
        Then Eu valido que a tarefa foi cadastrada com sucesso
        When Eu marco minha task como concluída
        When Eu adiciono uma nova task
        Then Eu valido que a tarefa foi cadastrada com sucesso
        When Eu filtro por tasks em aberto 
        Then Eu valido que apenas tasks em aberto são exibidas 

    Scenario: Eu filtro por tarefas concluidas
        Given Que eu esteja na pagina inicial
        When Eu adiciono uma nova task
        Then Eu valido que a tarefa foi cadastrada com sucesso
        When Eu marco minha task como concluída
        When Eu adiciono uma nova task
        Then Eu valido que a tarefa foi cadastrada com sucesso
        When Eu filtro por tasks concluidas 
        Then Eu valido que apenas tasks concluidas são exibidas 
    
    