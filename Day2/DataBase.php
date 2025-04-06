<?php

class DataBase
{
    public $connection;
    public $Statement;
    public function __construct($config, $username = 'root', $password = '199605')

    {
        $dns ='mysql:' . http_build_query( $config, '', ';');

        $this->connection = new PDO($dns, $username, $password, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    }

    public function query($query, $params = []){
        $this -> Statement = $this->connection->prepare($query);
        $this -> Statement->execute($params);
        return $this;
    }

    public function getAll()
    {
        return $this -> Statement -> fetchAll();
    }
    public function find()
    {
        return $this -> Statement -> fetch();
    }
    public function findOrAbort(){
        $result = $this -> find();
        if(!$result){
            abort(ResponsCode::NOT_FOUND);
        }
        return $result;
    }
}