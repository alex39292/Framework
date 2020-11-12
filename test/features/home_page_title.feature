@smoke
Feature: Raketa.by tests

@cart
Scenario: Test cart
    Given I open "https://raketa.by/"
    When I input "скричер" into searching field
    When I click on the first item
    When I click Buy
    When I go to the cart
    When I check cost with real cost "84,90"

@titles
Scenario Outline: Page Titles <URL>
    Given I open "<URL>"
    Then Page title should be "<Title>"
    When I wait "<Seconds>" seconds

Examples:
    | URL                                         | Title                                                     | Seconds |
    | https://raketa.by/novinki-igrushki/         | Игрушки Новинки - интернет-магазин Ракета                 |    1    |
    | https://raketa.by/                          | Детские игрушки купить в Минске - магазин игрушек Ракета  |    1    |
    | https://raketa.by/zdorovennye-skidki/       | Здоровенные скидки - интернет-магазин Ракета              |    1    |