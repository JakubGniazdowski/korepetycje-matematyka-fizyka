# Inżynierowie — Matematyka i Fizyka

Responsywna strona internetowa zespołu prowadzącego zajęcia z matematyki i fizyki. Projekt nie wymaga instalowania Node.js, Pythona ani żadnych bibliotek — cała strona znajduje się w jednym pliku `index.html`.

## Struktura projektu

```text
Strona inżynierowie/
├── index.html
├── README.md
└── assets/
    ├── zajecia-01.jpg
    ├── zajecia-02.jpg
    ├── ...
    └── zajecia-24.jpg
```

## Uruchomienie strony

Otwórz plik `index.html` w przeglądarce. Nie trzeba uruchamiać serwera ani instalować dodatkowego oprogramowania.

Po zmianie plików odśwież stronę skrótem `Ctrl+Shift+R`, aby pominąć pamięć podręczną przeglądarki.

## Dodawanie 24 zdjęć do galerii

> **Ważne:** dodanie zdjęć jako załączników w czacie Kiro nie kopiuje ich automatycznie do katalogu projektu. Zdjęcia muszą być zapisane na komputerze, a następnie przeciągnięte do folderu `assets`.

### Krok 1 — otwórz folder `assets`

W panelu Explorer w Kiro rozwiń katalog projektu i otwórz folder:

```text
assets
```

Folder znajduje się obok plików `index.html` i `README.md`.

### Krok 2 — wklej zdjęcia

Przeciągnij wszystkie fotografie z komputera do folderu `assets`. Możesz też skopiować zdjęcia, a następnie wkleić je do tego folderu w systemowym menedżerze plików.

### Krok 3 — nadaj zdjęciom właściwe nazwy

Kod galerii oczekuje dokładnie następujących nazw:

```text
zajecia-01.jpg
zajecia-02.jpg
zajecia-03.jpg
zajecia-04.jpg
zajecia-05.jpg
zajecia-06.jpg
zajecia-07.jpg
zajecia-08.jpg
zajecia-09.jpg
zajecia-10.jpg
zajecia-11.jpg
zajecia-12.jpg
zajecia-13.jpg
zajecia-14.jpg
zajecia-15.jpg
zajecia-16.jpg
zajecia-17.jpg
zajecia-18.jpg
zajecia-19.jpg
zajecia-20.jpg
zajecia-21.jpg
zajecia-22.jpg
zajecia-23.jpg
zajecia-24.jpg
```

Nazwy muszą być zapisane małymi literami, bez polskich znaków i spacji. Numery od `01` do `09` muszą zawierać zero na początku.

### Sugerowana kolejność zdjęć

Galeria ma już przygotowane podpisy i teksty alternatywne. Najlepiej przypisać zdjęcia w tej kolejności:

| Plik | Temat widoczny na zdjęciu |
|---|---|
| `zajecia-01.jpg` | Procenty i proporcje |
| `zajecia-02.jpg` | Prędkość, droga i czas |
| `zajecia-03.jpg` | Równia pochyła i siły |
| `zajecia-04.jpg` | Dynamika układu ciał |
| `zajecia-05.jpg` | Maszyna Atwooda |
| `zajecia-06.jpg` | Rozkład siły na składowe |
| `zajecia-07.jpg` | Energia, praca i moc |
| `zajecia-08.jpg` | Wykresy ruchu |
| `zajecia-09.jpg` | Geometria trójkątów |
| `zajecia-10.jpg` | Zasada zachowania pędu |
| `zajecia-11.jpg` | Energia kinetyczna i pęd |
| `zajecia-12.jpg` | Równania liniowe |
| `zajecia-13.jpg` | Równania z ułamkami |
| `zajecia-14.jpg` | Działania na liczbach |
| `zajecia-15.jpg` | Procenty i ułamki |
| `zajecia-16.jpg` | Trygonometria w geometrii |
| `zajecia-17.jpg` | Funkcje trygonometryczne |
| `zajecia-18.jpg` | Pole równoległoboku |
| `zajecia-19.jpg` | Pola figur |
| `zajecia-20.jpg` | Wyrażenia i geometria |
| `zajecia-21.jpg` | Trapez i jego pole |
| `zajecia-22.jpg` | Podobieństwo trójkątów |
| `zajecia-23.jpg` | Prawo Archimedesa |
| `zajecia-24.jpg` | Zadania z geometrii |

