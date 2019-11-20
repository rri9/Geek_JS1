const categories = [
  "Комедии",
  "Ужасы",
  "Боевики",
  "Мелодрамы",
  "Триллеры",
  "Мультфильмы",
];
const films = [];

class Comment {
  constructor(text, author, stars) {
    this.text = text;
    this.author = author;
    this.stars = stars;
  }
}

class Film {
  constructor(name, category) {
    this.name = name;
    this.category = category;
    this.budget = 0;
    this.expertStars = 3;
    this.comments = [];
  }
  addComment(text, author, stars) {
    this.comments.push(new Comment(text, author, stars));
  }
  getAverageStars() {
    if (this.comments.length == 0) {
      return 0;
    }
    let starsSum = 0;
    for (let comment of this.comments) {
      starsSum += comment.stars;
    }
    return starsSum / this.comments.length;
  }
}

function getFilmsByCategory(cat) {
  const newFilms = [];
  for (let film of films) {
    if (film.cat === cat) {
      newFilms.push(film);
    }
  }
  return newFilms;
}

//Создаем фильмы
films.push(new Film("Друзья", 0));
films.push(new Film("Иван Васильевич меняет профессию", 0));
films.push(new Film("Один дома", 0));

films.push(new Film("Интервью с вампиром", 1));
films.push(new Film("Сонная лощина", 1));
films.push(new Film("Американская история ужасов", 1));

films.push(new Film("Схватка", 2));
films.push(new Film("Гладиатор", 2));
films.push(new Film("Мстители", 2));

films.push(new Film("Титаник", 3));
films.push(new Film("Форрест Гамп", 3));
films.push(new Film("Великий Гэтсби", 3));

films.push(new Film("Бойцовский клуб", 4));
films.push(new Film("Остров проклятых", 4));
films.push(new Film("Отступники", 4));

films.push(new Film("Король Лев", 5));
films.push(new Film("Как приручить дракона", 5));
films.push(new Film("Ну, погоди!", 5));

//Добавляем комменты
films[0].addComment("Лучший сериал", "user1", 5);
films[0].addComment("Хороший сериал", "user2", 4);
films[7].addComment("Не зашло...", "user3", 2);
films[7].addComment("Отличный фильм!", "user4", 5);
films[9].addComment("Ревела весь фильм...", "user5", 4);
films[9].addComment("Дикаприо - красавчик", "user6", 5);
films[17].addComment(
  "Гениальный советский мультфильм, неподвластный времени!",
  "Акари",
  5
);
films[17].addComment("Смех, радость, веселье и море позитива!", "holloway", 5);

showCategories();

//Отрисовываем категории
function showCategories() {
  const parentNode = document.querySelector("#categories");

  categories.forEach(category => {
    const cat = document.createElement("div");
    cat.innerText = category;
    cat.classList.add("category");
    parentNode.appendChild(cat);
  });

  const cat = document.querySelectorAll(".category");
  // console.log(cat);
  for (let n = 0; n < cat.length; n++) {
    cat[n].addEventListener("click", showFilmsOfCategory);
  }
}

function showFilmsOfCategory(event) {
  // console.log("showFilmsOfCategory called");
  // console.log(event.currentTarget.innerText);
  const parentNode = document.querySelector(".films");
  
  films.forEach(film => {
    if (categories[film.category] == event.currentTarget.innerText) {
      const f = document.createElement("div");
      f.innerText = film.name;
      f.classList.add("film");
      //TODO Delete prev child nodes of other category
      parentNode.appendChild(f);
    }
  });
}
