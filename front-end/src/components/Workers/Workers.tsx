import React, { useEffect, useState } from "react";

interface Props {
    reload: boolean;
}

const Workers: React.FC<Props> = ({ reload }) => {
    const [, setPersons] = useState<any[]>([]);

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

        </div>
    );
}

export default Workers;