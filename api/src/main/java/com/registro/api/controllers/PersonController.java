package com.registro.api.controllers;

import com.registro.api.entities.Person;
import com.registro.api.services.PersonService;
import com.registro.api.services.validations.PersonValidation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/person")
@CrossOrigin(origins = "http://localhost:3000")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping
    public ResponseEntity<String> createPerson(@RequestBody Person person) {
        PersonValidation validation = new PersonValidation(person);
        String report = validation.personValidate(person, personService.getAllPersons());
        
        if(report.isEmpty()) {
            personService.addPerson(person);
        } else {
            return new ResponseEntity<>(report, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>("Person cadastrado com sucesso!", HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Person>> getAllPersons() {
        return new ResponseEntity<>(personService.getAllPersons(), HttpStatus.OK);
    }
}