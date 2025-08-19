<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Sign Up</title>
</head>

<body>
    <h1>Buat Account Baru!</h1>
    <h3>Sign Up Form</h3>
    <form action="/welcome" method="post">
        @csrf
        <label>First name:</label> <br> <br>
        <input type="text" name="firstName" required> <br> <br>

        <label>Last name:</label> <br> <br>
        <input type="text" name="lastName"> <br> <br>

        <label>Gender:</label> <br> <br>
        <input type="radio" name="Gender" required> Male <br>
        <input type="radio" name="Gender"> Female <br>
        <input type="radio" name="Gender"> Other <br> <br>

        <label>Nationality:</label> <br> <br>
        <select name="Nationality">
            <option value="">Indonesian</option>
            <option value="">Singaporean</option>
            <option value="">Malaysian</option>
        </select> <br> <br>

        <label>Language Spoken:</label> <br> <br>
        <input type="checkbox" name="Language Spoken"> Bahasa Indonesia<br>
        <input type="checkbox" name="Language Spoken"> English <br>
        <input type="checkbox" name="Language Spoken"> Other <br> <br>

        <label>Bio:</label> <br> <br>
        <textarea cols="30" rows="10"></textarea> <br>

        <input type="Submit" value="Sign Up">
    </form>
</body>

</html>