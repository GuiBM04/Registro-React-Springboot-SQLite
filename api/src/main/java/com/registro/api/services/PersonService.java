package com.registro.api.services;

import com.registro.api.entities.Person;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class PersonService {

    private List<Person> personList = new ArrayList<>();

    public void addPerson(Person person) {

        person.setId(getNewId());

        personList.add(person);
    }

    public long getNewId() {
        if(personList.isEmpty()) {
            return 1;
        }

        int min = Integer.MIN_VALUE;
        long maxId = 1;

        for(Person p : personList) {
            if(p.getId() > min) {
                maxId = p.getId();
            }
        }

        long newId = maxId + 1;

        return newId;
    }

    public List<Person> getAllPersons() {
        return personList;
    }
}