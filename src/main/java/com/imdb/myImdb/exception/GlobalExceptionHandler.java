package com.imdb.myImdb.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(ImdbException.class)
    public final ResponseEntity exceptionHandler(final ImdbException e) {
        ExceptionResponse exceptionResponse = ExceptionResponse
                .of(e.getMessage(),
                        HttpStatus.NOT_FOUND);

        return ResponseEntity.status(exceptionResponse.getHttpStatus())
                .body(exceptionResponse.getMessage());
    }
}
