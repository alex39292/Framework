@smoke
Feature: Tests for cart and page titles raketa.by

@cart
Scenario: Test cart
    Given I open "https://raketa.by/"
    When I input "скричер" into searching field
    And I click on the first item
    And I click Buy
    And I go to the cart
    Then I check cost with real cost "84,90"

@titles
Scenario Outline: Page Titles <URL>
    Given I open "<URL>"
    Then Page title should be "<Title>"

Examples:
    | URL                                         | Title                                                     |
    | https://raketa.by/novinki-igrushki/         | Игрушки Новинки - интернет-магазин Ракета                 |
    | https://raketa.by/                          | Детские игрушки купить в Минске - магазин игрушек Ракета  |
    | https://raketa.by/zdorovennye-skidki/       | Здоровенные скидки - интернет-магазин Ракета              |