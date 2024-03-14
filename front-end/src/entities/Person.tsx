import React from "react"

export default class Person {
    constructor(
        private id: String,
        private name: String,
        private email: String,
        private telefone: String,
        private date: String,
        private cpf:String,
        private rg: String,
        private nacionalidade: String,
        private estadoCivil: String
        ) {
    }
}