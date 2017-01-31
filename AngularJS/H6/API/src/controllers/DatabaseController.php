<?php
namespace Controller;

use RudyMas\PDOExt\DBconnect;
use RudyMas\XML_JSON\XML_JSON;

/**
 * Class DatabaseController
 * @package Controller
 */
class DatabaseController
{
    /**
     * @var DBconnect DBconnect
     */
    private $dbconnect;

    /**
     * DatabaseController constructor.
     * @param DBconnect $dbconnect
     */
    public function __construct(DBconnect $dbconnect)
    {
        $this->dbconnect = $dbconnect;
    }

    /**
     * @return array mixed
     */
    public function getAutos()
    {
        $query = "SELECT a.id, t.type, a.omschrijving, a.basisprijs
                  FROM tbl_auto a
                  JOIN tbl_type t
                  ON a.type_id = t.id";
        $this->dbconnect->query($query);
        $this->dbconnect->fetchAll();
        return $this->dbconnect->data;
    }

    /**
     * @param int $id
     * @return array|int
     */
    public function getAuto(int $id)
    {
        $query = "SELECT a.id, t.type, a.omschrijving, a.basisprijs, a.verbruik, a.verkbelast, a.inverkbelast
                  FROM tbl_auto a
                  JOIN tbl_type t
                  ON a.type_id = t.id
                  WHERE a.id = $id";
        $this->dbconnect->queryRow($query);
        return $this->dbconnect->data != '' ? $this->dbconnect->data : 404;
    }

    /**
     * @param int $id
     * @return int
     */
    public function deleteAuto(int $id)
    {
        $query = "DELETE FROM tbl_auto
                  WHERE id = {$this->dbconnect->cleanSQL($id)}";
        $this->dbconnect->delete($query);
        return $this->dbconnect->rows > 0 ? 200 : 404;
    }

    /**
     * @param string $json
     * @return int
     */
    public function newAuto(string $json)
    {
        $convert = new XML_JSON();
        $convert->setJsonData($json);
        $convert->json2array();
        $array = $convert->getArrayData();
        $data = $array['data'];

        $query = "INSERT INTO tbl_auto
                  VALUES (null,
                          {$this->dbconnect->cleanSQL($data['type'])},
                          {$this->dbconnect->cleanSQL($data['omschrijf'])},
                          {$this->dbconnect->cleanSQL($data['prijs'])},
                          {$this->dbconnect->cleanSQL($data['verbruik'])},
                          {$this->dbconnect->cleanSQL($data['verkeerTax'])},
                          {$this->dbconnect->cleanSQL($data['inverkeer'])})";
        $this->dbconnect->insert($query);
        return $this->dbconnect->rows > 0 ? 200 : 404;
    }

    /**
     * @return array
     */
    public function getTypeAutos()
    {
        $query = "SELECT id, type
                  FROM tbl_type";
        $this->dbconnect->query($query);
        $this->dbconnect->fetchAll();
        return $this->dbconnect->data;
    }

    /**
     * @return array
     */
    public function getPrijsklasse()
    {
        $query = "SELECT *
                  FROM tbl_price
                  ORDER BY min_prijs";
        $this->dbconnect->query($query);
        $this->dbconnect->fetchAll();
        return $this->dbconnect->data;
    }
}
/** End of File: DatabaseController.php */