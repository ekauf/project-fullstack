package com.example.location;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class LocationsService {
    @Autowired
    LocationsRepository locationsRepository;

    // CREATE

    public void addLocation(Location location) {
        locationsRepository.save(location);
    }

    // READ

    public Location getLocationById(long id) {
        Optional<Location> location = locationsRepository.findById(id);
        if(location.isEmpty()) {
            throw new LocationNotFoundException();
        }
        return location.get();
    }

    public Location getRandomLocation() {
        List<Location> locations = locationsRepository.findAll();
        Random rand = new Random();
        return locations.get(rand.nextInt(locations.size()));
    }

    public List<Location> getAllLocations() {
        return locationsRepository.findAll();
    }

    //UPDATE

    public void updateLocation(Location newLocation, long id) {
        if(!locationsRepository.existsById(id)) {
            throw new LocationNotFoundException();
        }
        newLocation.setId(id);
        locationsRepository.save(newLocation);
    }

    //DELETE

    @Transactional
    public void deleteLocationById(long id) {
        if(!locationsRepository.existsById(id)) {
            throw new LocationNotFoundException();
        }
        locationsRepository.deleteGreetingById(id);
    }

    //

    public List<Long> getLocationIds() {
        List<Location> locations = locationsRepository.findAll();
        List<Long> locationIds = new ArrayList<>();

        for(Location location : locations) {
            locationIds.add(location.getId());
        }
        return locationIds;
    }

    public List<String> getCountries() {
        List<Location> locations = locationsRepository.findAll();

        Set<String> uniqueCountries = new HashSet<>();
        for(Location location : locations) {
            uniqueCountries.add(location.getCountry());
        }
        return new ArrayList<>(uniqueCountries);
    }

    public List<Location> getLocationsByCountry(String countryName, int limit) {
        List<Location> locations = locationsRepository.findAll();
        List<Location> filteredLocations = new ArrayList<>();

        for (Location location : locations) {
            if(location.getCountry().equalsIgnoreCase(countryName)) {
                filteredLocations.add(location);
            }
            if(filteredLocations.size() == limit) {
                break;
            }
        }
        return filteredLocations;
    }
}
