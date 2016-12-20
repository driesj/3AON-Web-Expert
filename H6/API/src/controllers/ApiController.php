<?php
namespace Controller;

use Library\Controller;

/**
 * Class ApiController
 */
class ApiController extends Controller
{
    private $args;

    /**
     * ApiController constructor.
     * @param array $args
     */
    public function __construct($args)
    {
        $this->args = $args;
    }

    /**
     * Retrieve all cars inside the database and output it as a JSON
     */
    public function getAutosAction()
    {
        $db = new DatabaseController($this->args['dbconnect']);
        $data['autos'] = $db->getAutos();
        $this->render(null, $data, 'JSON');
    }

    /**
     * Retrieve specific car from the database and output it as a JSON
     * @param array $var
     */
    public function getAutoAction($var)
    {
        $db = new DatabaseController($this->args['dbconnect']);
        $data = $db->getAuto($var['id']);
        if ($data == 404) {
            $this->render(null, [], 'JSON', $data);
        } else {
            $this->render(null, $data, 'JSON');
        }
    }

    /**
     * Delete specific car from the database and return success
     * @param array $var
     */
    public function deleteAutoAction($var)
    {
        $db = new DatabaseController($this->args['dbconnect']);
        $httpCode = $db->deleteAuto($var['id']);
        $this->render(null, [], 'JSON', $httpCode);
    }

    /**
     * Add a new car to the database and return success
     * @param null $null To catch the variables from EasyRouter
     * @param string $json
     */
    public function newAutoAction($null, $json)
    {
        $db = new DatabaseController($this->args['dbconnect']);
        $httpCode = $db->newAuto($json);
        $this->render(null, [], 'JSON', $httpCode);
    }

    /**
     * Retrieve the type of cars
     */
    public function getTypeAutosAction()
    {
        $db = new DatabaseController($this->args['dbconnect']);
        $data['typeAutos'] = $db->getTypeAutos();
        $this->render(null, $data, 'JSON');
    }

    public function getPrijsklasseAction()
    {
        $db = new DatabaseController($this->args['dbconnect']);
        $data['prijsklasse'] = $db->getPrijsklasse();
        for ($x = 0; $x < count($data['prijsklasse']); $x++) {
            if ($data['prijsklasse'][$x]['max_prijs'] != 9999999) {
                $data['prijsklasse'][$x]['tekst'] = '&gt; &euro;' . $data['prijsklasse'][$x]['min_prijs'] . ' ... &lt; &euro;' . $data['prijsklasse'][$x]['max_prijs'];
            } else {
                $data['prijsklasse'][$x]['tekst'] = '&gt; &euro;' . $data['prijsklasse'][$x]['min_prijs'];
            }
        }
        $this->render(null, $data, 'JSON');
    }
}

/** End of File: ApiController.php **/