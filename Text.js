export const Text = (text) => {
    const vnitrniText = text;

    const elmText = document.createElement('text');
    elmText.classList.add('text')
    elmText.innerHTML = vnitrniText;

    return elmText
}