export default function BackToTop() {
    const button = document.createElement('a');
    button.href = '#home';
    button.id = 'to-top';
    button.className =
        'fixed bottom-4 right-4 z-9999 hidden h-4 w-4 items-center justify-center rounded-full bg-orange-700 p-4 text-3xl text-white hover:animate-pulse';

    button.innerHTML = `
        <i class="bx bx-chevron-up"></i>
    `;

    return button;
}
