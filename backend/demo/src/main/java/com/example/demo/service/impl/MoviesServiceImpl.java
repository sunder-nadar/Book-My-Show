package com.example.demo.service.impl;

import com.example.demo.model.MovieListResponse;
import com.example.demo.model.MovieModel;
import com.example.demo.repository.MoviesRepository;
import com.example.demo.service.MovieService;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;



import java.util.List;

@Service
public class MoviesServiceImpl implements MovieService {
    @Autowired
    MoviesRepository moviesRepository;

    @Override
    public ResponseEntity<String> createMovieDetails(MovieModel movieModel) {
        try {
            MovieModel savedMovie = moviesRepository.save(movieModel);
            moviesRepository.save(savedMovie);
            return new ResponseEntity<> ("success",HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<> ("success",HttpStatus.OK);
    }

    @Override
    public ResponseEntity<MovieModel> fetchMovieUsingName(String name) {
        try{
            return new ResponseEntity<>(moviesRepository.fetchUsingName(name),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(moviesRepository.fetchUsingName(name),HttpStatus.OK);
    }

    @Override
    public MovieListResponse fetchAllMovies() {
        try {
            List<MovieModel> movies = moviesRepository.findAll();
            return new MovieListResponse(movies);
        } catch (Exception e) {
            e.printStackTrace();
            return new MovieListResponse(null);
        }
    }

}
