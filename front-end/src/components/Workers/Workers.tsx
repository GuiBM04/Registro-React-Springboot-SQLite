import './Workers.css';

import React, { useEffect, useState } from "react";

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
            {persons.length !== 0 && 
                <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Data</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Nacionalidade</th>
                        <th>Estado Civil</th>
                    </tr>
                </thead>

                <tbody>
                    {persons.map((p) => 
                    <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.email}</td>
                        <td>{p.telefone}</td>
                        <td>{p.date}</td>
                        <td>{p.cpf}</td>
                        <td>{p.rg}</td>
                        <td>{p.nacionalidade}</td>
                        <td>{p.estadoCivil}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            }
            
            
        </div>
    );
}

export default Workers;