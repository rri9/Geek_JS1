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
    cat.addEventListener("click", showFilmsOfCategory);
  });

  const f = document.createElement("div");
  f.id = "chooseCat";
  f.innerText = "Выберите категорию...";
  f.style.padding = "10px";
  document.querySelector(".films").appendChild(f);
}
//Показать фильмы определенной категории
function showFilmsOfCategory(event) {
  const parentNode = document.querySelector(".films");
  deleteOldFilms(parentNode, "film");
  films.forEach(film => {
    if (categories[film.category] == event.currentTarget.innerText) {
      const f = document.createElement("div");
      f.innerText = film.name;
      f.classList.add("film");
      parentNode.appendChild(f);
      f.addEventListener("click", showFilmDetails);
    }
  });
}
function deleteOldFilms(parentNode, className) {
  const chooseCat = document.querySelector("#chooseCat");
  if (chooseCat) {
    chooseCat.parentNode.removeChild(chooseCat);
  }
  const oldNodes = document.querySelectorAll("." + className);
  if (oldNodes.length == 0) {
    return;
  }
  for (let n = 0; n < oldNodes.length; n++) {
    parentNode.removeChild(oldNodes[n]);
  }
}
//Показать детали фильма
function showFilmDetails(event) {
  const parentNode = document.querySelector(".details");
  parentNode.innerHTML = "";
  parentNode.style.visibility = "visible";
  const newEl = document.createElement("div");
  newEl.classList = "filmDetails";
  let film = new Film();
  for (let f of films) {
    if (f.name == event.currentTarget.innerText) {
      film = f;
    }
  }
  newEl.innerHTML = `<h3>${film.name}</h3>`;
  newEl.innerHTML += `<p>Категория: ${categories[film.category]}</p>`;
  newEl.innerHTML += `<p>Бюджет: ${film.budget}</p>`;
  newEl.innerHTML += `<p>Оценка экспертов: ${film.expertStars}</p>`;

  const newBtnAddComment = document.createElement("button");
  newBtnAddComment.id = "addComment";
  newBtnAddComment.innerText = "Добавить отзыв";
  newBtnAddComment.addEventListener("click", addCommentForm);

  const newBtnShowComments = document.createElement("button");
  newBtnShowComments.id = "showComments";
  newBtnShowComments.innerText = "Показать отзывы";
  newBtnShowComments.addEventListener("click", showComments);

  parentNode.appendChild(newEl);
  parentNode.appendChild(newBtnShowComments);
  parentNode.appendChild(newBtnAddComment);
  showComments();
}
//Показать комментарии
function showComments(event) {
  const oldComments = document.querySelector(".comments");
  if (oldComments) {
    oldComments.parentNode.removeChild(oldComments);
  }

  const detailsNode = document.querySelector(".details");
  const filmName = document.querySelector(".filmDetails").firstElementChild
    .innerText;

  const newEl = document.createElement("div");
  newEl.classList = "comments";
  detailsNode.appendChild(newEl);

  for (let film of films) {
    if (film.name == filmName) {
      for (c of film.comments) {
        const newComment = document.createElement("div");
        newComment.classList = "comment";
        newComment.innerHTML = `<p>${c.text}</p>`;
        newComment.innerHTML += `<div class="stars">Оценка: ${c.stars}</div>`;
        newComment.innerHTML += `<div class="author">${c.author}</div>`;
        newEl.appendChild(newComment);
      }
    }
  }

  let comments = document.querySelector(".comments");
  if (comments && comments.innerHTML == "") {
    comments.innerHTML = '<div class="noComments">Комментариев пока нет. Оставьте свой!</div>';
  } else {
    const newBtn = document.createElement("button");
    newBtn.id = "hideComments";
    newBtn.innerText = "Спрятать отзывы";
    newBtn.addEventListener("click", hideComments);
    comments.appendChild(newBtn);
  }
}
//Отрисовка формы добавления комментария
function addCommentForm() {
  const oldComments = document.querySelector(".comments");
  if (oldComments) {
    oldComments.parentNode.removeChild(oldComments);
  }
  let str = `
  Ваш комментарий:<br>
    <textarea name="text" rows="3" cols="10"></textarea>
    <label> Ваше имя:
      <input type="text" size="30" name="author">
    </label>
    <label>Оценка фильма:
      <input type="text" size="1" name="stars">
    </label>
    <button id="addCommentFormBtn">OK</button>
  `;
  let newForm = document.createElement("form");
  document.querySelector(".details").appendChild(newForm);
  newForm = document.querySelector("form");
  newForm.innerHTML = str;

  let btn = document.querySelector("#addCommentFormBtn");
  btn.addEventListener("click", addCommentFormSubmit);
}
//Добавить комментарий (обработка данных от пользователя для отправки в метод фильма)
function addCommentFormSubmit(event) {
  event.preventDefault();

  let filmName = document.querySelector(".filmDetails").firstElementChild
    .innerText;
  let film = getFilmByName(filmName);

  let text = document.querySelector("textarea[name=text]").value;
  let author = document.querySelector("input[name=author]").value;
  let stars = document.querySelector("input[name=stars]").value;

  film.addComment(text, author, stars);

  let form = document.querySelector("form");
  form.parentNode.removeChild(form);

  showComments();
}
function getFilmByName(name) {
  for (film of films) {
    if (film.name == name) {
      return film;
    }
  }
}
function hideComments() {
  let comments = document.querySelector(".comments");
  if (comments) {
    comments.parentNode.removeChild(comments);
  }
}
