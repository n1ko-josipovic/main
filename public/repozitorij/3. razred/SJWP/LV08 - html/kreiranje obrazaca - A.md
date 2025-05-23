# Kreiranje obrazaca - A

---
#### [WEB stranica](https://joska.vercel.app/repozitorij/3.%20razred/SJWP/LV08%20-%20html/kreiranje%20obrazaca%20-%20A.html)
---

### kreiranje obrazaca - A.html
```html
<!DOCTYPE html>
<html lang="hr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obrasci</title>
    <style>
        :root {
            --primary-color: #4f46e5;
            --error-color: #ef4444;
            --success-color: #10b981;
            --text-color: #1f2937;
            --border-radius: 8px;
        }

        * {
            font-family: system-ui, -apple-system, sans-serif;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            line-height: 1.5;
            color: var(--text-color);
            background-color: #f3f4f6;
        }

        .form-container {
            max-width: 480px;
            margin: 2rem auto;
            padding: 2rem;
            background: white;
            border-radius: var(--border-radius);
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }

        .form-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-color);
            text-align: center;
            margin-bottom: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.25rem;
        }

        label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--text-color);
            margin-bottom: 0.5rem;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="password"],
        input[type="date"],
        select,
        textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e5e7eb;
            border-radius: var(--border-radius);
            background-color: #f9fafb;
            font-size: 0.875rem;
            transition: all 0.2s;
        }

        input:focus,
        select:focus,
        textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .checkbox-group,
        .radio-group {
            display: flex;
            gap: 1rem;
            margin: 0.5rem 0;
        }

        .checkbox-group label,
        .radio-group label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        input[type="submit"],
        button {
            width: 100%;
            padding: 0.75rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        input[type="submit"]:hover,
        button:hover {
            background-color: #4338ca;
        }

        .required:after {
            content: "*";
            color: var(--error-color);
            margin-left: 0.25rem;
        }

        .help-text {
            font-size: 0.75rem;
            color: #6b7280;
            margin-top: 0.25rem;
        }

        textarea {
            min-height: 100px;
            resize: vertical;
        }

        @media (max-width: 640px) {
            .form-container {
                margin: 1rem;
                padding: 1.5rem;
            }
        }
    </style>
</head>

<body>
    <section class="form-container">
        <h2 class="form-title">Registracija</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="ime" class="required">Ime</label>
                <input type="text" id="ime" name="ime" required placeholder="Unesite vaše ime">
            </div>

            <div class="form-group">
                <label for="prezime" class="required">Prezime</label>
                <input type="text" id="prezime" name="prezime" required placeholder="Unesite vaše prezime">
            </div>

            <div class="form-group">
                <label for="email" class="required">E-mail adresa</label>
                <input type="email" id="email" name="email" required placeholder="ime.prezime@example.com">
            </div>

            <div class="form-group">
                <label>Sportovi kojima se bavite</label>
                <div class="checkbox-group">
                    <label>
                        <input type="checkbox" name="sport" value="hokej">
                        Hokej
                    </label>
                    <label>
                        <input type="checkbox" name="sport" value="nogomet">
                        Nogomet
                    </label>
                    <label>
                        <input type="checkbox" name="sport" value="odbojka">
                        Odbojka
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label class="required">Spol</label>
                <div class="radio-group">
                    <label>
                        <input type="radio" name="spol" value="m" required>
                        Muško
                    </label>
                    <label>
                        <input type="radio" name="spol" value="z">
                        Žensko
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label for="password" class="required">Lozinka</label>
                <input type="password" id="password" name="password" required placeholder="Minimalno 8 znakova">
                <p class="help-text">Lozinka mora sadržavati najmanje 8 znakova, jedno veliko slovo i jedan broj</p>
            </div>

            <div class="form-group">
                <label>
                    <input type="checkbox" required>
                    Prihvaćam <a href="#">uvjete korištenja</a> i <a href="#">pravila privatnosti</a>
                </label>
            </div>

            <button type="submit">Registriraj se</button>
        </form>
    </section>

    <section class="form-container">
        <h2 class="form-title">Prijava</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="login-email" class="required">E-mail adresa</label>
                <input type="email" id="login-email" name="login-email" required placeholder="ime.prezime@example.com">
            </div>

            <div class="form-group">
                <label for="login-password" class="required">Lozinka</label>
                <input type="password" id="login-password" name="login-password" required
                    placeholder="Unesite vašu lozinku">
                <p class="help-text"><a href="#">Zaboravili ste lozinku?</a></p>
            </div>

            <button type="submit">Prijavi se</button>
        </form>
    </section>

    <section class="form-container">
        <h2 class="form-title">Kontaktirajte nas</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="contact-name" class="required">Ime i prezime</label>
                <input type="text" id="contact-name" name="contact-name" required
                    placeholder="Unesite vaše ime i prezime">
            </div>

            <div class="form-group">
                <label for="contact-email" class="required">E-mail adresa</label>
                <input type="email" id="contact-email" name="contact-email" required
                    placeholder="ime.prezime@example.com">
            </div>

            <div class="form-group">
                <label for="subject" class="required">Predmet</label>
                <input type="text" id="subject" name="subject" required placeholder="Ukratko opišite razlog kontakta">
            </div>

            <div class="form-group">
                <label for="message" class="required">Poruka</label>
                <textarea id="message" name="message" required placeholder="Detaljno opišite vaš upit"></textarea>
            </div>

            <button type="submit">Pošalji poruku</button>
        </form>
    </section>
</body>

</html>
```