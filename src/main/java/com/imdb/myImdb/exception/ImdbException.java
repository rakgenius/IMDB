package com.imdb.myImdb.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ImdbException extends RuntimeException {
    public ImdbException() {
        super();
    }

    public ImdbException(String s) {
        super(s);
    }

    public ImdbException(String s, Throwable throwable) {
        super(s, throwable);
    }

    public ImdbException(Throwable throwable) {
        super(throwable);
    }

    protected ImdbException(String s, Throwable throwable, boolean b, boolean b1) {
        super(s, throwable, b, b1);
    }
}
