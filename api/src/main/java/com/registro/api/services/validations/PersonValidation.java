package com.registro.api.services.validations;

import java.util.Arrays;
import java.util.List;

import com.registro.api.entities.Person;

public class PersonValidation {

    private Person person;

    public PersonValidation(Person p) {
        this.person = p;
    }

    public Person getPerson() {
        return person;
    }

    public String personValidate(Person person, List<Person> persons) {
        String report = "";

        // id
        person.setId(getNewId(person, persons));

        // Name
        person.setName(formatName(person.getName()));
        if(person.getName().startsWith("$")) {
            report += person.getName().substring(1) + "&";
        }
        
        // Email
        // O Email já é verificado pelo input type="email" no front-end (fazer outras verificações)
        // TODO

        // Telefone
        person.setTelefone(formatPhone(person.getTelefone()));
        if(person.getTelefone().startsWith("$")) {
            report += person.getTelefone().substring(1)  + "&";
        }

        // Date
        person.setDate(formatDate(person.getDate()));
        // report =
        // TODO

        // CPF
        person.setCpf(formatCpf(person.getCpf()));
        if(person.getCpf().startsWith("$")) {
            report += person.getCpf().substring(1) + "&";
        }

        // RG
        person.setRg(formatRg(person.getRg()));
        if(person.getRg().startsWith("$")) {
            report += person.getRg().substring(1)  + "&";
        }

        // Nacionalidade
        person.setNacionalidade(formatNacionalidade(person.getNacionalidade()));
        if(person.getNacionalidade().startsWith("$")) {
            report += person.getNacionalidade().substring(1) + "&";
        }

        // Estado Civil
        person.setEstadoCivil(formatEstadoCivil(person.getEstadoCivil()));
        if(person.getEstadoCivil().startsWith("$")) {
            report += person.getEstadoCivil().substring(1);
        }

        this.person = person;
        
        return report;
    }

    private long getNewId(Person person, List<Person> persons) {
        if(persons.isEmpty()) {
            return 1;
        }
    
        int min = Integer.MIN_VALUE;
        long maxId = 1;
    
        for(Person p : persons) {
            if(p.getId() > min) {
                maxId = p.getId();
            }
        }
    
        long newId = maxId + 1;
        return newId;
    }

    private String formatName(String nameUnformatted) {
        String punctuationAndNumbersRemoved = nameUnformatted.replaceAll("[^a-zA-Z\\s]", "");

        if(nameUnformatted.isEmpty()) {
            return "$Erro: O nome está vazio.";
        }

        byte maxLength = 32;
        if(nameUnformatted.length() > maxLength) {
            return "$Erro: O nome é muito grande. Máximo de: " + maxLength;
        }

        String[] words = punctuationAndNumbersRemoved.split("\\s+");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            if (word.length() > 3) {
                result.append(word.substring(0, 1).toUpperCase()).append(word.substring(1)).append(" ");
            } else {
             result.append(word).append(" ");
            }
        }
        
        String nameFormated = result.toString().trim();

        return nameFormated;
    }

    private String formatPhone(String tel) {
        int length = tel.length();
	    
		tel = tel.replaceAll("\\s+", "");

        if(tel.isEmpty()) {
            return "$Erro: Telefone vazio";
        }
        
        if(length == 11) {
            String areaCode = tel.substring(0, 2);
            String firstPart = tel.substring(2, 7);
            String lastPart = tel.substring(7);

            String formattedPhone = "(" + areaCode + ") " + firstPart + "-" + lastPart;
            
            return formattedPhone;
        } else if(length == 10) {
            String areaCode = tel.substring(0, 2);
            String firstPart = tel.substring(2, 6);
            String lastPart = tel.substring(6);

            String formattedPhone = "(" + areaCode + ") " + firstPart + "-" + lastPart;
            
            return formattedPhone;
        } else {
            return "Erro: Telefone não é válido.";
        }
    }

    public String formatDate(String date) {
        return date; // TODO
    }

    private String formatCpf(String cpf) {
        if(cpf.isEmpty()) {
            return "$Erro: Cpf está vazio";
        }

        cpf = cpf.replaceAll("\\s+", "");

        if(cpf.length() != 11) {
            return "$Erro: Número de cpf invalido";
        }

        int[] digits = new int[11];

        for (int i = 0; i < 11; i++) {
            digits[i] = cpf.charAt(i) - 48;
        }

        int soma1 = 0;

        for (int j = 0; j < 9; j++) {
            soma1 += digits[j] * (j + 1);
        }

        int resto1 = soma1 % 11;

        if (resto1 == 10) {
            resto1 = 0;
        }

        if (resto1 != digits[9]) {
            return "$Erro: CPF invalido";
        }

        int soma2 = 0;

        for (int k = 0; k < 10; k++) {
            soma2 += digits[k] * (k);
        }

        int resto2 = soma2 % 11;

        if (resto2 == 10) {
            resto2 = 0;
        }

        if (resto2 != digits[10]) {
            return "$Erro: CPF invalido";
        }


        String firstPart = cpf.substring(0, 3);
	    String secondPart = cpf.substring(3, 6);
	    String thirdPart = cpf.substring(6, 9);
	    String finalPart = cpf.substring(9, 11);
	    
	    String formattedCpf =  firstPart + "." + secondPart + "." + thirdPart + "-" + finalPart;

        
        return formattedCpf;
    }

    private String formatRg(String rg) {
        rg = rg.replaceAll("\\s+", "");

        if(rg.isEmpty()) {
            return "$Erro: Rg está vazio";
        }

        if(rg.length() != 9) {
            return "$Erro: Rg inválido";
        }

        // A lógica do Rg varia de estado para estado

        String firstPart = rg.substring(0, 2);
        String secondPart = rg.substring(2, 5);
        String thirdPart = rg.substring(5, 8);
        String verificationDigit = rg.substring(8);

        String formattedRg = firstPart + "." + secondPart + "." + thirdPart + "-" + verificationDigit;

        return formattedRg;
    }

    private String formatNacionalidade(String nacionalidade) {
        nacionalidade = nacionalidade.replaceAll("[^a-zA-Z\\s]", "");

        if(nacionalidade.isEmpty()) {
            return "$Erro: Nacionalidade está vazio.";
        }

        byte maxLength = 16;
        if(nacionalidade.length() > maxLength) {
            return "$Erro: A nacionalidade é muito grande. Máximo de: " + maxLength;
        }

        nacionalidade.toLowerCase();
        nacionalidade = nacionalidade.substring(0, 1).toUpperCase() + nacionalidade.substring(1);

        return nacionalidade;
    }

    private String formatEstadoCivil(String estado) {
        String[] options = {"Solteiro", "Casado", "União Estável"};
        List<String> optionsList = Arrays.asList(options);

        if(optionsList.contains(estado)) {
            return estado;
        }

        return "$Erro: Estado civil não confere.";
    }
}
