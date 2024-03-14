import React, { useState } from "react";

import Person from '../../entities/Person';

interface Props {
    onPost: () => void;
}

const AddWorker: React.FC<Props> = ({ onPost }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [date, setDate] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [estadoCivil, setEstadoCivil] = useState("");

    const urlApi = "http://localhost:8080/api/person";

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetchPerson(new Person("", name, email, telefone, date, cpf, rg, nacionalidade, estadoCivil));
    }

    async function fetchPerson(person: Person) {
        try {
            const response = await fetch(urlApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(person),
            });

            if (!response.ok) {
                throw new Error(`Erro ao enviar dados. Status: ${response.status}`);
            } else {
                console.log("Pessoa enviada com sucesso!");
                onPost();
            }
        } catch (e: any) {
            console.log(e.messsage);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nome</label>
                <input
                    type="text"
                    id="nome"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />

                <label>email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />

                <label>Numero de Telefone</label>
                <input
                    type="text"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => {setTelefone(e.target.value)}}
                />

                <label>Data de Nascimento</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => {setDate(e.target.value)}}
                />

                <label>CPF</label>
                <input
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={(e) => {setCpf(e.target.value)}}
                />

                <label>RG</label>
                <input
                    type="text"
                    id="rg"
                    value={rg}
                    onChange={(e) => {setRg(e.target.value)}}
                />

                <label>Nacionalidade</label>
                <input
                    type="text"
                    id="nacionalidade"
                    value={nacionalidade}
                    onChange={(e) => {setNacionalidade(e.target.value)}}
                />

                <label>Estado Civil</label>
                <input
                    type="text"
                    id="estado-civil"
                    value={estadoCivil}
                    onChange={(e) => {setEstadoCivil(e.target.value)}}
                />

                <input type="submit"/>
            </form>
        </div>
    );
}

export default AddWorker;