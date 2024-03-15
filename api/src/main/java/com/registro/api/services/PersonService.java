package com.registro.api.services;

import com.registro.api.entities.Person;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class PersonService {

    private List<Person> personList = new ArrayList<>();

    public void addPerson(Person person) {
        personList.add(person);
    }

    public List<Person> getAllPersons() {
        return personList;
    }
}