import React, { ReactNode, createContext, useContext, useState } from "react";

import Person from "../entities/Person";

interface PersonContextType {
    persons: Person[];
    postPerson: (person: Person) => void;
    reload: () => void;
    response: String;
  }

const PersonContext = createContext<PersonContextType | null>(null);

export const PersonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [persons, setPersons] = useState<Person[]>([]);
    const [reloadPage, setReloadPage] = useState<boolean>(false);
    const [response, setResponse] = useState<String>("");

    const urlApi = "http://localhost:8080/api/person";

    async function postPerson(person: Person) {

        fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(person),
        })
        .then(res => setResponse(res.text().toString()))
        .then(data => console.log(data))
        .then(() => reload())
        .catch(e => console.log(e));
    }

    const getting = async () => {
        try {
            const response = await fetch(urlApi);
            if (!response.ok) {
                throw new Error("Erro ao carregar dados");
            }
            const jsonData = await response.json();
            setPersons(jsonData);
        } catch (error) {
                console.error("Erro ao carregar dados:", error);
        }
    }
    getting();

    const reload = () => {
        setReloadPage(!reloadPage);
    }

    const context: PersonContextType =  {
        persons,
        postPerson,
        reload,
        response,
    }
  
    return (
      <PersonContext.Provider value={context}>
        {children}
      </PersonContext.Provider>
    );
};
  
export const usePersonContext = () => {
    const context = useContext(PersonContext);
    if (!context) {
      throw new Error("usePersonContext deve ser usado dentro do PersonProvider");
    }
    return context;
};