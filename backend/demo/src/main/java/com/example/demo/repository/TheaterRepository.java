package com.example.demo.repository;

import com.example.demo.model.TheaterModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TheaterRepository extends JpaRepository <TheaterModel,Integer> {

    @Query(value="SELECT t FROM ShowModel s " +
            "JOIN TheaterModel t ON s.theater_id = t.id " +
            "JOIN MovieModel m ON s.movie_id = m.id " +
            "WHERE s.movie_id = :val")
    public List<TheaterModel> fetchTheaterDetails(@Param("val")int movieId);

    @Query(value = "SELECT t.capacity FROM TheaterModel t Where t.id = :val")
    public int getCapacity(@Param("val") int theaterId);

}
