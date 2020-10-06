let container = document.getElementById('body-content-images');

for (const image in images) {

    const { heading, description, path } = images[image];
    
    let div = document.createElement('div');
    div.style.backgroundImage = `url(${path})`;

    let div_hover = document.createElement('div')
    div_hover.setAttribute('id', 'image-hover');

    let div_text = document.createElement('div')
    div_text.setAttribute('id', 'text-hover');

    let title = document.createElement('div');
    let desc = document.createElement('div');

    title.innerHTML = heading;
    desc.innerHTML = description;

    div_text.appendChild(title);
    div_text.appendChild(desc);

    div.appendChild(div_hover);
    div.appendChild(div_text);

    container.appendChild(div);

}