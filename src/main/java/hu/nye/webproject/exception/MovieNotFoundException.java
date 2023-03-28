package hu.nye.webproject.exception;

public class MovieNotFoundException extends RuntimeException{

  public MovieNotFoundException(String message) {
    super(message);
  }
}
