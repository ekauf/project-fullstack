package com.example.location;

public class LocationNotFoundException extends RuntimeException {
    public LocationNotFoundException() { super("Location has not been found"); }
}
