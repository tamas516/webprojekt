package hu.nye.webproject.controller;


import hu.nye.webproject.exception.MovieNotFoundException;
import hu.nye.webproject.exception.MovieValidationException;
import hu.nye.webproject.response.ErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(assignableTypes = MovieController.class)
public class MovieControllerAdvice {

  @ExceptionHandler(value = MovieNotFoundException.class)
  public ResponseEntity<Void> handleMovieNotFoundException(){
    return ResponseEntity.status(404).build();
  }

  @ExceptionHandler(value = MovieValidationException.class)
  public ResponseEntity<ErrorResponse> handleMovieValidationException(MovieValidationException exception){
    ErrorResponse errorResponse = new ErrorResponse(exception.getErrorList());
    return ResponseEntity.status(400).body(errorResponse);
  }

}
