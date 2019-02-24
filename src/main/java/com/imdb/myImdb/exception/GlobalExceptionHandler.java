package com.imdb.myImdb.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Slf4j
@ControllerAdvice
@RestController
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(ImdbException.class)
    public final ResponseEntity exceptionHandler(final ImdbException e) {
        log.info("Handling the message in exceptionHandler");
        ExceptionResponse exceptionResponse = ExceptionResponse
                .of(e.getMessage(),
                        HttpStatus.NOT_FOUND);

        return new ResponseEntity(exceptionResponse, HttpStatus.NOT_FOUND);
        //return ResponseEntity.status(exceptionResponse.getHttpStatus())
        //        .body(exceptionResponse.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public final ResponseEntity generalExceptionHandler(final Exception e) {
        log.info("Handling the message in generalExceptionHandler");
        ExceptionResponse exceptionResponse = ExceptionResponse
                .of(e.getMessage(),
                        HttpStatus.NOT_FOUND);
        return ResponseEntity.status(exceptionResponse.getHttpStatus())
                .body(exceptionResponse.getMessage());
    }
}
