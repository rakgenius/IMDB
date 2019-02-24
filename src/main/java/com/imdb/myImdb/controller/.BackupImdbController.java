package com.imdb.myImdb.controller;

/*
@Slf4j
@RestController
@RequestMapping("/imdb")
public class BackupImdbController {

    private final String baseUrl =
            "https://www.omdbapi.com/?plot=full&apikey=42dbf993&t=";
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
*/
