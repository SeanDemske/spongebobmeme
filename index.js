const txtBox = document.querySelector('#textbox');
const btnConvert = document.querySelector('#btn-convert');
const btnCopyClip = document.querySelector('#btn-copy')
const lblConText = document.querySelector('#converted-txt');
const imgSponge = document.querySelector('#spongebob-image');

const buttonPressed = () => {
    if (imgSponge.getAttribute('src') !== './assets/sponge-meme.png' && txtBox.value !== '') {
        text = txtBox.value;
        displayText(convertText(text));
        toggleImage();
    }
}

const copyToClipboard = () => {
    lblConText.select();
    document.execCommand('copy');
}
//
// EVENT LISTENERS //////////////
//
                                        ///////////
btnCopyClip.addEventListener('click', copyToClipboard);
btnConvert.addEventListener('click', buttonPressed);
txtBox.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        buttonPressed();
    }
});

txtBox.addEventListener("input", () => {
    if (!lblConText.classList.contains('hidden')) {
        lblConText.classList.add('hidden');
        toggleImage();
    }
});
                                        ////////
//
// EVENT LISTENERS ///////////////
//

const displayText = (genText) => {
    lblConText.value = genText;
    lblConText.classList.remove('hidden');
}

const convertText = (textInput) => {
    var genString = '';
    for (let i = 0; i < textInput.length; i++) {
        genString += i % 2 === 0 ? textInput.charAt(i).toUpperCase() : textInput.toLowerCase().charAt(i);
    }
    return genString;
}

const toggleImage = () => {
    imgSponge.src = imgSponge.getAttribute('src') === './assets/sponge-default.png' ? './assets/sponge-meme.png' : './assets/sponge-default.png';
}