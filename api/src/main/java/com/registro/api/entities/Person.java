package com.registro.api.entities;

public class Person {

    private Long id;
    private String name;
    private String email;
    private String telefone;
    private String date;
    private String cpf;
    private String rg;
    private String nacionalidade;
    private String estadoCivil;

    public Person(String id, String name, String email, String telefone, String date,
                  String cpf, String rg, String nacionalidade, String estadoCivil) {
        this.id = (id != null && !id.isEmpty()) ? Long.parseLong(id) : 0L;
        this.name = name;
        this.email = email;
        this.telefone = telefone;
        this.date = date;
        this.cpf = cpf;
        this.rg = rg;
        this.nacionalidade = nacionalidade;
        this.estadoCivil = estadoCivil;
    }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public String getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(String estadoCivil) {
        this.estadoCivil = estadoCivil;
    }
}
