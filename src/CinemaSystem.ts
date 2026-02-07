// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.

// 1. Create an enum called MovieGenre with at least 5 movie genres.
enum MovieGenre {
  Action,
  Horror,
  Suspense,
  HumanDrama,
  LoveRomance,
  // add 4 more
}

// 2. Create a   called Seat which holds (rowLetter: string, seatNumber: number).
type Seat = [string, number];

// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
type Movie = {
  movieId: number;
  title: string;
  genre: MovieGenre;
  availableSeats: Seat[];
};

let movies: Movie[] = [];

// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
function addMovie(
  movieId: number,
  title: string,
  genre: MovieGenre,
  availableSeats: Seat[],
): Movie {
  const movie = {
    movieId,
    title,
    genre,
    availableSeats,
  };

  movies.push(movie);

  return movie;
}

// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
function bookSeat(
  movieId: number,
  rowLetter: string,
  seatNumber: number,
): string {
  const availableSeats = movies.find((movie) => movie.movieId === movieId);
  const foundIndex = availableSeats?.availableSeats.findIndex(
    (seat) => seat[0] === rowLetter && seat[1] === seatNumber,
  );
  if (foundIndex) {
    availableSeats?.availableSeats.splice(foundIndex, 1);
    return `Seat ${availableSeats?.availableSeats[0]}${availableSeats?.availableSeats[0]} booked successfully`;
  }

  return "Seats not available";
}

// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
function checkSeatAvailability(
  movieId: number,
  rowLetter: string,
  seatNumber: number,
): boolean {
  const availableSeats = movies.find((movie) => movie.movieId === movieId);
  const foundSeat = availableSeats?.availableSeats.find(
    (seat) => seat[0] === rowLetter && seat[1] === seatNumber,
  );

  if (foundSeat) {
    return true;
  } else {
    return false;
  }
}

// Test cases (Create more if needed)
console.log(
  addMovie(1, "Avengers", MovieGenre.Action, [
    ["A", 1],
    ["A", 2],
  ]),
); // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)); // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)); // false
