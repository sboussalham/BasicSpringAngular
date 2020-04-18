package com.soufiane.controller;

import com.soufiane.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    private List<User> users = Stream.of(new User(108,"Mohamed","aaaaaaa@gmail.com","9087654321"),
            new User(101,"Ali","bbbbb@gmail.com","8867101121")).
            collect(Collectors.toList());

    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    public String login(){
        return "authenticated successfully" ;
    }

    @GetMapping("/getUsers")
    public List<User> getUsers(){
        return users;
    }

    @PostMapping("/addUser")
    @ResponseStatus(HttpStatus.CREATED)
    public String addUser(@RequestBody User user){
        users.add(user);
        return "User added";
    }
}
