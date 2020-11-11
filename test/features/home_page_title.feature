@smoke
Feature: Home Page Title

Scenario: Page Title
    Given I open "https://oz.by/"
    Then Page title should be "OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси."
        And Page title should not be "OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по России."
    When I wait "10" seconds