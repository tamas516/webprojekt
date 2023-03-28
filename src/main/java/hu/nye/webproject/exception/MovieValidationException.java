package hu.nye.webproject.exception;

import java.util.List;

public class MovieValidationException extends RuntimeException{

  private List<String> errorList;

  public MovieValidationException(List<String> errorList) {
    this.errorList = errorList;
  }

  public List<String> getErrorList() {
    return errorList;
  }
}
