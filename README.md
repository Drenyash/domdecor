# dranik
Start template - webpack/scss

## API

В проект включен [JSON server](https://github.com/typicode/json-server) для имитации API. Данные хранятся в файле data.json в корне проекта. Сервер доступен по адресу `http://localhost:3001/`  
Запустить сервер: `npm run server`

## SVG

SVG-спрайт генерируется автоматически. Файлы, которые должны попасть в спрайт, находятся в папке `\src\img\sprite\`  
Для вызова иконки пишем (где 'href' = это название файла с иконкой):

`
<svg>
    <use xlink:href="#icon-camera"></use>
</svg>
`