output = document.querySelector('#output');
search = document.querySelector('#sText');
replace = document.querySelector('#rText');
button = document.querySelector('button');

button.addEventListener('click', lookup);

function lookup() {
    s = output.textContent;
    rt = replace.value;
    regex = new RegExp(search.value, 'gi');
    if (s.match(regex)) {
        output.textContent = s.replace(regex, rt)
    }
}