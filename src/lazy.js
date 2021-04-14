const isIntersecting = (entry  => {
    return entry.isIntersecting;
})

const loadImage = (entry) => {
    const imageContainer = entry.target;
    const image = imageContainer.firstChild;
    const url = image.dataset.src;

    image.src = url;
    
    observer.unobserve(imageContainer);
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage);
})

export const registerImage = (image) => {
    observer.observe(image);
}