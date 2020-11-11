@smoke
Feature: Home Page Title

Scenario: Page Title
    Given I open oz.by
    Then Page title should be "OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси."
    When I wait 10 seconds