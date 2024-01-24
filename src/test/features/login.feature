Feature: User Authentication tests
As a user, I want to login to the web site

  Background:
    Given User navigates to the application

  Scenario Outline: Login should be successful
    When User enters the username as <username>
    And User enters the password as <password>
    And User clicks on the login button
    Then Login should be successful

    Examples:
    | username                   | password       | 
    | "standard_user"            | "secret_sauce" |
    | "visual_user"              | "secret_sauce" |

  Scenario Outline: Login should not be successful
    When User enters the username as <username>
    And User enters the password as <password>
    And User clicks on the login button
    Then The error message <err> should be displayed

    Examples:
    | username                   | password         | err                                                     | 
    | "locked_out_user"          | "secret_sauce"   | "Epic sadface: Sorry, this user has been locked out."   |