import './AddWorker.css';

import React, { useState } from "react";

import { usePersonContext } from '../../context/PersonContext';

import Person from '../../entities/Person';

const AddWorker: React.FC = () => {
    const context = usePersonContext();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [date, setDate] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [estadoCivil, setEstadoCivil] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        context.postPerson(new Person("", name, email, telefone, date, cpf, rg, nacionalidade, estadoCivil));

        setName("");
        setEmail("");
        setTelefone("");
        setDate("");
        setCpf("");
        setRg("");
        setNacionalidade("");
        setEstadoCivil("");
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

                <label>Email</label>
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
                <select 
                    id="estado-civil"
                    value={estadoCivil}
                    onChange={(e) => setEstadoCivil(e.target.value)}
                >
                    <option value={""}>Selecione</option>
                    <option value={"Solteiro"}>Solteiro</option>
                    <option value={"Casado"}>Casado</option>
                    <option value={"União Estável"}>União Estável</option>
                </select>

                <input type="submit"/>
            </form>
        </div>
    );
}

export default AddWorker;