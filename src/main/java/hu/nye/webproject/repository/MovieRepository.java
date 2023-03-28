package hu.nye.webproject.repository;

import hu.nye.webproject.entity.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<MovieEntity, Long> {



}
