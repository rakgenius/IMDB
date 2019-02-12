package com.imdb.myImdb.controller;

import com.imdb.myImdb.model.Imdb;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@Slf4j
@RestController
@RequestMapping("/imdb")
public class ImdbController {

    private final String baseUrl =
            "https://www.omdbapi.com/?plot=full&apikey=&t=";
    @GetMapping("/movie/{searchTerm}")
    public Imdb getMovie(@PathVariable("searchTerm")String searchterm) throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        String url = baseUrl + searchterm;

        //Imdb imdb = restTemplate.getForObject(url, Imdb.class);
        ResponseEntity<Imdb> responseEntity = restTemplate.getForEntity(
                url,
                Imdb.class
        );

        Imdb imdb = responseEntity.getBody();
        if (imdb.getImdbID() == null)
            throw new Exception("unable to find the movie");
        log.info("Obtained info is {}", imdb);
        //return imdb;
        return responseEntity.getBody();
    }
}
