// Task 21: Match All Non-Numbers
let movieName = '2001: A Space Odyssey';
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

// Task 22: Restrict Possible Usernames
let username = 'JackOfAllTrades';
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

// Task 23: Match Whitespace
let sample = 'Whitespace is important in separating words';
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

// Task 24: Match Non-Whitespace Characters
let sample = 'Whitespace is important in separating words';
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

// Task 25: Specify Upper and Lower Number of Matches
let ohStr = 'Ohhh no';
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

// Task 26: Specify Only the Lower Number of Matches
let haStr = 'Hazzzzah';
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

// Task 27: Specify Exact Number of Matches
let timStr = 'Timmmmber';
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

// Task 28: Check for All or None
let favWord = 'favorite';
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

// Task 29: Positive and Negative Lookahead

// Task

// Task

// Task

// Task

// Task

// Task

// Task
