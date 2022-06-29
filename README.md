# dranik
Start template - webpack/scss

## SVG

SVG-спрайт генерируется автоматически. Файлы, которые должны попасть в спрайт, находятся в папке \src\img\sprite\

Для вызова иконки пишем (где 'href' = это название файла с иконкой):

`
<svg>
    <use xlink:href="#icon-camera"></use>
</svg>
`