Kolejność można zmienić przez zamianę nazw plików. Przykładowo zamiana nazw `zajecia-01.jpg` i `zajecia-02.jpg` zamieni ich miejsca w galerii.

## Format zdjęć

Kod jest obecnie przygotowany dla plików JPG. Jeżeli fotografie mają rozszerzenie `.jpeg`, `.png`, `.webp` albo `.heic`, wybierz jedną z poniższych metod:

1. Wyeksportuj zdjęcia jako JPG i użyj nazw podanych wyżej — to najprostsza metoda.
2. Zmień odpowiednie ścieżki w `index.html`, na przykład:

```html
<img src="assets/zajecia-01.webp" alt="...">
```

Nie zmieniaj samej końcówki nazwy z `.heic` lub `.png` na `.jpg`, ponieważ nie konwertuje to formatu obrazu.

## Zalecana optymalizacja

Aby strona szybko działała na telefonach:

- zmniejsz dłuższy bok zdjęcia do około 1600–1920 px,
- zapisuj JPG z jakością około 75–85%,
- postaraj się, aby jeden plik zajmował mniej niż 500 KB,
- nie usuwaj oryginalnych zdjęć — pracuj na kopiach.

## Sprawdzenie galerii

1. Upewnij się, że folder `assets` znajduje się obok `index.html`.
2. Sprawdź, czy nazwy zawierają numery od `01` do `24`.
3. Otwórz `index.html` lub odśwież stronę przez `Ctrl+Shift+R`.
4. Kafelki zastępcze powinny zostać automatycznie zastąpione fotografiami.
5. Kliknięcie zdjęcia powinno otworzyć jego powiększenie.

Jeżeli zdjęcie się nie wyświetla, najczęstszą przyczyną jest:

- inna wielkość liter, np. `.JPG` zamiast `.jpg`,
- niewłaściwy numer lub brak zera, np. `zajecia-1.jpg`,
- podwójne rozszerzenie, np. `zajecia-01.jpg.jpg`,
- umieszczenie pliku poza folderem `assets`,
- format obrazu niezgodny z rozszerzeniem.

## Zmiana podpisu zdjęcia

W pliku `index.html` wyszukaj nazwę danego pliku, np.:

```text
assets/zajecia-01.jpg
```

W tym samym elemencie galerii można zmienić:

- `alt="..."` — opis dla dostępności i wyszukiwarek,
- `data-caption="..."` — podpis w powiększeniu,
- zawartość `<figcaption>...</figcaption>` — podpis miniatury.

## Publikacja strony ze zdjęciami

Podczas publikacji trzeba przesłać cały projekt, a nie tylko plik `index.html`.

### Netlify Drop

1. Otwórz <https://app.netlify.com/drop>.
2. Przeciągnij cały folder `Strona inżynierowie`.
3. Sprawdź po publikacji sekcję galerii.

### GitHub Pages

1. Dodaj do repozytorium `index.html`, `README.md` oraz cały folder `assets`.
2. W repozytorium otwórz **Settings → Pages**.
3. Wybierz **Deploy from a branch**, gałąź `main` i katalog `/root`.
4. Zapisz ustawienia i poczekaj na wygenerowanie adresu strony.

Nazwy plików na hostingu są rozróżniane pod względem wielkości liter, dlatego `zajecia-01.jpg` i `Zajecia-01.JPG` są traktowane jako różne pliki.
