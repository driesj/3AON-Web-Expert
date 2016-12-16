<?php
namespace Controller;

use RudyMas\PDOExt\DBconnect;

class DatabaseController
{
    private $dbconnect;

    /**
     * DatabaseController constructor.
     * @param $dbconnect
     */
    public function __construct(DBconnect $dbconnect)
    {
        $this->dbconnect = $dbconnect;
    }

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

    public function getAuto($id)
    {
        $query = "SELECT a.id, t.type, a.omschrijving, a.basisprijs, a.verbruik, a.verkbelast, a.inverkbelast
                  FROM tbl_auto a
                  JOIN tbl_type t
                  ON a.type_id = t.id
                  WHERE a.id = $id";
        $this->dbconnect->queryRow($query);
        return $this->dbconnect->data;
    }
}