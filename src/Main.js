"use strict";
exports.__esModule = true;
var Flight_1 = require("./Flight/Flight");
var DateTime_1 = require("./Flight/Date/DateTime");
var BookingFlight_1 = require("./Flight/Booking/BookingFlight");
var Booking_1 = require("./Flight/Booking/Booking");
var BookingTrip_1 = require("./Flight/Booking/BookingTrip");
var Passenger_1 = require("./Flight/Passenger/Passenger");
var Airport_1 = require("./Airport");
var date = new DateTime_1.DateTime(12, 12, 2022, 3);
var flight = new Flight_1.Flight("AA12", date, "phnom penh", "thland");
var bookingflight = new BookingFlight_1.BookingFlight();
bookingflight.getFlight(flight);
var bookingTrips = new BookingTrip_1.BookingTrip("china", "ff12", date, bookingflight);
bookingTrips.getBookingFlight(bookingflight);
var booking = new Booking_1.Booking();
booking.getBookingTrip(bookingTrips);
var passenger = new Passenger_1.Passenger("linna", "female", booking);
var airPort = new Airport_1.Airport("aaa", "phom penh", flight);
airPort.getFlight(flight);
console.log(passenger);