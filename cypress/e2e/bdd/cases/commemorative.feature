Feature: Commemorative dates
  Scenario: New Year
    Given the user are in date "2020-01-02T12:10:45.500Z"
    When open the page
    Then show title "Ano Novo"
    Then show subtitle "Feliz Ano Novo!"

  Scenario: Easter Day
    Given the user are in date "2020-03-31T12:10:45.500Z"
    When open the page
    Then show title "Páscoa"
    Then show subtitle ""

  Scenario: Halloween
    Given the user are in date "2020-10-31T12:10:45.500Z"
    When open the page
    Then show title "halloween"
    Then show subtitle ""

  Scenario: Astronomy day
    Given the user are in date "2020-12-02T12:10:45.500Z"
    When open the page
    Then show title "Dia da Astronomia"
    Then show subtitle ""

  Scenario: Christmas Eve
    Given the user are in date "2020-12-24T12:10:45.500Z"
    When open the page
    Then show title "Véspera de Natal"
    Then show subtitle ""

  Scenario: Christmas
    Given the user are in date "2010-12-25T12:10:45.500Z"
    When open the page
    Then show title "Natal"
    Then show subtitle "Feliz Natal!!"

  Scenario: New Year's Eve
    Given the user are in date "2010-12-31T12:10:45.500Z"
    When open the page
    Then show title "Véspera de Ano-Novo"
    Then show subtitle "Está chegando um novo Ano!"
