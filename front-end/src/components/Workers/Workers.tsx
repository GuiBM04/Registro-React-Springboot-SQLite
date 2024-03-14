import React, { useEffect, useState } from "react";
import Person from "../../entities/Person";

interface Props {
    reload: boolean;
}

const Workers: React.FC<Props> = ({ reload }) => {
    const [persons, setPersons] = useState<any[]>([]);

    const urlApi = "http://localhost:8080/api/person";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlApi);
                if (!response.ok) {
                    throw new Error("Erro ao carregar dados");
                }
                const jsonData = await response.json();
                setPersons(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        };

        fetchData();
    }, [reload]);

    return (
        <div>
            {persons.map((p) => 
                <div key={p.id}>
                    <span>{p.name}</span>
                    <span>{p.email}</span>
                    <span>{p.telefone}</span>
                    <span>{p.date}</span>
                    <span>{p.cpf}</span>
                    <span>{p.rg}</span>
                    <span>{p.nacionalidade}</span>
                    <span>{p.estadoCivil}</span>
                </div>
            )}
        </div>
    );
}

export default Workers;