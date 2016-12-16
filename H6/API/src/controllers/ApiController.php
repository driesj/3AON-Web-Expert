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

    public function getAutoAction($var)
    {
        $db = new DatabaseController($this->args['dbconnect']);
        $data = $db->getAuto($var['id']);
        $this->render(null, $data, 'JSON');
    }
}
/** End of File: ApiController.php **/