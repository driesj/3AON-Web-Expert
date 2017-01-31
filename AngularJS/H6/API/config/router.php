<?php
/**
 * This file is used to configure all the routes of your website
 *
 * You can add routes like this:
 *
 * $router->addRoute('HTTP method', 'Route to use', 'Controller[:Function]', 'Array of Objects')
 * - HTTP method: Can be anything, but in most cases, it will be GET or POST
 * - Route to use: - /something/anything -> This is the route to follow (case-insensitive)
 *                 - /{textSomething} -> This will create a variable 'textSomething' for you. (case-sensitive)
 *                 => You can use anything as a route, for example: /users/get/{userId}/city/{city}
 *                    -> <URL>/users/get/1/city/Hasselt will create the variables $var['userId'] = 1
 *                                                                                $var['city'] = 'Hasselt'
 * - Controller[:Function]:
 *      - 'Controller' -> This will load the class Controller
 *                     The Controller will receive '$var, $html_body (JSON/XML/...), Array of Object')
 *      - 'Controller:Function' -> This will load the class Controller
 *                                 and also load the Function inside the class
 *                              The Controller will receive 'Array of Objects'
 *                              The Function will receive '$var, $html_body (JSON/XML/...)'
 * - Array of Objects: This can be any object you want to pass on to the controller
 *                     In most cases, it will be the database object(s)
 */
use RudyMas\Router\EasyRouter;

$router = new EasyRouter();
$router->addRoute('GET', '/', 'Api:info');
$router->addRoute('GET', '/autos', 'Api:getAutos', ['dbconnect' => $dbconnect]);
$router->addRoute('GET', '/auto/{id}', 'Api:getAuto', ['dbconnect' => $dbconnect]);
$router->addRoute('POST', '/deleteAuto/{id}', 'Api:deleteAuto', ['dbconnect' => $dbconnect]);
$router->addRoute('POST', '/newAuto', 'Api:newAuto', ['dbconnect' => $dbconnect]);
$router->addRoute('GET', '/typeAutos', 'Api:getTypeAutos', ['dbconnect' => $dbconnect]);
$router->addRoute('GET', '/prijsklasse', 'Api:getPrijsklasse', ['dbconnect' => $dbconnect]);

try {
    $router->execute();
} catch (Exception $exception) {
    http_response_code($exception->getCode());
    print($exception->getMessage());
}
/** End of File: router.php **/