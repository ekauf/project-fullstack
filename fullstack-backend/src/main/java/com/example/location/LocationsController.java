package com.example.location;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LocationsController {

    @Autowired
    private LocationsService locationsService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(LocationNotFoundException exception) {
        String errorMessage = exception.getMessage();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }

    // CREATE

    @PostMapping("/location")
    public ResponseEntity<Location> createLocation(@RequestBody Location location) {
        locationsService.addLocation(location);
        return ResponseEntity.status(HttpStatus.CREATED).body(location);
    }

    // READ

    @GetMapping("/locations")
    public ResponseEntity<List<Location>> getLocations(@RequestParam(required = false) String countryName, @RequestParam(defaultValue = "20") int limit) {
        return ResponseEntity.status(HttpStatus.OK).body(locationsService.getAllLocations());
    }

    @GetMapping("/locations/ids")
    public ResponseEntity<List<Long>> getLocationsIds() {
        return ResponseEntity.status(HttpStatus.OK).body(locationsService.getLocationIds());
    }

    @GetMapping("/locations/countries")
    public ResponseEntity<List<String>> getLocationsCountries() {
        return ResponseEntity.status(HttpStatus.OK).body(locationsService.getCountries());
    }

    @GetMapping("location/random")
    public ResponseEntity<Location> getRandomLocation() {
        return ResponseEntity.status(HttpStatus.OK).body(locationsService.getRandomLocation());
    }

    @GetMapping("/location/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(locationsService.getLocationById(id));
    }

    // UPDATE

    @PutMapping("/location/{id}")
    public ResponseEntity<Location> updateLocation(@RequestParam Location newLocation, @PathVariable long id)  {
        newLocation.setId(id);
        locationsService.updateLocation(newLocation, id);
        return ResponseEntity.status(HttpStatus.OK).body(newLocation);
    }

    // DELETE

    @DeleteMapping("/location/{id}")
    public ResponseEntity<Void> deleteLocationById(@PathVariable long id) {
        locationsService.deleteLocationById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }



}

