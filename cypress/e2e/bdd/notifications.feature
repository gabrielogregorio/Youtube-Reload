Feature: User Notifications
  Scenario: Opening Notifications
    Given the user is logged in to the website
    When the user clicks on the notifications icon
    Then the notifications dropdown should open
    Then the user should see a list of their notifications after "3000" ms