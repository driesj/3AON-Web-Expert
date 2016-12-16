<?php
namespace Model;

class Auto
{
    private $id, $type_id, $omschrijving, $basisprijs, $verbruik, $verkbelast, $inverkbelast;

    /**
     * Auto constructor.
     * @param $id
     * @param $type_id
     * @param $omschrijving
     * @param $basisprijs
     * @param $verbruik
     * @param $verkbelast
     * @param $inverkbelast
     */
    public function __construct($id, $type_id, $omschrijving, $basisprijs, $verbruik, $verkbelast, $inverkbelast)
    {
        $this->id = $id;
        $this->type_id = $type_id;
        $this->omschrijving = $omschrijving;
        $this->basisprijs = $basisprijs;
        $this->verbruik = $verbruik;
        $this->verkbelast = $verkbelast;
        $this->inverkbelast = $inverkbelast;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTypeId()
    {
        return $this->type_id;
    }

    /**
     * @param mixed $type_id
     */
    public function setTypeId($type_id)
    {
        $this->type_id = $type_id;
    }

    /**
     * @return mixed
     */
    public function getOmschrijving()
    {
        return $this->omschrijving;
    }

    /**
     * @param mixed $omschrijving
     */
    public function setOmschrijving($omschrijving)
    {
        $this->omschrijving = $omschrijving;
    }

    /**
     * @return mixed
     */
    public function getBasisprijs()
    {
        return $this->basisprijs;
    }

    /**
     * @param mixed $basisprijs
     */
    public function setBasisprijs($basisprijs)
    {
        $this->basisprijs = $basisprijs;
    }

    /**
     * @return mixed
     */
    public function getVerbruik()
    {
        return $this->verbruik;
    }

    /**
     * @param mixed $verbruik
     */
    public function setVerbruik($verbruik)
    {
        $this->verbruik = $verbruik;
    }

    /**
     * @return mixed
     */
    public function getVerkbelast()
    {
        return $this->verkbelast;
    }

    /**
     * @param mixed $verkbelast
     */
    public function setVerkbelast($verkbelast)
    {
        $this->verkbelast = $verkbelast;
    }

    /**
     * @return mixed
     */
    public function getInverkbelast()
    {
        return $this->inverkbelast;
    }

    /**
     * @param mixed $inverkbelast
     */
    public function setInverkbelast($inverkbelast)
    {
        $this->inverkbelast = $inverkbelast;
    }
}