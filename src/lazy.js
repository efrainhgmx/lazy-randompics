const isIntersecting = (entry  => {
    return entry.isIntersecting
})

const action = (entry) => {
    const nodo = entry.target;
    console.log("Hi");
    observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(action)
})

export const registerImage = (image) => {
    observer.observe(image);
}