package com.imdb.myImdb.exception;

import com.imdb.myImdb.controller.ImdbController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(ImdbController.class)
public class ImdbExceptionTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    public void getMovie() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/imdb/movie/shrek")
                .accept(MediaType.APPLICATION_JSON);

        MvcResult mvcResult = mockMvc.perform(requestBuilder)
                .andExpect(status().isOk())
                .andExpect(content().json("{imdbID:tt0126029}"))
                .andReturn();
    }

    @org.junit.Test(expected = ImdbException.class)
    public void getMovieException() throws ImdbException, Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .get("/imdb/movie/sdfasdfsf")
                .accept(MediaType.APPLICATION_JSON);

        MvcResult mvcResult = mockMvc.perform(requestBuilder)
                .andExpect(status().is4xxClientError())
                .andReturn();
    }
}